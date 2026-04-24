import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { ResultsSection } from '@/components/home/ResultsSection'
import { HomePricingSection } from '@/components/home/HomePricingSection'
import { CTASection } from '@/components/home/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} | NZ AI Agency`,
  description:
    "AgenticAI CRM & AI Receptionist for plumbers, HVAC, and roofing businesses. Automate lead capture, inbound calls, and booking. Stop missing customers — 5-day free trial.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <ResultsSection />
      <HomePricingSection />
      <CTASection />
    </>
  )
}
