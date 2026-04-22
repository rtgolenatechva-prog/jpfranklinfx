'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowDown, CheckCircle2, Clock, Star } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export function PlumbingHero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left — content */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-6 sm:px-10 lg:px-16 xl:px-24 py-24"
        style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFC 55%, #FFFFFF 100%)' }}
      >
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-7 max-w-lg">

          {/* Urgency badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-sm font-semibold text-red-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Emergency Line Active &bull; Answers in Seconds
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black leading-[1.05] tracking-[-0.03em] text-slate-900"
          >
            Plumbing<br />
            Emergency?<br />
            <span className="text-blue-600">We&apos;re There Fast.</span>
          </motion.h1>

          {/* Phone CTA */}
          <motion.div variants={item} className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
              Call 24/7 — Free, No Hold Times
            </p>
            <a
              href="tel:+12184384180"
              className="group inline-flex items-center gap-3 cursor-pointer"
              aria-label="Call +1 218 438 4180"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 group-hover:bg-blue-500 shadow-lg shadow-blue-200 transition-all duration-200">
                <Phone size={24} className="text-white" />
              </span>
              <span className="text-[2.2rem] sm:text-[2.6rem] font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                +1 (218) 438-4180
              </span>
            </a>
          </motion.div>

          {/* Sub */}
          <motion.p variants={item} className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-md">
            AI-powered dispatch connects you instantly to a certified plumber —
            day or night,{' '}
            <span className="text-slate-800 font-semibold">no hold times, no call centres.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="tel:+12184384180"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-bold rounded-2xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-200 transition-all duration-200 cursor-pointer"
            >
              <Phone size={18} />
              Call Now — It&apos;s Free
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-2xl bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 cursor-pointer"
            >
              Get a Free Quote
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Trust bullets */}
          <motion.div variants={item} className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
            {['Same-Day Service', 'Licensed & Insured', 'No Call-Out Fee'].map((text) => (
              <span key={text} className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Right — photo */}
      <div className="hidden lg:block lg:w-[45%] relative bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
          alt="Professional plumber ready to help"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(248,250,252,0.55) 0%, transparent 28%), linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        {/* Stars card — top right */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl px-5 py-4"
        >
          <div className="flex items-center gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs font-bold text-slate-500">5-Star Rated Service</p>
        </motion.div>

        {/* Response time — bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="absolute bottom-10 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600">
            <Clock size={22} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Response Time</p>
            <p className="text-xl font-black text-slate-900">Under 15 min</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
