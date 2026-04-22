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

const STATS = [
  { value: '2,400+', label: 'Jobs Completed' },
  { value: '<15 min', label: 'Avg. Response' },
  { value: '12 yrs', label: 'In Business' },
  { value: '4.9 / 5', label: 'Customer Rating' },
]

const SERVICES = [
  {
    num: '01',
    icon: AlertTriangle,
    title: 'Emergency Leak Repair',
    description: 'Rapid response for burst pipes, slab leaks, and active water damage. We stop the damage fast.',
  },
  {
    num: '02',
    icon: Waves,
    title: 'Blocked Drains',
    description: 'High-pressure jet cleaning and CCTV drain inspection to clear even the toughest blockages.',
  },
  {
    num: '03',
    icon: Thermometer,
    title: 'Hot Water Systems',
    description: 'Repair, replacement, and installation of all hot water systems — gas, electric, and heat pump.',
  },
  {
    num: '04',
    icon: Zap,
    title: 'Burst Pipes',
    description: 'Emergency pipe repair and replacement. We locate and fix burst pipes with minimal disruption.',
  },
  {
    num: '05',
    icon: Flame,
    title: 'Gas Fitting',
    description: 'Licensed gas fitting for installations, repairs, and safety checks on all gas appliances.',
  },
  {
    num: '06',
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

      {/* Stats Strip */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-700/60">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl lg:text-5xl font-black text-white tracking-tight">{value}</span>
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 mb-4 uppercase tracking-widest">
                What We Fix
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
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
                  <div className="relative h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 p-7 flex flex-col gap-5 overflow-hidden group cursor-default">
                    {/* Decorative number */}
                    <span
                      className="absolute top-2 right-4 text-[5.5rem] font-black leading-none select-none text-slate-100 group-hover:text-blue-50 transition-colors duration-200"
                      aria-hidden="true"
                    >
                      {service.num}
                    </span>

                    {/* Icon */}
                    <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200">
                      <Icon size={21} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>

                    {/* Text */}
                    <div className="relative">
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
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
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300 mb-6 uppercase tracking-widest">
              Emergency? Don&apos;t Wait
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              A Plumber{' '}
              <span className="text-blue-400">On The Way.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Our AI dispatch system ensures zero wait time. Call now and a certified local plumber is on their way — guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12184384180"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/40 transition-all duration-200 cursor-pointer"
              >
                <Phone size={22} />
                +1 (218) 438-4180
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 mb-4 uppercase tracking-widest">
                Free Quote
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Get a <span className="text-blue-600">Free Quote</span> in Minutes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: Call steps + phone CTA */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7">
                <h3 className="text-xs font-black text-slate-400 mb-6 uppercase tracking-widest">
                  What Happens When You Call
                </h3>
                <ul className="flex flex-col gap-5">
                  {CALL_STEPS.map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-xs font-black text-white">
                        {step}
                      </span>
                      <span className="text-sm text-slate-600 leading-snug pt-1">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 rounded-2xl p-7">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Prefer to Call Directly?
                </p>
                <a
                  href="tel:+12184384180"
                  className="inline-flex items-center gap-2.5 text-xl font-black text-white hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <Phone size={20} className="text-blue-400" />
                  +1 (218) 438-4180
                </a>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-3">
                  <CheckCircle2 size={12} className="text-blue-400" />
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
      <div className="bg-slate-900 py-8 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Agentic Workflow AI &bull; Demo plumbing funnel powered by GHL Voice AI
        </p>
      </div>
    </div>
  )
}
