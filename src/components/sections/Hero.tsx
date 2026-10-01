import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { Icon } from '../ui/Icon'
import { Badge } from '../ui/Badge'
import { techStack } from '../../data/techLogos'

export function Hero() {
  const primaryTech = [
    techStack.find((t) => t.name === 'React'),
    techStack.find((t) => t.name === 'Next.js'),
    techStack.find((t) => t.name === 'TypeScript'),
  ].filter(Boolean)

  return (
    <header id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden" role="banner">
      {/* Subtle ambient light gradient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main info column */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status indicator */}
            <div className="mb-6">
              <Badge variant="neutral" className="gap-2 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-ink-muted">{profile.availability}</span>
              </Badge>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ink leading-[1.15]">
              Hi, I&apos;m{' '}
              <span className="font-medium text-ink">
                {profile.name}
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl font-normal">
              {profile.tagline}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Selected Work
                <Icon name="chevronRight" size={16} />
              </a>
              <a href={profile.resumeUrl} download className="btn-outline">
                <Icon name="mail" size={16} />
                Download CV
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 pt-8 border-t border-line w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-xl sm:text-2xl font-medium text-ink">
                    {stat.value}
                  </span>
                  <span className="text-xs text-ink-faint mt-1 font-normal">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait & feature card column */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden bg-panel border border-line-strong/60 shadow-md p-2">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-paper">
                  <img
                    src="/photo.jpeg"
                    alt={profile.name}
                    className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating location tag inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="truncate">{profile.location}</span>
                    <span className="text-white/70">SMK Taruna Bhakti</span>
                  </div>
                </div>
              </div>

              {/* Anchored clean tech pills */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {primaryTech.map((tech) => {
                  if (!tech) return null
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel border border-line text-xs font-mono text-ink-muted shadow-sm"
                    >
                      <span className="w-3.5 h-3.5 inline-flex" style={{ color: tech.color }}>
                        {tech.svg}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
