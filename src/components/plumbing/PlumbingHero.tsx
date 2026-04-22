'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowDown } from 'lucide-react'
import { GridBackground } from '@/components/ui/GridBackground'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function PlumbingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <GridBackground opacity={0.35} />

      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 30%, rgba(59,130,246,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Urgency badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Emergency Plumbing Line &bull; 24/7 Response
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#f0f0f0]"
          >
            Burst Pipe? Blocked Drain?
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We&apos;re On The Way.
            </span>
          </motion.h1>

          {/* Phone number — primary CTA */}
          <motion.div variants={item}>
            <a
              href="tel:+12184384180"
              className="group inline-flex items-center gap-3 text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] font-black text-white tracking-tight transition-all duration-200 hover:text-blue-300"
              style={{ textShadow: '0 0 40px rgba(59,130,246,0.25)' }}
              aria-label="Call +1 218 438 4180"
            >
              <Phone
                size={36}
                className="text-blue-400 transition-transform duration-200 group-hover:rotate-12 flex-shrink-0"
              />
              +1 (218) 438-4180
            </a>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="max-w-xl text-base md:text-lg text-[#a0a0a0] leading-relaxed"
          >
            AI-powered dispatch connects you instantly to a certified plumber —
            day or night,{' '}
            <span className="text-[#f0f0f0] font-medium">no hold times, no call centres.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-3 pt-1"
          >
            <a
              href="tel:+12184384180"
              className="inline-flex items-center gap-2.5 h-12 px-7 text-base font-semibold rounded-lg bg-blue-500 text-white border border-blue-500 hover:bg-blue-400 transition-all duration-200"
              style={{ boxShadow: '0 0 20px rgba(59,130,246,0.25)' }}
            >
              <Phone size={18} />
              Call Now — It&apos;s Free
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 h-12 px-7 text-base font-semibold rounded-lg bg-transparent text-[#f0f0f0] border border-[#3a3a3a] hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
            >
              Get a Free Quote
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3"
          >
            {['Same-Day Service', 'Licensed & Insured', 'No Call-Out Fee'].map((text, i) => (
              <span key={i} className="flex items-center gap-2 text-xs text-[#606060]">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
        aria-hidden="true"
      />
    </section>
  )
}
