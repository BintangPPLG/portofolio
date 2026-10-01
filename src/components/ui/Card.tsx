import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 'flat' | 'raised' | 'outlined'
  interactive?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation = 'flat', interactive, children, ...props }, ref) => {
    const bases = {
      flat: 'bg-panel border border-line',
      raised: 'bg-raised shadow-md border border-line/50',
      outlined: 'bg-transparent border border-line-strong',
    }
    const interactiveCls = interactive
      ? 'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 cursor-pointer'
      : ''
    return (
      <div
        ref={ref}
        className={cn('rounded-2xl', bases[elevation], interactiveCls, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'