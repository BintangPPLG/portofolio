import { cn } from '../../lib/utils'

export interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizes = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-28 h-28 sm:w-32 sm:h-32',
  xl: 'w-36 h-36 sm:w-44 sm:h-44',
}

export function Avatar({ src, alt = 'Narendra Bintang Ramadan', fallback = 'N', size = 'lg', className }: AvatarProps) {
  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <div
        className={cn(
          'relative rounded-2xl overflow-hidden bg-panel border border-line-strong/60 shadow-sm transition-transform duration-300 hover:scale-[1.02]',
          sizes[size]
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-paper flex items-center justify-center text-ink-muted font-mono font-medium text-2xl">
            {fallback}
          </div>
        )}
      </div>
    </div>
  )
}
