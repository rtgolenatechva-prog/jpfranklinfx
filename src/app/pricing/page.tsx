import type { Metadata } from 'next'
import { PricingCards } from '@/components/pricing/PricingCards'
import { CTASection } from '@/components/home/CTASection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG, PRICING_TIERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing – Investment Tiers',
  description:
    'Transparent AI agency pricing. Launch ($3,000/mo), Scale ($6,000/mo), Dominate ($10,000/mo). No lock-ins. Cancel any quarter. Own your code and IP.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pricing`,
  },
  openGraph: {
    title: 'Pricing | JP Franklin FX – Agentic AI Division',
    description:
      'Transparent investment. Measurable returns. No retainer lock-ins. No surprise fees. Cancel any quarter if we don\'t deliver.',
    url: `${SITE_CONFIG.url}/pricing`,
  },
}

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'JP Franklin FX AI Agency Pricing',
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
            badge="Investment Tiers"
            headline={
              <>
                Transparent Investment.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Measurable Returns.
                </span>
              </>
            }
            subheadline="No retainer lock-ins. No surprise fees. Cancel any quarter if we don't deliver. You own all code and IP."
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
