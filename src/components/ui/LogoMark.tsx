import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
  asLink?: boolean
}

const sizeConfig = {
  sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[10px]' },
  md: { icon: 'w-8 h-8', text: 'text-lg', sub: 'text-xs' },
  lg: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-sm' },
}

function LogoIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const { icon } = sizeConfig[size]
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-lg',
        'bg-gradient-to-br from-emerald-500 to-cyan-500',
        icon
      )}
    >
      {/* Abstract "FX" geometric mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4/5 h-4/5"
      >
        {/* Left vertical bar */}
        <rect x="4" y="4" width="4" height="24" rx="1.5" fill="white" opacity="0.95" />
        {/* Top horizontal bar */}
        <rect x="4" y="4" width="14" height="4" rx="1.5" fill="white" opacity="0.95" />
        {/* Middle horizontal bar */}
        <rect x="4" y="14" width="10" height="4" rx="1.5" fill="white" opacity="0.9" />
        {/* X right stroke top-left to bottom-right */}
        <line x1="19" y1="8" x2="28" y2="24" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
        {/* X right stroke top-right to bottom-left */}
        <line x1="28" y1="8" x2="19" y2="24" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
      </svg>
    </div>
  )
}

export function LogoMark({ size = 'md', showText = true, className, asLink = true }: LogoMarkProps) {
  const { text, sub } = sizeConfig[size]

  const inner = (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoIcon size={size} />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-bold text-[#f0f0f0] tracking-tight', text)}>
            JP <span className="text-emerald-400">Agentic</span> Workflow
          </span>
          <span className={cn('text-[#606060] tracking-widest uppercase font-medium mt-0.5', sub)}>
            AI Agency
          </span>
        </div>
      )}
    </div>
  )

  if (asLink) {
    return (
      <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
        {inner}
      </Link>
    )
  }

  return inner
}
