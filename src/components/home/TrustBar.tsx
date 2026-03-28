'use client'

import { motion } from 'framer-motion'
import { Zap, DollarSign, Clock, MapPin } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Zap, text: '50+ Agents Deployed' },
  { icon: DollarSign, text: '$4.2M Revenue Unlocked' },
  { icon: Clock, text: '12,000+ Hours Automated' },
  { icon: MapPin, text: 'NZ-Based & Operated' },
]

export function TrustBar() {
  return (
    <section
      className="relative border-y border-[#2a2a2a] bg-[#111111]/50 overflow-hidden"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {TRUST_ITEMS.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm text-[#a0a0a0]"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Icon size={14} className="text-emerald-400" />
              </div>
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
