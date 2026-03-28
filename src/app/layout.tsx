import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.fullName}`,
    default: `${SITE_CONFIG.fullName} | NZ AI Agency`,
  },
  description:
    "New Zealand's premier AI automation agency. Autonomous agent systems that replace manual workflows, scale revenue, and compound competitive advantage. Auckland-based, 30-day deployments.",
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: 'JP Franklin', url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    title: `${SITE_CONFIG.fullName} | NZ AI Agency`,
    description:
      "We architect and deploy custom AI agent systems that eliminate manual workflows, accelerate revenue cycles, and give your business an unfair competitive advantage — live in 30 days.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.fullName} – NZ AI Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.fullName} | NZ AI Agency`,
    description:
      "New Zealand's premier agentic AI agency. 30-day deployments. Results-guaranteed.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.fullName,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/og-image.png`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NZ',
    addressLocality: 'Auckland',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_CONFIG.url}/audit`,
    email: SITE_CONFIG.email,
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.fullName,
  description: SITE_CONFIG.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-NZ"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={GeistSans.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111111',
              border: '1px solid #2a2a2a',
              color: '#f0f0f0',
            },
          }}
        />
      </body>
    </html>
  )
}
