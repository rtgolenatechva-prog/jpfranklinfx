import { cn } from '@/lib/utils'

interface GridBackgroundProps {
  className?: string
  opacity?: number
  animated?: boolean
}

export function GridBackground({
  className,
  opacity = 1,
  animated = true,
}: GridBackgroundProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Primary grid */}
      <div
        className={cn('absolute inset-0', animated && 'animate-grid-pan')}
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Subtle secondary grid at larger scale */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '240px 240px',
        }}
      />
      {/* Radial fade at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0a0a0a 100%)',
        }}
      />
    </div>
  )
}
