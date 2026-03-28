export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  size: 'large' | 'medium' | 'small'
  accent: 'emerald' | 'cyan'
  href: string
}

export interface StatItem {
  value: number
  prefix?: string
  suffix: string
  label: string
  description?: string
}

export interface PricingTier {
  id: string
  name: string
  tagline: string
  price: number
  description: string
  features: string[]
  cta: string
  popular: boolean
  accent: 'emerald' | 'cyan'
}

export interface SuiteFeature {
  id: string
  icon: string
  title: string
  problemSolved: string
  howItWorks: string
  outcome: string
  example: string
  accent: 'emerald' | 'cyan'
}

export interface NavLink {
  label: string
  href: string
}

export interface AuditFormData {
  name: string
  email: string
  company: string
  website?: string
  phone?: string
  revenue: string
  challenge: string
}

export type AccentColor = 'emerald' | 'cyan'
