import { motion } from 'motion/react'
import { cn } from '../../lib/utils'
import type { TechItem } from '../../data/techLogos'

export interface TechLogoProps {
  tech: TechItem
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TechLogo({ tech, showLabel = true, size = 'md', className }: TechLogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 p-2 text-xs',
    md: 'w-14 h-14 p-3 text-xs',
    lg: 'w-16 h-16 p-3.5 text-sm',
  }

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  }

  return (
    <motion.div
      className={cn('group flex flex-col items-center gap-2', className)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={cn(
          'relative rounded-xl bg-panel border border-line flex items-center justify-center transition-all duration-200 group-hover:border-line-strong group-hover:shadow-sm',
          sizeClasses[size]
        )}
      >
        <div
          className={cn('transition-transform duration-200 group-hover:scale-105', iconSizes[size])}
          style={{ color: tech.color }}
          aria-hidden="true"
        >
          {tech.svg}
        </div>
      </div>

      {showLabel && (
        <span className="font-mono text-[11px] text-ink-muted group-hover:text-ink transition-colors tracking-tight text-center truncate max-w-[84px]">
          {tech.name}
        </span>
      )}
    </motion.div>
  )
}
