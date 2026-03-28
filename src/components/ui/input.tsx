import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-sm text-[#f0f0f0] placeholder:text-[#606060] transition-colors',
          'focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'autofill:bg-[#111111]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
