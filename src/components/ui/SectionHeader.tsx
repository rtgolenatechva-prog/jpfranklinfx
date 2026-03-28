import { cn } from '@/lib/utils'
import { NeonBadge } from './NeonBadge'
import type { AccentColor } from '@/types'

interface SectionHeaderProps {
  badge?: string
  headline: React.ReactNode
  subheadline?: string
  align?: 'left' | 'center'
  accent?: AccentColor
  className?: string
  headlineClassName?: string
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  align = 'center',
  accent = 'emerald',
  className,
  headlineClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <NeonBadge accent={accent} size="sm">
          {badge}
        </NeonBadge>
      )}
      <h2
        className={cn(
          'text-display-md md:text-display-lg font-bold text-[#f0f0f0] leading-tight tracking-tight',
          headlineClassName
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'text-base md:text-lg text-[#a0a0a0] leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
