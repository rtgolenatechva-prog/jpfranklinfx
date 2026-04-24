'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

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

function buildEmailHtml(data: AuditFormInput): string {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Website', data.website || '—'],
    ['Phone', data.phone || '—'],
    ['Annual Revenue', data.revenue],
  ]

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#6b7280;white-space:nowrap;vertical-align:top;border-bottom:1px solid #1f2937;">${label}</td>
        <td style="padding:10px 16px;font-size:13px;color:#f3f4f6;vertical-align:top;border-bottom:1px solid #1f2937;">${value}</td>
      </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#064e3b,#0c4a6e);border-radius:12px 12px 0 0;padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6ee7b7;">New Lead</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#f0fdf4;">Strategy Audit Request</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#a7f3d0;">${SITE_CONFIG.fullName}</p>
          </td>
        </tr>

        <!-- Lead details -->
        <tr>
          <td style="background:#111111;border:1px solid #1f2937;border-top:none;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        <!-- Challenge -->
        <tr>
          <td style="background:#111111;border:1px solid #1f2937;border-top:none;padding:16px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">Primary Business Challenge</p>
            <p style="margin:0;font-size:14px;color:#f3f4f6;line-height:1.7;white-space:pre-wrap;">${data.challenge.trim()}</p>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#0f0f0f;border:1px solid #1f2937;border-top:none;border-radius:0 0 12px 12px;padding:20px 24px;text-align:center;">
            <a href="mailto:${data.email}?subject=Re: Your Agentic Workflow Strategy Audit" style="display:inline-block;background:linear-gradient(135deg,#10b981,#06b6d4);color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:10px 24px;border-radius:6px;">Reply to ${data.name} →</a>
            <p style="margin:14px 0 0;font-size:11px;color:#4b5563;">Submitted via aiagenticworkflow.ai/audit</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function submitAuditForm(
  data: AuditFormInput
): Promise<AuditFormResult> {
  const parsed = AuditFormSchema.safeParse(data)
  if (!parsed.success) {
    const errors: Partial<Record<keyof AuditFormInput, string>> = {}
    for (const [field, messages] of Object.entries(
      parsed.error.flatten().fieldErrors
    )) {
      errors[field as keyof AuditFormInput] = messages?.[0]
    }
    return { success: false, message: 'Please fix the errors below.', errors }
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Agentic Workflow <onboarding@resend.dev>',
      to: SITE_CONFIG.email,
      replyTo: parsed.data.email,
      subject: `New Audit Request — ${parsed.data.company} (${parsed.data.revenue})`,
      html: buildEmailHtml(parsed.data),
    })

    if (error) {
      console.error('[submitAuditForm] Resend error:', error)
      return {
        success: false,
        message: 'Something went wrong. Please email us directly at info@aiagenticworkflow.ai',
      }
    }

    return {
      success: true,
      message: 'Your audit has been submitted. Expect to hear from us within 24 business hours.',
    }
  } catch (err) {
    console.error('[submitAuditForm] Unexpected error:', err)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}
