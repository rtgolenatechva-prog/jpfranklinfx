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
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <PlumbingHero />

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wide">
                What We Fix
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Every Plumbing Problem,{' '}
                <span className="text-blue-600">Solved Same Day.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={service.title} delay={i * 0.07}>
                  <div className="h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-6 flex flex-col gap-4">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 border border-blue-100">
                      <Icon size={21} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-600 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_ITEMS.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-white">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                  <Icon size={14} className="text-white" />
                </div>
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wide">
                Free Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Get a <span className="text-blue-600">Free Quote</span> in Minutes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: Call steps + phone CTA */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-widest">
                  What Happens When You Call
                </h3>
                <ul className="flex flex-col gap-4">
                  {CALL_STEPS.map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                        {step}
                      </span>
                      <span className="text-sm text-slate-600 leading-snug pt-0.5">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-600 rounded-2xl p-6">
                <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">
                  Prefer to Call Directly?
                </p>
                <a
                  href="tel:+12184384180"
                  className="inline-flex items-center gap-2.5 text-xl font-black text-white hover:text-blue-100 transition-colors"
                >
                  <Phone size={20} className="text-blue-200" />
                  +1 (218) 438-4180
                </a>
                <div className="flex items-center gap-2 text-xs text-blue-200 mt-3">
                  <CheckCircle2 size={12} />
                  Available 24/7 — no wait times
                </div>
              </div>
            </div>

            {/* Right: GHL Form */}
            <div className="lg:col-span-3">
              <PlumbingGHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="bg-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Agentic Workflow AI &bull; Demo plumbing funnel powered by GHL Voice AI
      </div>
    </div>
  )
}
