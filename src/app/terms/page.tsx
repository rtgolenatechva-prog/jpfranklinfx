import type { Metadata } from 'next'
import Link from 'next/link'
import { GridBackground } from '@/components/ui/GridBackground'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing your use of Agentic Workflow\'s website, AgenticAI CRM, and AI Receptionist services.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
}

const LAST_UPDATED = '1 March 2026'

const sections = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    content: `By accessing or using the website at aiagenticworkflow.ai ("Site") or engaging Agentic Workflow ("we", "us", "our") for services, you ("Client", "you") agree to be bound by these Terms of Service ("Terms").

These Terms apply to all visitors, users, and clients. If you are entering into these Terms on behalf of a company or organisation, you represent that you have the authority to do so.

If you do not agree to these Terms, do not use our Site or services. We reserve the right to update these Terms at any time; continued use after changes constitutes acceptance.`,
  },
  {
    id: 'services',
    title: '2. Services',
    content: `Agentic Workflow provides custom AI agent system design, development, and deployment services for businesses ("Services"). Our offerings include, but are not limited to:

- Lead intelligence and outreach automation agents
- Revenue and proposal automation systems
- Customer experience AI agents
- Data analytics and reporting agents
- Workflow orchestration systems
- Compliance and risk monitoring agents

The specific scope of Services for each engagement is defined in a separate Statement of Work (SOW) or service agreement executed between both parties. These Terms apply in addition to and do not replace that agreement.`,
  },
  {
    id: 'strategy-audit',
    title: '3. Free Strategy Audit',
    content: `Our Free Strategy Audit is a no-obligation 45-minute consultation. By booking an audit:

- You acknowledge this is an introductory consultation, not a binding engagement
- We will prepare a customised AI deployment roadmap based on the information you provide
- No payment is required and no contract is created by the audit alone
- We reserve the right to decline an audit at our discretion

Any information shared during the audit is kept confidential per our Privacy Policy. The roadmap we produce remains our intellectual property until a formal service agreement is signed.`,
  },
  {
    id: 'payment',
    title: '4. Fees & Payment',
    content: `**Fees:** Service fees are as stated in your SOW or service agreement. Published pricing tiers on our website are indicative and may vary based on project scope and complexity.

**Invoicing:** Invoices are issued monthly in advance unless otherwise agreed. All fees are in New Zealand Dollars (NZD) plus applicable GST.

**Payment:** Payment is due within 14 days of invoice date. We accept bank transfer and major credit cards.

**Late payment:** Overdue invoices may incur interest at 2% per month. We reserve the right to suspend services on accounts more than 30 days overdue.

**Cancellation:** You may cancel services with 30 days' written notice. Fees for the notice period remain payable. Setup fees and any third-party costs already incurred are non-refundable.`,
  },
  {
    id: 'ip',
    title: '5. Intellectual Property',
    content: `**Client ownership:** Upon full payment of all fees, you own the custom AI agent systems, workflows, and code we build specifically for your business as part of a paid engagement.

**Our retained IP:** We retain ownership of our underlying frameworks, libraries, templates, methodologies, and any pre-existing tools or techniques used in delivering your project. These are licensed to you on a non-exclusive basis for use within your deployed systems.

**Client data:** All data you provide to us or that is processed by your AI agent systems remains your property. We claim no ownership over your business data.

**Feedback:** If you provide feedback or suggestions about our services, we may use that feedback without compensation or attribution obligation.`,
  },
  {
    id: 'ai-limitations',
    title: '6. AI Systems — Limitations & Disclaimers',
    content: `AI agent systems involve inherent limitations and unpredictability. You acknowledge and agree:

**No guarantee of outcomes:** While we design systems to deliver the outcomes described in your SOW, we cannot guarantee specific business results. AI performance depends on data quality, integration accuracy, market conditions, and factors outside our control.

**Human oversight:** AI agent outputs should be subject to appropriate human review, particularly for high-stakes decisions (financial, legal, medical, HR). You are responsible for establishing oversight processes appropriate for your business.

**Model changes:** Large language models used in agent systems are operated by third parties (e.g. OpenAI, Anthropic). Changes to these models may affect agent behaviour. We will notify you of material changes and make reasonable efforts to maintain system performance.

**No professional advice:** AI agent outputs do not constitute legal, financial, medical, or other regulated professional advice. You should seek qualified professional advice for such matters.`,
  },
  {
    id: 'confidentiality',
    title: '7. Confidentiality',
    content: `Both parties may have access to confidential information during an engagement. Each party agrees to:

- Keep the other party's confidential information strictly confidential
- Use confidential information only for the purpose of the engagement
- Not disclose confidential information to third parties without prior written consent
- Return or destroy confidential information upon request or termination

Confidential information does not include information that is or becomes publicly known through no fault of the receiving party, or that the receiving party can demonstrate was independently developed.

This confidentiality obligation survives termination of any service agreement for a period of three (3) years.`,
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: `**Our liability cap:** To the maximum extent permitted by New Zealand law, our total liability for any claim arising from our services is limited to the fees paid by you in the three months preceding the claim.

**Exclusions:** We are not liable for indirect, consequential, incidental, special, or punitive damages, including but not limited to: lost profits, lost revenue, loss of data, or business interruption — even if we have been advised of the possibility of such damages.

**Exceptions:** Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded by law under the Consumer Guarantees Act 1993 or Fair Trading Act 1986 where applicable.

**Force majeure:** We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, internet outages, third-party API failures, or government actions.`,
  },
  {
    id: 'warranties',
    title: '9. Warranties',
    content: `We warrant that:

- We have the rights and authority to enter into service agreements with you
- Services will be performed with reasonable skill and care
- We will comply with applicable New Zealand law in performing our services

We do not warrant that our website will be uninterrupted or error-free. The website and any pre-engagement materials are provided "as is" without warranty of any kind.

You warrant that:

- You have the authority to engage us and accept these Terms
- Any information you provide to us is accurate and not misleading
- You will not use our services for any unlawful or harmful purpose`,
  },
  {
    id: 'acceptable-use',
    title: '10. Acceptable Use',
    content: `You agree not to use our website or services to:

- Violate any applicable law or regulation
- Harass, abuse, or harm any person
- Transmit spam, malware, or malicious code
- Infringe the intellectual property rights of others
- Engage in deceptive practices or fraud
- Circumvent any security measures
- Scrape or harvest data from our website without permission

We reserve the right to suspend or terminate access for any violation of these provisions.`,
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: `**By you:** You may terminate a service engagement with 30 days' written notice, subject to the payment obligations in Section 4.

**By us:** We may suspend or terminate services immediately if you materially breach these Terms or a service agreement and fail to remedy the breach within 10 business days of written notice. We may also terminate with 30 days' notice for any reason.

**Effect of termination:** Upon termination, we will provide you with a copy of your data and custom deliverables in a reasonable format. Each party's accrued rights and obligations at the date of termination are not affected.`,
  },
  {
    id: 'governing-law',
    title: '12. Governing Law & Disputes',
    content: `These Terms are governed by the laws of New Zealand. Both parties submit to the non-exclusive jurisdiction of the New Zealand courts.

**Dispute resolution:** Before initiating legal proceedings, both parties agree to attempt in good faith to resolve any dispute through direct negotiation for a period of 30 days from written notice of the dispute.

If direct negotiation is unsuccessful, either party may refer the dispute to mediation through the New Zealand Dispute Resolution Centre before commencing court proceedings.`,
  },
  {
    id: 'general',
    title: '13. General',
    content: `**Entire agreement:** These Terms, together with any SOW or service agreement, constitute the entire agreement between the parties and supersede all prior negotiations and representations.

**Severability:** If any provision of these Terms is found to be unenforceable, it will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions continue in full force.

**No waiver:** Our failure to enforce any provision does not constitute a waiver of that or any other provision.

**Notices:** Notices under these Terms must be in writing and sent to hello@aiagenticworkflow.ai or delivered to our registered address in Auckland, New Zealand.`,
  },
  {
    id: 'contact',
    title: '14. Contact',
    content: `If you have questions about these Terms, please contact us:

**Agentic Workflow**
Email: hello@aiagenticworkflow.ai
Location: Auckland, New Zealand

We aim to respond to all legal enquiries within 5 business days.`,
  },
]

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Hero band */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#2a2a2a]">
        <GridBackground opacity={0.3} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-4">
            Legal
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #f0f0f0 60%, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-[#606060]">
            Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Governed by New Zealand law
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro callout */}
        <div className="mb-12 p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
          <p className="text-sm text-[#d0d0d0] leading-relaxed">
            These Terms govern your use of our website and any AI agent services we provide. We have written
            them in plain English. If anything is unclear, email us at{' '}
            <a href="mailto:hello@aiagenticworkflow.ai" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              hello@aiagenticworkflow.ai
            </a>{' '}
            — we are happy to clarify.
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
                  className="text-xs text-[#a0a0a0] hover:text-cyan-400 transition-colors"
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
            href="/privacy"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Privacy Policy →
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
