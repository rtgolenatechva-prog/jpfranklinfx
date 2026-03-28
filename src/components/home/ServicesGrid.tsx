'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  GitBranch,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// All 6 cards are rendered at equal size in a strict 3-column grid

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  GitBranch,
  Shield,
}

const accentIconColors = {
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
}

const accentLinkColors = {
  emerald: 'text-emerald-400 group-hover:text-emerald-300',
  cyan: 'text-cyan-400 group-hover:text-cyan-300',
}

export function ServicesGrid() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex justify-center">
            <SectionHeader
              badge="What We Build"
              headline={
                <>
                  Six Agent Systems.{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    One Competitive Moat.
                  </span>
                </>
              }
              subheadline="Each system is custom-built, deeply integrated with your existing stack, and designed to operate 24/7 without supervision."
              align="center"
            />
          </div>
        </ScrollReveal>

        {/* Uniform 3-column grid — all cards equal size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard
                  hover
                  accent={service.accent}
                  padding="lg"
                  className="h-full group min-h-[220px]"
                >
                  <div className="flex flex-col gap-4 h-full">
                    {/* Icon */}
                    <div
                      className={cn(
                        'inline-flex items-center justify-center w-10 h-10 rounded-lg border',
                        accentIconColors[service.accent]
                      )}
                    >
                      {Icon && <Icon size={20} />}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-[#f0f0f0] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#a0a0a0] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={service.href}
                      className={cn(
                        'flex items-center gap-1.5 text-xs font-semibold transition-all group/link',
                        accentLinkColors[service.accent]
                      )}
                    >
                      Learn more
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
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
