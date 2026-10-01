import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'primary' | 'accent' | 'neutral'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-paper border border-line text-ink-muted',
      neutral: 'bg-paper border border-line text-ink',
      primary: 'bg-primary-soft text-primary border border-primary/20',
      accent: 'bg-accent-soft text-accent border border-accent/20',
      success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
      warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
      error: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20',
    }
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-normal tracking-wide',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'