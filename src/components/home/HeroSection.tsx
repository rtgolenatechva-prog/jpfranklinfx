'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { GridBackground } from '@/components/ui/GridBackground'
import { GlowButton } from '@/components/ui/GlowButton'
import { NeonBadge } from '@/components/ui/NeonBadge'

const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground'),
  { ssr: false, loading: () => null }
)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Backgrounds */}
      <GridBackground />
      <ParticleBackground />

      {/* Hero radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(16,185,129,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <NeonBadge accent="emerald" size="md">
              <span className="animate-pulse-glow">⚡</span>
              New Zealand&apos;s #1 Agentic AI Agency
            </NeonBadge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#f0f0f0]"
          >
            Your Business,{' '}
            <br className="hidden sm:block" />
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Powered by Autonomous
              <br className="hidden sm:block" />
              AI Agents.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="max-w-2xl text-lg md:text-xl text-[#a0a0a0] leading-relaxed"
          >
            We architect and deploy custom AI agent systems that eliminate manual
            workflows, accelerate revenue cycles, and give your business an{' '}
            <span className="text-[#f0f0f0] font-medium">unfair competitive advantage</span>{' '}
            — live in 30 days.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-3 pt-2"
          >
            <GlowButton href="/audit" variant="emerald" size="lg">
              Claim Your Free Strategy Audit
              <ArrowRight size={18} />
            </GlowButton>
            <GlowButton href="/suite" variant="outline" size="lg">
              <Play size={16} className="text-emerald-400" />
              Explore the AI Suite
            </GlowButton>
          </motion.div>

          {/* Social proof line */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4"
          >
            {[
              '50+ Agents Deployed',
              '$4.2M Revenue Unlocked',
              '30-Day Guarantee',
            ].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-xs text-[#606060]"
              >
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
