'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight, Building2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowButton } from '@/components/ui/GlowButton'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    id: 'foundation',
    name: 'The Foundation Plan',
    tagline: 'Best for solo-operators or single-location businesses needing a centralised CRM.',
    price: 97,
    accent: 'emerald' as const,
    popular: false,
    features: [
      { label: 'Unified CRM', detail: 'Lead tracking, pipeline management, and calendar sync.' },
      { label: 'Smart Lead Capture', detail: 'Automated forms and landing page builder.' },
      { label: 'Standard Automation', detail: 'Appointment reminders and basic "Thank You" sequences.' },
      { label: 'Email & SMS Marketing', detail: 'Essential tools for manual broadcast campaigns.' },
    ],
  },
  {
    id: 'pro',
    name: 'The Conversational Pro',
    tagline: 'For businesses ready to automate engagement and lead qualification.',
    price: 297,
    accent: 'violet' as const,
    popular: true,
    features: [
      { label: 'Everything in Foundation', detail: 'All Foundation features included.' },
      { label: '24/7 AI Chatbot', detail: 'Autonomous web agent trained on your business to answer FAQs and book appointments.' },
      { label: 'Automated Nurture Campaigns', detail: 'Intelligent multi-channel Email/SMS sequences to warm leads over 30–90 days.' },
      { label: 'Advanced Workflow Builder', detail: 'Up to 10 custom automated paths (e.g. "Missed Call Text-Back").' },
      { label: 'White-Labeled Dashboard', detail: 'Your own branded portal for client/team access.' },
    ],
  },
  {
    id: 'executive',
    name: 'The Agentic Executive',
    tagline: 'The full "Agent Driven Agency" experience for high-volume operations.',
    price: 497,
    accent: 'cyan' as const,
    popular: false,
    features: [
      { label: 'Everything in Pro', detail: 'All Conversational Pro features included.' },
      { label: 'AI Email Responder', detail: 'Reads inquiries, understands intent, and sends personalised replies autonomously.' },
      { label: 'Unlimited AI Chatbots', detail: 'Deploy specific agents for Sales, Support, Recruiting, and more.' },
      { label: 'SaaS Mode Enabled', detail: 'Rebill/markup AI and communication costs for your own clients.' },
      { label: 'Priority Workflow Support', detail: 'Direct access to our technical team for custom CRM logic.' },
    ],
  },
]

const accentCard = {
  emerald: {
    border: 'border-emerald-500/25',
    hoverBorder: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    check: 'text-emerald-400',
    price: 'from-emerald-400 to-emerald-300',
    btn: 'emerald' as const,
  },
  violet: {
    border: 'border-purple-500/40',
    hoverBorder: 'hover:border-purple-400/70',
    glow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
    check: 'text-purple-400',
    price: 'from-purple-400 to-cyan-400',
    btn: 'cyan' as const,
  },
  cyan: {
    border: 'border-cyan-500/25',
    hoverBorder: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    check: 'text-cyan-400',
    price: 'from-cyan-400 to-cyan-300',
    btn: 'cyan' as const,
  },
}

export function HomePricingSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 flex justify-center">
            <SectionHeader
              badge="Pricing Plans"
              headline={
                <>
                  Choose Your Level of{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Autonomy
                  </span>
                </>
              }
              subheadline="All plans include setup, training, and ongoing optimisation. No lock-in contracts."
              align="center"
              accent="cyan"
            />
          </div>
        </ScrollReveal>

        {/* 3 main cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan, i) => {
            const a = accentCard[plan.accent]
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex"
              >
                <div
                  className={cn(
                    'relative flex flex-col w-full rounded-2xl border bg-[#111111]/80 backdrop-blur-sm',
                    'transition-all duration-300',
                    a.border,
                    a.hoverBorder,
                    a.glow,
                    plan.popular && 'ring-1 ring-purple-500/30 md:-mt-3 md:mb-3'
                  )}
                >
                  {/* Most Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
                        a.badge
                      )}>
                        <Sparkles size={11} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Top violet accent line on popular card */}
                  {plan.popular && (
                    <div
                      className="absolute top-0 left-8 right-8 h-px rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)',
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex flex-col flex-1 p-7">
                    {/* Plan name + tagline */}
                    <div className="mb-6">
                      <h3 className="text-base font-semibold text-[#f0f0f0] mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-[#707070] leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-7 flex items-end gap-1.5">
                      <span
                        className="text-4xl font-bold"
                        style={{
                          background: `linear-gradient(135deg, var(--p-from), var(--p-to))`,
                        }}
                      >
                        <span
                          style={{
                            background: plan.accent === 'violet'
                              ? 'linear-gradient(135deg, #a855f7, #06b6d4)'
                              : plan.accent === 'emerald'
                              ? 'linear-gradient(135deg, #10b981, #34d399)'
                              : 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          ${plan.price}
                        </span>
                      </span>
                      <span className="text-sm text-[#606060] mb-1.5">/ month</span>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3.5 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li key={f.label} className="flex gap-3">
                          <span className={cn('mt-0.5 shrink-0', a.check)}>
                            <Check size={15} strokeWidth={2.5} />
                          </span>
                          <span className="text-sm text-[#a0a0a0] leading-snug">
                            <strong className="text-[#d0d0d0] font-medium">{f.label}:</strong>{' '}
                            {f.detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <GlowButton
                      href="/audit"
                      variant={plan.popular ? 'cyan' : plan.accent === 'emerald' ? 'emerald' : 'cyan'}
                      size="md"
                      fullWidth
                    >
                      {plan.popular ? 'Get Started — Most Popular' : 'Get Started'}
                      <ArrowRight size={15} />
                    </GlowButton>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enterprise strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5"
        >
          <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#3a3a3a] transition-all duration-300 overflow-hidden">
            {/* Subtle background gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse 50% 80% at 0% 50%, rgba(16,185,129,0.04) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex flex-col sm:flex-row items-center gap-6 p-7 sm:p-8">
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
                <Building2 size={22} className="text-[#606060]" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-[#f0f0f0]">
                    Enterprise Package
                  </h3>
                  <span className="inline-flex items-center self-center sm:self-auto px-2.5 py-0.5 rounded-full text-xs font-medium border border-[#3a3a3a] text-[#606060]">
                    Custom Pricing
                  </span>
                </div>
                <p className="text-sm text-[#707070] leading-relaxed max-w-xl">
                  Customised workflows, advanced AI integrations, and deep system connections built around your exact operation. Ideal for high-volume teams and agencies.
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <GlowButton href="/audit" variant="outline" size="md">
                  Talk to Us →
                </GlowButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-[#505050] leading-relaxed">
          All plans include onboarding, training, and 30-day optimisation support.{' '}
          <span className="whitespace-nowrap">Cancel anytime.</span>
        </p>
      </div>
    </section>
  )
}
