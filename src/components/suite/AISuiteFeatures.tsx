'use client'

import {
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  GitBranch,
  Shield,
  CheckCircle2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { NeonBadge } from '@/components/ui/NeonBadge'
import { GlowButton } from '@/components/ui/GlowButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SUITE_FEATURES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  GitBranch,
  Shield,
}

export function AISuiteFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {SUITE_FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon]
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard
                  hover
                  accent={feature.accent}
                  padding="lg"
                  className="overflow-hidden"
                >
                  {/* Feature number indicator */}
                  <div className="flex items-start gap-6 flex-col lg:flex-row">
                    {/* Left: Icon + number */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3 lg:w-20">
                      <div
                        className={cn(
                          'flex items-center justify-center w-14 h-14 rounded-xl border',
                          feature.accent === 'emerald'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        )}
                      >
                        {Icon && <Icon size={26} />}
                      </div>
                      <span className="text-xs font-mono text-[#606060]">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left column: Title + problem + how it works */}
                      <div className="flex flex-col gap-4">
                        <div>
                          <NeonBadge accent={feature.accent} size="sm" className="mb-3">
                            Agent System {String(i + 1).padStart(2, '0')}
                          </NeonBadge>
                          <h3 className="text-xl md:text-2xl font-bold text-[#f0f0f0] leading-tight">
                            {feature.title}
                          </h3>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#606060] mb-2">
                            The Problem
                          </p>
                          <p className="text-sm text-[#a0a0a0] leading-relaxed">
                            {feature.problemSolved}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#606060] mb-2">
                            How It Works
                          </p>
                          <p className="text-sm text-[#a0a0a0] leading-relaxed">
                            {feature.howItWorks}
                          </p>
                        </div>
                      </div>

                      {/* Right column: Outcome + example */}
                      <div className="flex flex-col gap-4">
                        {/* Outcome highlight */}
                        <div
                          className={cn(
                            'rounded-lg p-4 border',
                            feature.accent === 'emerald'
                              ? 'bg-emerald-500/5 border-emerald-500/20'
                              : 'bg-cyan-500/5 border-cyan-500/20'
                          )}
                        >
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              className={cn(
                                'mt-0.5 flex-shrink-0',
                                feature.accent === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                              )}
                            />
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-[#606060] mb-1">
                                Measurable Outcome
                              </p>
                              <p className="text-sm font-semibold text-[#f0f0f0]">
                                {feature.outcome}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Real example */}
                        <div className="rounded-lg p-4 border border-[#2a2a2a] bg-[#0d0d0d]">
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#606060] mb-2">
                            Real Example
                          </p>
                          <p className="text-sm text-[#a0a0a0] leading-relaxed italic">
                            &ldquo;{feature.example}&rdquo;
                          </p>
                        </div>

                        {/* CTA */}
                        <GlowButton
                          href="/audit"
                          variant={feature.accent}
                          size="sm"
                          className="self-start"
                        >
                          Deploy This System →
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
