'use client'

import { motion } from 'framer-motion'
import { Rocket, Target, Layers, Shield, Quote } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PHILOSOPHY_PILLARS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Target,
  Layers,
  Shield,
}

const TEAM_STATS = [
  { value: '5', label: 'AI Engineers' },
  { value: '2', label: 'Prompt Architects' },
  { value: '1', label: 'Compliance Specialist' },
  { value: 'AKL', label: 'Auckland, NZ' },
]

export function FounderStory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero section */}
      <ScrollReveal>
        <div className="flex justify-center mb-20">
          <SectionHeader
            badge="Our Story"
            headline={
              <>
                We Believe AI Should{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Work for You.
                </span>
                <br />
                Not the Other Way Around.
              </>
            }
            align="center"
          />
        </div>
      </ScrollReveal>

      {/* Founder quote — clean, centered, no top bar */}
      <ScrollReveal delay={0.1}>
        <GlassCard
          accent="emerald"
          padding="lg"
          className="mb-16 max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Decorative large quote mark — background only */}
          <Quote
            size={80}
            className="absolute -top-2 -left-2 text-emerald-500/5"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-8 text-center relative z-10">
            {/* Quote text */}
            <blockquote className="text-base md:text-lg text-[#d0d0d0] leading-relaxed font-normal italic">
              &ldquo;I spent years watching businesses drown in repetitive work — the kind
              of work that software should have automated decades ago. When large language
              models reached the capability threshold where autonomous action became
              reliable, I knew the window was open.
              <br /><br />
              JP Franklin FX&apos;s Agentic AI Division exists for one reason: to take that
              window and build something permanent for our clients before it closes. We
              don&apos;t sell subscriptions to AI tools. We build the systems that run your
              business.&rdquo;
            </blockquote>

            {/* Divider */}
            <div className="w-12 h-px bg-emerald-500/40" />

            {/* Author — centered */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-full border-2 border-emerald-500/40 bg-[#111111] flex items-center justify-center text-base font-bold"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.15))',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  JP
                </span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <p className="text-sm font-semibold text-[#f0f0f0]">JP Franklin</p>
                <p className="text-xs text-[#606060]">
                  Founder & Lead AI Architect, JP Franklin FX
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Philosophy pillars */}
      <ScrollReveal>
        <div className="flex justify-center mb-10">
          <SectionHeader
            badge="Our Philosophy"
            headline="Four Principles. Every Engagement."
            align="center"
            headlineClassName="text-display-sm md:text-display-md"
          />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        {PHILOSOPHY_PILLARS.map((pillar, i) => {
          const Icon = ICON_MAP[pillar.icon]
          const accent = i % 2 === 0 ? 'emerald' : 'cyan'
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <GlassCard hover accent={accent as 'emerald' | 'cyan'} padding="lg" className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg border',
                      accent === 'emerald'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    )}
                  >
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#f0f0f0] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>

      {/* Team stats bar */}
      <ScrollReveal>
        <div className="rounded-xl border border-[#2a2a2a] bg-[#111111]/60 px-6 py-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#606060] text-center mb-6">
            The Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <span
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </span>
                <span className="text-xs text-[#a0a0a0] text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
