import { cn } from '@/lib/utils'
import type { AccentColor } from '@/types'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  accent?: AccentColor | 'none'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  as?: React.ElementType
}

const accentStyles: Record<string, string> = {
  emerald:
    'border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-glow-emerald-sm',
  cyan: 'border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-glow-cyan-sm',
  none: 'border-[#2a2a2a] hover:border-[#3a3a3a]',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function GlassCard({
  children,
  className,
  hover = false,
  accent = 'none',
  padding = 'md',
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'relative rounded-xl border bg-[#111111]/80 backdrop-blur-sm',
        'shadow-glass',
        hover && 'transition-all duration-300 cursor-default',
        hover && accentStyles[accent],
        !hover && 'border-[#2a2a2a]',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </Tag>
  )
}
