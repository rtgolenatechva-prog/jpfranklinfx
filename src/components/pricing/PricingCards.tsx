'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlowButton } from '@/components/ui/GlowButton'
import { NeonBadge } from '@/components/ui/NeonBadge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Separator } from '@/components/ui/separator'
import { PRICING_TIERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ADD_ONS = [
  { label: 'Custom model fine-tuning', price: 'from $2,500' },
  { label: 'Additional API integrations', price: 'from $500' },
  { label: 'Staff AI training workshop', price: 'from $1,500' },
  { label: 'Priority deployment (7 days)', price: '$3,000 one-time' },
]

export function PricingCards() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(tier.popular && 'lg:-mt-4 lg:mb-4')}
            >
              <GlassCard
                hover
                accent={tier.accent}
                padding="none"
                className={cn(
                  'h-full relative overflow-hidden',
                  tier.popular && 'border-cyan-500/40 shadow-glow-cyan-sm'
                )}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div className="bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-b-lg tracking-wide uppercase">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={cn('flex flex-col h-full p-8', tier.popular && 'pt-10')}>
                  {/* Header */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-[#606060] mb-1">
                        {tier.name}
                      </p>
                      <p className="text-base font-semibold text-[#f0f0f0]">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl md:text-5xl font-bold"
                        style={{
                          background:
                            tier.accent === 'cyan'
                              ? 'linear-gradient(135deg, #06b6d4, #10b981)'
                              : 'linear-gradient(135deg, #10b981, #06b6d4)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        ${tier.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-[#606060]">/month</span>
                    </div>

                    <p className="text-sm text-[#a0a0a0] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <Separator className="mb-6" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className={cn(
                            'mt-0.5 flex-shrink-0',
                            tier.accent === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                          )}
                        />
                        <span className="text-sm text-[#a0a0a0]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <GlowButton
                      href="/audit"
                      variant={tier.accent}
                      size="md"
                      fullWidth
                    >
                      {tier.cta}
                    </GlowButton>
                    <p className="text-xs text-center text-[#606060]">
                      No lock-in &middot; Cancel any quarter
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Add-ons section */}
        <ScrollReveal>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111]/60 p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#606060] mb-6 text-center">
              Optional Add-ons
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ADD_ONS.map(({ label, price }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-lg border border-[#2a2a2a] bg-[#0d0d0d]"
                >
                  <p className="text-sm font-medium text-[#f0f0f0]">{label}</p>
                  <p className="text-xs text-emerald-400 font-semibold">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ-style assurance */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-sm text-[#606060] max-w-2xl mx-auto">
              All tiers are month-to-month. You own all code and IP. We don&apos;t lock
              you into proprietary platforms. If you don&apos;t see measurable results in
              the first 30 days, we&apos;ll work for free until you do.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
