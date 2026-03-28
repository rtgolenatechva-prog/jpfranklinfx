import Link from 'next/link'
import { GlowButton } from '@/components/ui/GlowButton'
import { GridBackground } from '@/components/ui/GridBackground'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4">
      <GridBackground opacity={0.4} />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-md">
        {/* 404 */}
        <div
          className="text-[6rem] font-bold leading-none"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#f0f0f0] mb-2">
            Page not found
          </h1>
          <p className="text-[#a0a0a0] text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. No agent
            was deployed to this URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <GlowButton href="/" variant="emerald">
            ← Back to Home
          </GlowButton>
          <GlowButton href="/audit" variant="outline">
            Book a Free Audit
          </GlowButton>
        </div>
      </div>
    </div>
  )
}
