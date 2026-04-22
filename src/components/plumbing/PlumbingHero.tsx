'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowDown, CheckCircle2 } from 'lucide-react'

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
    <section className="relative min-h-screen flex overflow-hidden bg-white">
      {/* Left — content */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[58%] px-6 sm:px-10 lg:px-16 xl:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 60%)' }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 max-w-xl"
        >
          {/* Urgency badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
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
            className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-900"
          >
            Burst Pipe?{' '}
            <span className="text-slate-900">Blocked Drain?</span>
            <br />
            <span className="text-blue-600">We&apos;re On The Way.</span>
          </motion.h1>

          {/* Phone — primary CTA */}
          <motion.div variants={item}>
            <a
              href="tel:+12184384180"
              className="group inline-flex items-center gap-3 text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-black text-slate-900 tracking-tight transition-colors duration-200 hover:text-blue-600"
              aria-label="Call +1 218 438 4180"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors">
                <Phone size={22} className="text-white transition-transform duration-200 group-hover:rotate-12" />
              </span>
              +1 (218) 438-4180
            </a>
          </motion.div>

          {/* Subheadline */}
          <motion.p variants={item} className="text-base md:text-lg text-slate-500 leading-relaxed">
            AI-powered dispatch connects you instantly to a certified plumber —
            day or night,{' '}
            <span className="text-slate-700 font-semibold">no hold times, no call centres.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-3 pt-1">
            <a
              href="tel:+12184384180"
              className="inline-flex items-center gap-2.5 h-13 px-7 py-3.5 text-base font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-200 transition-all duration-200"
            >
              <Phone size={18} />
              Call Now — It&apos;s Free
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 h-13 px-7 py-3.5 text-base font-semibold rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
            >
              Get a Free Quote
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Trust bullets */}
          <motion.div variants={item} className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {['Same-Day Service', 'Licensed & Insured', 'No Call-Out Fee'].map((text, i) => (
              <span key={i} className="flex items-center gap-1.5 text-sm text-slate-500">
                <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right — plumber photo */}
      <div className="hidden lg:block lg:w-[42%] relative">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
          alt="Professional plumber ready to help"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        {/* Blue gradient overlay — blends image into left panel */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(239,246,255,0.6) 0%, transparent 30%), linear-gradient(to top, rgba(30,64,175,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600">
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Response Time</p>
            <p className="text-lg font-black text-slate-900">Under 15 min</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
