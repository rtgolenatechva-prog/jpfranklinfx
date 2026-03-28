import { cn } from '@/lib/utils'
import type { AccentColor } from '@/types'

interface NeonBadgeProps {
  children: React.ReactNode
  accent?: AccentColor
  className?: string
  size?: 'sm' | 'md'
}

const accentConfig = {
  emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
  cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
}

const sizeConfig = {
  sm: 'text-xs px-2.5 py-0.5',
  md: 'text-sm px-3 py-1',
}

export function NeonBadge({
  children,
  accent = 'emerald',
  className,
  size = 'sm',
}: NeonBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide',
        accentConfig[accent],
        sizeConfig[size],
        className
      )}
    >
      {children}
    </span>
  )
}
