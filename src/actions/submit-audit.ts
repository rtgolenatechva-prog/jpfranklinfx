'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { createServiceClient } from '@/lib/supabase/server'

const AuditFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  phone: z.string().optional(),
  revenue: z.string().min(1, 'Please select your annual revenue'),
  challenge: z
    .string()
    .min(20, 'Please describe your challenge in at least 20 characters'),
})

export type AuditFormInput = z.infer<typeof AuditFormSchema>

export interface AuditFormResult {
  success: boolean
  message: string
  errors?: Partial<Record<keyof AuditFormInput, string>>
}

export async function submitAuditForm(
  data: AuditFormInput
): Promise<AuditFormResult> {
  // Validate input
  const parsed = AuditFormSchema.safeParse(data)
  if (!parsed.success) {
    const errors: Partial<Record<keyof AuditFormInput, string>> = {}
    for (const [field, messages] of Object.entries(
      parsed.error.flatten().fieldErrors
    )) {
      errors[field as keyof AuditFormInput] = messages?.[0]
    }
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors,
    }
  }

  // Get request metadata for deduplication / spam prevention
  const headersList = await headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'
  const userAgent = headersList.get('user-agent') ?? undefined

  try {
    const supabase = createServiceClient()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from('leads').insert({
      name: parsed.data.name.trim(),
      email: parsed.data.email.toLowerCase().trim(),
      company: parsed.data.company.trim(),
      website: parsed.data.website || null,
      phone: parsed.data.phone || null,
      revenue: parsed.data.revenue,
      challenge: parsed.data.challenge.trim(),
      source: 'audit-form',
      ip_address: ip,
      user_agent: userAgent,
    })

    if (error) {
      console.error('[submitAuditForm] Supabase error:', error.message)
      return {
        success: false,
        message:
          'Something went wrong on our end. Please try again or email us directly at hello@jpfranklinfx.co.nz',
      }
    }

    return {
      success: true,
      message:
        'Your audit has been submitted. Expect to hear from us within 24 business hours.',
    }
  } catch (err) {
    console.error('[submitAuditForm] Unexpected error:', err)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}
