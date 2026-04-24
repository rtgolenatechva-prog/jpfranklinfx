import type { NavLink, ServiceItem, StatItem, PricingTier, SuiteFeature } from '@/types'

export const SITE_CONFIG = {
  name: 'Agentic Workflow',
  division: 'AI Agency',
  fullName: 'Agentic Workflow',
  tagline: "AgenticAI CRM & AI Receptionist for Service Businesses",
  url: 'https://aiagenticworkflow.ai',
  description:
    "We architect and deploy custom AI agent systems that eliminate manual workflows, accelerate revenue cycles, and give your business an unfair competitive advantage — live in 30 days.",
  keywords: [
    'AI agency New Zealand',
    'AI automation Auckland',
    'autonomous AI agents',
    'business automation NZ',
    'AI consulting New Zealand',
    'agentic AI',
    'workflow automation NZ',
  ],
  location: 'Auckland, New Zealand',
  email: 'info@aiagenticworkflow.ai',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'The AI Suite', href: '/suite' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
]

export const STATS: StatItem[] = [
  {
    value: 4.2,
    prefix: '$',
    suffix: 'M+',
    label: 'Revenue Unlocked',
    description: 'In measurable client revenue attributable to deployed agents',
  },
  {
    value: 12000,
    suffix: '+',
    label: 'Hours Automated / Month',
    description: 'Across all active client deployments',
  },
  {
    value: 30,
    suffix: ' Days',
    label: 'Average Time-to-Live',
    description: 'From discovery call to live agent deployment',
  },
  {
    value: 97,
    suffix: '%',
    label: 'Client Retention Rate',
    description: 'Of clients renew for a second system within 6 months',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'lead-intelligence',
    icon: 'Target',
    title: 'Lead Intelligence Agents',
    description:
      'Autonomous prospecting, qualification, and outreach. Your agents research ideal targets, score leads in real-time, and initiate personalised contact — while you sleep.',
    size: 'large',
    accent: 'emerald',
    href: '/suite#lead-intelligence',
  },
  {
    id: 'revenue-automation',
    icon: 'TrendingUp',
    title: 'Revenue Automation',
    description:
      'AI-driven proposal generation, dynamic follow-up sequences, and deal acceleration pipelines that close faster.',
    size: 'medium',
    accent: 'cyan',
    href: '/suite#revenue-automation',
  },
  {
    id: 'customer-experience',
    icon: 'MessageSquare',
    title: 'Customer Experience AI',
    description:
      '24/7 intelligent support agents trained on your exact business context. Resolve 80% of queries without human intervention.',
    size: 'medium',
    accent: 'emerald',
    href: '/suite#customer-experience',
  },
  {
    id: 'data-intelligence',
    icon: 'BarChart3',
    title: 'Data & Analytics Agents',
    description:
      'Real-time business intelligence, anomaly detection, and automated reporting delivered to your inbox every morning.',
    size: 'medium',
    accent: 'cyan',
    href: '/suite#data-intelligence',
  },
  {
    id: 'workflow-orchestration',
    icon: 'GitBranch',
    title: 'Workflow Orchestration',
    description:
      'Connect every tool in your stack into a single autonomous operating layer. Triggers, conditions, actions — all coordinated without human hands.',
    size: 'large',
    accent: 'emerald',
    href: '/suite#workflow-orchestration',
  },
  {
    id: 'compliance-risk',
    icon: 'Shield',
    title: 'Compliance & Risk AI',
    description:
      'Automated regulatory monitoring, contract review, and audit trail generation. Stay protected without a dedicated compliance team.',
    size: 'medium',
    accent: 'cyan',
    href: '/suite#compliance-risk',
  },
]

export const SUITE_FEATURES: SuiteFeature[] = [
  {
    id: 'lead-intelligence',
    icon: 'Target',
    title: 'Lead Intelligence Agents',
    problemSolved:
      'Your sales team spends 60% of their time on research and manual outreach instead of closing.',
    howItWorks:
      'GPT-4o powered agents continuously scrape and enrich prospect data from LinkedIn, company websites, and public data sources. Each prospect is scored against your ICP, then personalised outreach is auto-generated and queued for review or sent autonomously.',
    outcome: '3–5× more qualified conversations per week with zero manual research.',
    example: 'A B2B SaaS client went from 20 outreach emails/day to 200 — with higher reply rates.',
    accent: 'emerald',
  },
  {
    id: 'revenue-automation',
    icon: 'TrendingUp',
    title: 'Revenue Automation',
    problemSolved:
      'Deals stall because follow-ups are manual, proposals take too long, and nothing nudges at the right moment.',
    howItWorks:
      'Agents monitor deal stages in your CRM, auto-generate bespoke proposals from templates, trigger time-sensitive follow-ups, and escalate stalled deals to your team with full context.',
    outcome: '40% reduction in average sales cycle length.',
    example: 'A consulting firm closed 2× more deals in Q1 after deploying this system.',
    accent: 'cyan',
  },
  {
    id: 'customer-experience',
    icon: 'MessageSquare',
    title: 'Customer Experience AI',
    problemSolved:
      'Support costs are rising, response times are slow, and your team is stuck answering the same questions.',
    howItWorks:
      'RAG-powered agents are trained on your documentation, FAQs, and past support conversations. They handle Tier-1 queries autonomously, escalate complex issues with full context, and track CSAT in real-time.',
    outcome: '80% of support volume resolved without human intervention.',
    example: 'An e-commerce brand reduced support tickets by 73% in 60 days.',
    accent: 'emerald',
  },
  {
    id: 'data-intelligence',
    icon: 'BarChart3',
    title: 'Data & Analytics Agents',
    problemSolved:
      'Your business data sits in silos. Reports are late, manual, and nobody reads them.',
    howItWorks:
      'Automated ETL pipelines pull data from all connected sources. Anomaly detection flags issues before they become crises. Weekly insight emails are generated and delivered — in plain language, with recommended actions.',
    outcome: 'Executive team makes faster decisions with zero manual reporting overhead.',
    example: 'A retail chain caught a $180k inventory discrepancy 48 hours earlier than usual.',
    accent: 'cyan',
  },
  {
    id: 'workflow-orchestration',
    icon: 'GitBranch',
    title: 'Workflow Orchestration',
    problemSolved:
      'Your team manually moves data between tools. Zapier breaks. Nothing talks to anything.',
    howItWorks:
      'We build a custom orchestration layer (n8n/Make/custom API) that connects every tool in your stack. Event-driven triggers, conditional logic, error handling, and monitoring — all managed by agents that self-heal when something breaks.',
    outcome: 'Entire cross-tool workflows run autonomously with error rates <0.1%.',
    example: 'A property firm automated their entire client onboarding flow across 7 tools.',
    accent: 'emerald',
  },
  {
    id: 'compliance-risk',
    icon: 'Shield',
    title: 'Compliance & Risk AI',
    problemSolved:
      'Regulatory changes slip through. Contract reviews take weeks. Audit prep is a scramble.',
    howItWorks:
      'Agents continuously monitor relevant regulatory sources and flag changes. Contract review agents analyse documents against your risk parameters. Audit trails are auto-generated and stored with full version history.',
    outcome: 'Regulatory incidents reduced to near-zero. Contract review time cut by 85%.',
    example: 'A financial services firm passed their FMA audit 3× faster than the prior year.',
    accent: 'cyan',
  },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-agent',
    name: 'Starter Agent',
    tagline: 'Automated lead capture',
    price: 97,
    description:
      'For service businesses automating lead capture and customer service from day one. 5-day free trial included.',
    features: [
      'Interactive Web Chatbot',
      'Basic GHL CRM Access',
      'Email Lead Notifications',
    ],
    cta: 'Start Free Trial →',
    stripeUrl: 'https://buy.stripe.com/5kQ8wPcPFfH6eCGgp2bjW0f',
    popular: false,
    accent: 'emerald',
  },
  {
    id: 'professional-receptionist',
    name: 'Professional Receptionist',
    tagline: 'AI voice + CRM automation',
    price: 297,
    description:
      'For plumbers, HVAC, and roofing businesses ready to automate inbound calls and booking. 5-day free trial included.',
    features: [
      'All Starter Features',
      'AI Voice Receptionist (bestreceptionist.ai)',
      'Real-time Call Qualification',
      'Calendar Integration & Booking',
    ],
    cta: 'Start Free Trial →',
    stripeUrl: 'https://buy.stripe.com/00weVd7vl1Qg3Y25KobjW0g',
    popular: true,
    accent: 'cyan',
  },
  {
    id: 'unlimited-agentic',
    name: 'Unlimited Agentic',
    tagline: 'Full AI infrastructure layer',
    price: 497,
    description:
      'For agencies and enterprises deploying AgenticAI CRM across unlimited sub-accounts with full automation. 5-day free trial included.',
    features: [
      'All Professional Features',
      'Unlimited SaaS Sub-accounts',
      'Custom Funnel Development',
      'Advanced API & Zapier Automations',
    ],
    cta: 'Start Free Trial →',
    stripeUrl: 'https://buy.stripe.com/dRm28rbLB9il7ae7SwbjW0h',
    popular: false,
    accent: 'emerald',
  },
]

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Deployment Over Discovery',
    description:
      'We ship agents in 30 days, not six-month roadmaps. Every engagement starts with a live system, not a slide deck.',
    icon: 'Rocket',
  },
  {
    title: 'Results Over Reports',
    description:
      'Every engagement is measured in revenue impact, hours saved, and competitive advantage gained. Not in deliverables.',
    icon: 'Target',
  },
  {
    title: 'Systems Over Solutions',
    description:
      'We build infrastructure that compounds in value over time. Not quick fixes that become tomorrow\'s tech debt.',
    icon: 'Layers',
  },
  {
    title: 'Trust Through Transparency',
    description:
      'You own your agents, your data, and your stack. We document everything. No black boxes. No vendor lock-in.',
    icon: 'Shield',
  },
]

export const REVENUE_OPTIONS = [
  { value: 'under-500k', label: 'Under $500k / year' },
  { value: '500k-1m', label: '$500k – $1M / year' },
  { value: '1m-5m', label: '$1M – $5M / year' },
  { value: '5m-20m', label: '$5M – $20M / year' },
  { value: '20m-plus', label: '$20M+ / year' },
  { value: 'prefer-not', label: 'Prefer not to say' },
]
