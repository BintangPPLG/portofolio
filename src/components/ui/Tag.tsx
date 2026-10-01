import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center px-2.5 py-1 rounded-lg bg-panel border border-line text-ink-muted font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:bg-primary/5 hover:border-primary/30 hover:text-primary', className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Tag.displayName = 'Tag'