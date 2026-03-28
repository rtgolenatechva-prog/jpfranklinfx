'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'emerald' | 'cyan' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const variantStyles = {
  emerald: cn(
    'bg-emerald-500 text-white border border-emerald-500',
    'hover:bg-emerald-400 hover:shadow-glow-emerald',
    'active:bg-emerald-600'
  ),
  cyan: cn(
    'bg-cyan-500 text-white border border-cyan-500',
    'hover:bg-cyan-400 hover:shadow-glow-cyan',
    'active:bg-cyan-600'
  ),
  outline: cn(
    'bg-transparent text-[#f0f0f0] border border-[#3a3a3a]',
    'hover:border-emerald-500/50 hover:text-emerald-400',
    'active:bg-[#1a1a1a]'
  ),
  ghost: cn(
    'bg-transparent text-[#a0a0a0] border border-transparent',
    'hover:text-[#f0f0f0] hover:bg-[#1a1a1a]',
  ),
}

const sizeStyles = {
  sm: 'h-8 px-4 text-xs gap-1.5',
  md: 'h-10 px-5 text-sm gap-2',
  lg: 'h-12 px-7 text-base gap-2.5',
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  (
    {
      children,
      href,
      onClick,
      variant = 'emerald',
      size = 'md',
      loading = false,
      disabled = false,
      className,
      type = 'button',
      fullWidth = false,
    },
    ref
  ) => {
    const baseClasses = cn(
      'relative inline-flex items-center justify-center rounded-lg font-semibold',
      'transition-all duration-200 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    )

    const content = (
      <>
        {loading && (
          <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        )}
        {children}
      </>
    )

    if (href) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={fullWidth ? 'w-full' : 'inline-flex'}>
          <Link href={href} className={baseClasses}>
            {content}
          </Link>
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={baseClasses}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      >
        {content}
      </motion.button>
    )
  }
)
GlowButton.displayName = 'GlowButton'
