import type { Metadata } from 'next'
import { GHLForm } from '@/components/audit/GHLForm'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { GridBackground } from '@/components/ui/GridBackground'
import { CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Strategy Audit',
  description:
    'Book your free 45-minute AI Strategy Audit with Agentic Workflow. Walk away with a custom AI deployment roadmap tailored to your business — no obligation, no jargon.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/audit`,
  },
  openGraph: {
    title: 'Free AI Strategy Audit | Agentic Workflow',
    description:
      '45 minutes. A custom AI deployment roadmap. Zero obligation. AgenticAI CRM & bestreceptionist.ai.',
    url: `${SITE_CONFIG.url}/audit`,
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Agentic Workflow AI Strategy Audit',
  description:
    'Book a free 45-minute AI Strategy Audit with Agentic Workflow',
  url: `${SITE_CONFIG.url}/audit`,
  mainEntity: {
    '@type': 'Organization',
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NZ',
      addressLocality: 'Auckland',
    },
  },
}

const AUDIT_INCLUDES = [
  '45-minute 1:1 call with our lead AI architect',
  'Full analysis of your current workflow bottlenecks',
  'Custom AI deployment roadmap (yours to keep)',
  'ROI estimate for your top 3 automation opportunities',
  'Honest recommendation — even if we\'re not the right fit',
]

export default function AuditPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Background */}
      <div className="relative min-h-screen bg-background overflow-hidden">
        <GridBackground opacity={0.4} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(16,185,129,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Page header */}
          <div className="flex flex-col items-center text-center mb-14">
            <SectionHeader
              badge="Free Strategy Audit"
              headline={
                <>
                  Your Free{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    AI Strategy Audit
                  </span>
                </>
              }
              subheadline="45 minutes. A custom AI deployment roadmap. Zero obligation."
              align="center"
            />
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: What's included */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <GlassCard accent="emerald" padding="lg">
                <h2 className="text-base font-semibold text-[#f0f0f0] mb-5">
                  What&apos;s Included in Your Audit
                </h2>
                <ul className="flex flex-col gap-3.5">
                  {AUDIT_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-[#a0a0a0] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard padding="md" className="border-[#2a2a2a]">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#606060]">
                    Response Time
                  </p>
                  <p className="text-sm text-[#f0f0f0] font-medium">
                    Within 24 business hours
                  </p>
                  <p className="text-xs text-[#606060]">
                    We review every submission personally and respond with a tailored note — not a
                    template.
                  </p>
                </div>
              </GlassCard>

              <GlassCard padding="md" className="border-[#2a2a2a]">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#606060]">
                    Our Commitment
                  </p>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">
                    If we&apos;re not the right fit for your business, we&apos;ll tell you honestly
                    and point you in the right direction. No high-pressure sales tactics. Ever.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Right: GHL Form */}
            <div className="lg:col-span-3">
              <GHLForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
