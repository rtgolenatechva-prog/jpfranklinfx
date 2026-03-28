'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { GlowButton } from '@/components/ui/GlowButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-background">
      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.5))',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div className="flex flex-col items-center gap-7">
            {/* Urgency line */}
            <span className="text-xs font-semibold tracking-widest uppercase text-[#606060]">
              Your competitors are deploying agents right now.
            </span>

            {/* Headline */}
            <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-[#f0f0f0]">
              Stop Watching Competitors{' '}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Pull Ahead
              </span>
            </h2>

            {/* Body */}
            <p className="max-w-xl text-base md:text-lg text-[#a0a0a0] leading-relaxed">
              Every week without AI agents is revenue left on the table. Book your
              free 45-minute Strategy Audit and walk away with a custom AI deployment
              roadmap — no obligation, no jargon, no fluff.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <GlowButton href="/audit" variant="emerald" size="lg">
                <Calendar size={18} />
                Book My Free Audit Now
                <ArrowRight size={18} />
              </GlowButton>
              <GlowButton href="/pricing" variant="outline" size="lg">
                View Investment Tiers
              </GlowButton>
            </div>

            {/* Micro-copy */}
            <p className="text-xs text-[#606060]">
              45-minute call &middot; Custom roadmap included &middot; Zero commitment required
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
