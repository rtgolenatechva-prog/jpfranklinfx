import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { ResultsSection } from '@/components/home/ResultsSection'
import { CTASection } from '@/components/home/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} | NZ AI Agency`,
  description:
    "New Zealand's #1 Agentic AI Agency. We deploy autonomous AI agent systems that eliminate manual workflows, scale revenue, and give your business an unfair competitive advantage — live in 30 days.",
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
      <CTASection />
    </>
  )
}
