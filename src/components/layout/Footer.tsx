import Link from 'next/link'
import { LogoMark } from '@/components/ui/LogoMark'
import { NeonBadge } from '@/components/ui/NeonBadge'
import { Separator } from '@/components/ui/separator'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { Shield, Lock, Zap, Globe } from 'lucide-react'

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Strategy Audit', href: '/audit' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const TRUST_BADGES = [
  { icon: Shield, label: 'NZ-Based & Operated' },
  { icon: Lock, label: 'Data Never Shared' },
  { icon: Zap, label: '30-Day Deployments' },
  { icon: Globe, label: 'Auckland, New Zealand' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#2a2a2a] bg-[#0a0a0a]">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column — spans 2 of 4 */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <LogoMark asLink size="md" />
            <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <NeonBadge accent="emerald">AI Agency</NeonBadge>
              <NeonBadge accent="cyan">Auckland, NZ</NeonBadge>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#606060]">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0a0a0] hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#606060]">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-[#a0a0a0] hover:text-emerald-400 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
              <p className="text-sm text-[#606060]">{SITE_CONFIG.location}</p>
            </div>
            <div className="mt-2">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                Book a Free Strategy Audit
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator />

        {/* Trust badges */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs text-[#606060]"
            >
              <Icon size={13} className="text-emerald-500/70" />
              {label}
            </div>
          ))}
        </div>

        <Separator />

        {/* Legal bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#606060]">
            &copy; {year} JP Franklin FX &mdash; Agentic AI Division.{' '}
            <span className="whitespace-nowrap">All rights reserved.</span>
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#606060] hover:text-[#a0a0a0] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
