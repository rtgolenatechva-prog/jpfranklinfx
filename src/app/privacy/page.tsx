import type { Metadata } from 'next'
import Link from 'next/link'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How JP Franklin FX – Agentic AI Division collects, uses, and protects your personal information. NZ Privacy Act 2020 compliant.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
}

const LAST_UPDATED = '1 March 2026'

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `JP Franklin FX – Agentic AI Division ("we", "our", "us") is committed to protecting your personal information in accordance with the New Zealand Privacy Act 2020. This Privacy Policy explains how we collect, use, store, and share information when you interact with our website at jpfranklinfx.co.nz and any services we provide.

By using our website or engaging our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website.`,
  },
  {
    id: 'what-we-collect',
    title: '2. Information We Collect',
    content: `We collect two categories of information:

**Information you provide directly**
When you submit a Strategy Audit request or contact us, we collect: your name, email address, company name, website URL, phone number (optional), annual revenue range, and a description of your business challenge.

**Information collected automatically**
When you visit our website we may collect: your IP address, browser type, device type, pages visited, time spent on pages, and referral source. This is collected via standard server logs and analytics tools to help us improve our service.

We do not collect sensitive information (as defined by the Privacy Act 2020) and we never purchase third-party marketing lists.`,
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: `We use your information exclusively for legitimate business purposes:

- To respond to your Strategy Audit request and follow up within 24 hours
- To prepare a customised AI deployment roadmap for your business
- To communicate about our services, proposals, and project updates
- To improve our website and understand how visitors engage with our content
- To comply with legal obligations under New Zealand law

We do not use your information for unsolicited marketing, and we will never sell your data to third parties.`,
  },
  {
    id: 'ai-data',
    title: '4. AI Systems & Data Processing',
    content: `As an AI agency, we build and operate AI agent systems on behalf of our clients. When we deploy AI systems for your business:

- Any data processed by your AI agents is governed by a separate Data Processing Agreement (DPA) included in your service contract
- We act as a data processor on your behalf; you remain the data controller for your customers' data
- AI agent outputs and logs are retained only as long as necessary for system monitoring, debugging, and performance optimisation
- We do not use your clients' data to train AI models or improve our own systems without explicit written consent
- All AI systems we build are designed with data minimisation principles — agents only access the data they need to perform their function`,
  },
  {
    id: 'sharing',
    title: '5. Information Sharing',
    content: `We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:

**Service providers:** We use Supabase (database infrastructure) and Vercel (website hosting) to operate our platform. Both are contractually required to handle data securely and in compliance with applicable law.

**Legal requirements:** We may disclose information if required by New Zealand law, court order, or to protect the rights and safety of our business or others.

**Business transfers:** In the event of a merger or acquisition, personal information may be transferred to the acquiring entity, who will be bound by this Privacy Policy.

All third-party service providers are evaluated for security and privacy compliance before we use their services.`,
  },
  {
    id: 'cookies',
    title: '6. Cookies & Tracking',
    content: `Our website uses minimal tracking:

**Essential:** We use session-level cookies to maintain website functionality. These cannot be disabled without affecting site performance.

**Analytics:** We may use privacy-respecting analytics (no cross-site tracking, no fingerprinting) to understand aggregate site usage patterns such as page views and popular content.

We do not use advertising cookies, retargeting pixels, or third-party tracking scripts that profile individual users.

You can control cookies through your browser settings. Disabling cookies may affect some website functionality but will not affect your ability to contact us.`,
  },
  {
    id: 'retention',
    title: '7. Data Retention',
    content: `We retain personal information only for as long as necessary:

- **Strategy Audit enquiries:** Information is retained for 24 months from the date of submission, or for the duration of a client relationship, whichever is longer
- **Website analytics:** Aggregated, anonymised data may be retained indefinitely; IP addresses are anonymised within 90 days
- **Client project data:** Retained for the duration of the engagement plus 12 months, unless a longer retention period is required by contract or law

You may request deletion of your information at any time (see Section 9).`,
  },
  {
    id: 'security',
    title: '8. Security',
    content: `We take reasonable steps to protect your personal information from unauthorised access, loss, or misuse. Our security measures include:

- All data transmitted to our website is encrypted via TLS/HTTPS
- Database access is restricted by Row Level Security (RLS) policies
- Service credentials are stored using environment variable isolation — never in source code
- Access to customer data is limited to authorised personnel on a need-to-know basis

No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: 'rights',
    title: '9. Your Rights',
    content: `Under the New Zealand Privacy Act 2020, you have the right to:

- **Access:** Request a copy of the personal information we hold about you
- **Correction:** Ask us to correct inaccurate or incomplete information
- **Deletion:** Request that we delete your personal information (subject to legal retention obligations)
- **Portability:** Request your data in a commonly used, machine-readable format
- **Opt-out:** Unsubscribe from any communications at any time

To exercise any of these rights, email us at hello@jpfranklinfx.co.nz with the subject line "Privacy Request". We will respond within 20 working days as required by the Privacy Act 2020.

If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner at www.privacy.org.nz.`,
  },
  {
    id: 'children',
    title: '10. Children\'s Privacy',
    content: `Our services are directed to businesses and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.`,
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised "Last updated" date. For material changes, we will notify active clients directly by email.

We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    content: `If you have questions, concerns, or requests relating to this Privacy Policy, please contact us:

**JP Franklin FX – Agentic AI Division**
Email: hello@jpfranklinfx.co.nz
Location: Auckland, New Zealand

We take privacy matters seriously and will respond to all enquiries within 5 business days.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Hero band */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#2a2a2a]">
        <GridBackground opacity={0.3} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-500 mb-4">
            Legal
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #f0f0f0 60%, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-[#606060]">
            Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Governed by New Zealand Privacy Act 2020
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro callout */}
        <div className="mb-12 p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
          <p className="text-sm text-[#d0d0d0] leading-relaxed">
            We built JP Franklin FX to serve businesses — not to harvest data. This policy is written in plain English
            so you can understand exactly what we collect, why we collect it, and how you can control it.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mb-14 p-5 rounded-xl border border-[#2a2a2a] bg-[#111111]/60">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#606060] mb-4">
            Contents
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-xs text-[#a0a0a0] hover:text-emerald-400 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-base font-semibold text-[#f0f0f0] mb-4 pb-3 border-b border-[#2a2a2a]">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return (
                      <p key={i} className="text-sm font-semibold text-[#d0d0d0]">
                        {para.slice(2, -2)}
                      </p>
                    )
                  }
                  // Replace inline **bold** markers
                  const parts = para.split(/(\*\*[^*]+\*\*)/)
                  return (
                    <p key={i} className="text-sm text-[#a0a0a0] leading-relaxed">
                      {parts.map((part, j) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={j} className="text-[#d0d0d0] font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/terms"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Terms of Service →
          </Link>
          <Link
            href="/"
            className="text-sm text-[#606060] hover:text-[#a0a0a0] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
