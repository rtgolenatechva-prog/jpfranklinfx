import type { Metadata } from 'next'
import { PricingCards } from '@/components/pricing/PricingCards'
import { CTASection } from '@/components/home/CTASection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG, PRICING_TIERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing – AgenticAI CRM Plans',
  description:
    'AgenticAI CRM pricing for plumbers, HVAC & roofing. Starter $97/mo, Professional Receptionist $297/mo, Unlimited Agentic $497/mo. All plans include a 5-day free trial.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pricing`,
  },
  openGraph: {
    title: 'Pricing | AgenticAI CRM & bestreceptionist.ai',
    description:
      'Flexible plans for service businesses. Starter $97/mo, Professional Receptionist $297/mo, Unlimited Agentic $497/mo. All plans include a 5-day free trial.',
    url: `${SITE_CONFIG.url}/pricing`,
  },
}

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agentic Workflow Pricing — AgenticAI CRM',
  itemListElement: PRICING_TIERS.map((tier, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Offer',
      name: tier.name,
      description: tier.description,
      price: tier.price,
      priceCurrency: 'NZD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: tier.price,
        priceCurrency: 'NZD',
        unitCode: 'MON',
      },
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.fullName,
      },
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-10 bg-background overflow-hidden">
        <GridBackground opacity={0.5} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
          <SectionHeader
            badge="All plans — 5-day free trial"
            headline={
              <>
                Pricing for{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AgenticAI CRM
                </span>
              </>
            }
            subheadline="Built for plumbers, HVAC, and roofing businesses. Automate lead capture, calls, and bookings. Month-to-month — cancel any time."
            align="center"
          />
        </div>
      </section>

      {/* Pricing cards */}
      <PricingCards />

      {/* CTA */}
      <CTASection />
    </>
  )
}
