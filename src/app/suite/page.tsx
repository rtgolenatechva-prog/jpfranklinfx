import type { Metadata } from 'next'
import { AISuiteFeatures } from '@/components/suite/AISuiteFeatures'
import { CTASection } from '@/components/home/CTASection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The AI Suite – Six Agent Systems',
  description:
    'Six custom-built AI agent systems: Lead Intelligence, Revenue Automation, Customer Experience AI, Data Intelligence, Workflow Orchestration, and Compliance & Risk AI. Each deployed in 30 days.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/suite`,
  },
  openGraph: {
    title: 'The AI Suite | JP Franklin FX – Agentic AI Division',
    description:
      'Six agent systems, one competitive moat. Each system is custom-built, deeply integrated with your existing stack, and designed to operate 24/7 without supervision.',
    url: `${SITE_CONFIG.url}/suite`,
  },
}

const suiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'JP Franklin FX AI Agent Suite',
  description: 'Six custom AI agent systems for business automation',
  numberOfItems: 6,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Lead Intelligence Agents' },
    { '@type': 'ListItem', position: 2, name: 'Revenue Automation' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience AI' },
    { '@type': 'ListItem', position: 4, name: 'Data & Analytics Agents' },
    { '@type': 'ListItem', position: 5, name: 'Workflow Orchestration' },
    { '@type': 'ListItem', position: 6, name: 'Compliance & Risk AI' },
  ],
}

export default function SuitePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(suiteSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <GridBackground opacity={0.5} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
          <SectionHeader
            badge="The AI Suite"
            headline={
              <>
                Six Agent Systems.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  One Competitive Moat.
                </span>
              </>
            }
            subheadline="Each system is custom-built, deeply integrated with your existing stack, and designed to operate 24/7 without supervision."
            align="center"
          />
        </div>
      </section>

      {/* Features */}
      <AISuiteFeatures />

      {/* CTA */}
      <CTASection />
    </>
  )
}
