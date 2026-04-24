import type { Metadata } from 'next'
import { FounderStory } from '@/components/about/FounderStory'
import { CTASection } from '@/components/home/CTASection'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About – The Vision',
  description:
    'Agentic Workflow — AgenticAI CRM & AI Receptionist platform for service businesses. Founded on the belief that AI should work for your business. Our story, philosophy, and team.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'About | Agentic Workflow',
    description:
      'We believe AI should work for you. Our philosophy: Deployment Over Discovery, Results Over Reports, Systems Over Solutions, Trust Through Transparency.',
    url: `${SITE_CONFIG.url}/about`,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'JP Franklin',
  jobTitle: 'Founder & Lead AI Architect',
  worksFor: {
    '@type': 'Organization',
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.url,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Auckland',
    addressCountry: 'NZ',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero band */}
      <section className="relative pt-32 pb-6 bg-background overflow-hidden">
        <GridBackground opacity={0.4} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      </section>

      {/* Founder story */}
      <FounderStory />

      {/* CTA */}
      <CTASection />
    </>
  )
}
