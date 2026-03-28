'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GridBackground } from '@/components/ui/GridBackground'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function ResultsSection() {
  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <GridBackground opacity={0.4} animated={false} />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex justify-center">
            <SectionHeader
              badge="Proven Results"
              headline={
                <>
                  Numbers That{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Speak for Themselves
                  </span>
                </>
              }
              subheadline="Real outcomes across real deployments. No projections, no estimates — only results from live agent systems."
              accent="cyan"
            />
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-[#2a2a2a] bg-[#111111]/60">
                {/* Counter */}
                <div
                  className="text-[2.5rem] md:text-[3rem] font-bold leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix ?? ''}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2200}
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-[#f0f0f0] mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                {stat.description && (
                  <p className="text-xs text-[#606060] leading-snug">
                    {stat.description}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 text-center text-xs text-[#606060]">
            Metrics aggregated across all active client deployments as of Q1 2026.
            Individual results vary based on business model, scale, and deployment scope.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
