import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { techStack } from '../../data/techLogos'

export function Experience() {
  const { ref, visible } = useReveal()

  return (
    <section id="experience" className="section-pad relative" role="region" aria-labelledby="experience-heading">
      <div className="shell">
        <SectionHeading
          id="experience-heading"
          kicker="Education & Milestones"
          title="Experience & Assessments"
          subtitle="My academic education at SMK Taruna Bhakti Depok along with practical competency evaluations."
        />

        <motion.div
          ref={ref}
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.experience.map((job) => (
            <Card
              key={`${job.company}-${job.role}`}
              elevation="flat"
              className="p-6 sm:p-7 border border-line hover:border-line-strong transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-line">
                <div>
                  <h3 className="text-lg font-medium text-ink">
                    {job.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted mt-0.5 font-normal">
                    {job.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-ink-faint flex-shrink-0">
                  {job.period}
                </span>
              </div>

              <p className="mt-4 text-sm text-ink-muted leading-relaxed font-normal">
                {job.summary}
              </p>

              {job.achievements.length > 0 && (
                <ul className="mt-4 space-y-2" role="list">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted font-normal">
                      <Icon name="check" size={14} className="mt-1 flex-shrink-0 text-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.tech.length > 0 && (
                <div className="mt-5 pt-4 border-t border-line/60 flex flex-wrap gap-1.5">
                  {job.tech.map((techName) => {
                    const item = techStack.find((t) => t.name === techName)
                    return (
                      <span
                        key={techName}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-paper border border-line text-[11px] font-mono text-ink-muted"
                      >
                        {item && (
                          <span className="w-3 h-3 inline-flex" style={{ color: item.color }}>
                            {item.svg}
                          </span>
                        )}
                        <span>{techName}</span>
                      </span>
                    )
                  })}
                </div>
              )}
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}