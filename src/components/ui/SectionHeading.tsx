import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, subtitle, align = 'left', className, children, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start', className)} {...props}>
      <span className="kicker mb-2.5">{kicker}</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-ink leading-snug">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-ink-muted leading-relaxed font-normal">{subtitle}</p>
      )}
      {children}
    </div>
  )
}