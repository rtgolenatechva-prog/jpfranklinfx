import type { Metadata } from 'next'
import {
  AlertTriangle,
  Waves,
  Thermometer,
  Zap,
  Flame,
  ShieldCheck,
  Phone,
  Shield,
  Clock,
  CalendarCheck,
  Star,
  Bot,
  CheckCircle2,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PlumbingHero } from '@/components/plumbing/PlumbingHero'
import { PlumbingGHLForm } from '@/components/plumbing/PlumbingGHLForm'

export const metadata: Metadata = {
  title: 'Emergency Plumbing — Call Now | Same-Day Service',
  description:
    'AI-powered emergency plumbing dispatch. Burst pipe, blocked drain, hot water system? Call +1 (218) 438-4180 for same-day service — 24/7, no hold times.',
}

const SERVICES = [
  {
    icon: AlertTriangle,
    title: 'Emergency Leak Repair',
    description: 'Rapid response for burst pipes, slab leaks, and active water damage. We stop the damage fast.',
  },
  {
    icon: Waves,
    title: 'Blocked Drains',
    description: 'High-pressure jet cleaning and CCTV drain inspection to clear even the toughest blockages.',
  },
  {
    icon: Thermometer,
    title: 'Hot Water Systems',
    description: 'Repair, replacement, and installation of all hot water systems including gas, electric, and heat pump.',
  },
  {
    icon: Zap,
    title: 'Burst Pipes',
    description: 'Emergency pipe repair and replacement. We locate and fix burst pipes with minimal disruption.',
  },
  {
    icon: Flame,
    title: 'Gas Fitting',
    description: 'Licensed gas fitting for installations, repairs, and safety checks on all gas appliances.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Maintenance',
    description: 'Annual inspections and maintenance plans to prevent costly emergencies before they happen.',
  },
]

const TRUST_ITEMS = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: CalendarCheck, text: 'Same-Day Booking' },
  { icon: Star, text: '5-Star Rated' },
  { icon: Bot, text: 'AI-Powered Dispatch' },
]

const CALL_STEPS = [
  { step: '01', text: 'AI agent answers immediately — no hold times' },
  { step: '02', text: 'Describe your emergency or plumbing issue' },
  { step: '03', text: 'Provide your address for dispatch' },
  { step: '04', text: 'Certified plumber confirms ETA within minutes' },
]

export default function PlumbingDemoPage() {
  return (
    <div className="bg-background text-[#f0f0f0]">
      {/* Hero */}
      <PlumbingHero />

      {/* Services */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-4">
                What We Fix
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight">
                Every Plumbing Problem,{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Solved Same Day.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={service.title} delay={i * 0.07}>
                  <GlassCard
                    hover
                    accent="none"
                    padding="lg"
                    className="h-full border-blue-500/15 hover:border-blue-500/35"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-500/25 bg-blue-500/10">
                        <Icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#f0f0f0] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#a0a0a0] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[#2a2a2a] bg-[#111111]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_ITEMS.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-[#a0a0a0]">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <Icon size={14} className="text-blue-400" />
                </div>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" className="relative py-20 bg-background overflow-hidden">
        {/* Blue radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-4">
                Free Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight">
                Get a{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Free Quote
                </span>{' '}
                in Minutes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: Call steps + phone CTA */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <GlassCard accent="none" padding="lg" className="border-blue-500/20">
                <h3 className="text-sm font-semibold text-[#f0f0f0] mb-5 uppercase tracking-widest">
                  What Happens When You Call
                </h3>
                <ul className="flex flex-col gap-4">
                  {CALL_STEPS.map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400">
                        {step}
                      </span>
                      <span className="text-sm text-[#a0a0a0] leading-snug pt-0.5">{text}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard accent="none" padding="md" className="border-[#2a2a2a]">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#606060]">
                    Prefer to Call Directly?
                  </p>
                  <a
                    href="tel:+12184384180"
                    className="inline-flex items-center gap-2.5 text-xl font-black text-white hover:text-blue-300 transition-colors"
                  >
                    <Phone size={20} className="text-blue-400" />
                    +1 (218) 438-4180
                  </a>
                  <div className="flex items-center gap-2 text-xs text-[#606060]">
                    <CheckCircle2 size={12} className="text-blue-400" />
                    Available 24/7 — no wait times
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Right: GHL Form */}
            <div className="lg:col-span-3">
              <PlumbingGHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="border-t border-[#1a1a1a] py-6 text-center text-xs text-[#404040]">
        © {new Date().getFullYear()} Agentic Workflow AI &bull; Demo plumbing funnel powered by GHL Voice AI
      </div>
    </div>
  )
}
