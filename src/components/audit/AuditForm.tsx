'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Lock, Phone, Clock, MapPin, CheckCircle2, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { NeonBadge } from '@/components/ui/NeonBadge'
import { submitAuditForm } from '@/actions/submit-audit'
import { REVENUE_OPTIONS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid URL (e.g. https://...)').optional().or(z.literal('')),
  phone: z.string().optional(),
  revenue: z.string().min(1, 'Please select your annual revenue'),
  challenge: z.string().min(20, 'Please describe your challenge (20+ characters)'),
})

type FormData = z.infer<typeof schema>

const TRUST_SIGNALS = [
  { icon: Lock, text: 'Your data is never shared' },
  { icon: Phone, text: 'No unsolicited calls' },
  { icon: Clock, text: '24-hour response guarantee' },
  { icon: MapPin, text: 'NZ-based team' },
]

export function AuditForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      const result = await submitAuditForm(data)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setServerError(result.message)
      }
    } catch {
      setServerError('An unexpected error occurred. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <GlassCard accent="emerald" padding="lg" className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-5 py-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <CheckCircle2 size={32} className="text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#f0f0f0] mb-2">
              Audit Booked. 🎯
            </h3>
            <p className="text-[#a0a0a0]">
              We&apos;ll review your submission and be in touch within 24 business hours
              with a personalised response and calendar link.
            </p>
          </div>
          <NeonBadge accent="emerald">Expected response: within 24 hours</NeonBadge>
          <GlowButton href="/" variant="outline" size="sm">
            ← Back to Home
          </GlowButton>
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard accent="emerald" padding="lg" className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">
              Full Name <span className="text-emerald-400">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              autoComplete="name"
              {...register('name')}
              className={cn(errors.name && 'border-red-500/50 focus:ring-red-500')}
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">
              Email Address <span className="text-emerald-400">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              {...register('email')}
              className={cn(errors.email && 'border-red-500/50 focus:ring-red-500')}
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="company">
            Company Name <span className="text-emerald-400">*</span>
          </Label>
          <Input
            id="company"
            placeholder="Your company name"
            autoComplete="organization"
            {...register('company')}
            className={cn(errors.company && 'border-red-500/50 focus:ring-red-500')}
          />
          {errors.company && (
            <p className="text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>

        {/* Website + Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="website">
              Website{' '}
              <span className="text-[#606060] font-normal">(optional)</span>
            </Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yoursite.com"
              autoComplete="url"
              {...register('website')}
              className={cn(errors.website && 'border-red-500/50 focus:ring-red-500')}
            />
            {errors.website && (
              <p className="text-xs text-red-400">{errors.website.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">
              Phone{' '}
              <span className="text-[#606060] font-normal">(optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+64 9 xxx xxxx"
              autoComplete="tel"
              {...register('phone')}
            />
          </div>
        </div>

        {/* Revenue */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="revenue">
            Annual Revenue <span className="text-emerald-400">*</span>
          </Label>
          <select
            id="revenue"
            {...register('revenue')}
            className={cn(
              'flex h-10 w-full rounded-md border bg-[#111111] px-3 py-2 text-sm text-[#f0f0f0] transition-colors',
              'focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50',
              'disabled:cursor-not-allowed disabled:opacity-50',
              errors.revenue
                ? 'border-red-500/50 focus:ring-red-500'
                : 'border-[#2a2a2a]'
            )}
            defaultValue=""
          >
            <option value="" disabled className="text-[#606060]">
              Select annual revenue range
            </option>
            {REVENUE_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-[#111111] text-[#f0f0f0]"
              >
                {opt.label}
              </option>
            ))}
          </select>
          {errors.revenue && (
            <p className="text-xs text-red-400">{errors.revenue.message}</p>
          )}
        </div>

        {/* Challenge */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="challenge">
            Primary Business Challenge <span className="text-emerald-400">*</span>
          </Label>
          <Textarea
            id="challenge"
            placeholder="Describe the workflows, bottlenecks, or revenue gaps you'd most like to solve with AI automation. The more specific, the better."
            rows={5}
            {...register('challenge')}
            className={cn(errors.challenge && 'border-red-500/50 focus:ring-red-500')}
          />
          {errors.challenge && (
            <p className="text-xs text-red-400">{errors.challenge.message}</p>
          )}
        </div>

        {/* Server error */}
        {serverError && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
            <p className="text-sm text-red-400">{serverError}</p>
          </div>
        )}

        {/* Submit */}
        <div className="pt-1">
          <GlowButton
            type="submit"
            variant="emerald"
            size="lg"
            fullWidth
            loading={isSubmitting}
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <Send size={17} />
                Claim My Free AI Audit →
              </>
            )}
          </GlowButton>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
          {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-1.5 text-xs text-[#606060]"
            >
              <Icon size={12} className="text-emerald-500/60" />
              {text}
            </span>
          ))}
        </div>
      </form>
    </GlassCard>
  )
}
