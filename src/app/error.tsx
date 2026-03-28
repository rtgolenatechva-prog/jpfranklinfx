'use client'

import { useEffect } from 'react'
import { GlowButton } from '@/components/ui/GlowButton'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20">
          <AlertCircle size={28} className="text-red-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#f0f0f0] mb-2">
            Something went wrong
          </h2>
          <p className="text-[#a0a0a0] text-sm">
            An unexpected error occurred. We&apos;ve been notified and are working on a fix.
          </p>
        </div>
        <div className="flex gap-3">
          <GlowButton onClick={reset} variant="emerald" size="sm">
            Try again
          </GlowButton>
          <GlowButton href="/" variant="outline" size="sm">
            Go home
          </GlowButton>
        </div>
      </div>
    </div>
  )
}
