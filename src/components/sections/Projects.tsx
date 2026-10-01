import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { Badge } from '../ui/Badge'
import { techStack } from '../../data/techLogos'

export function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className="section-pad relative" role="region" aria-labelledby="projects-heading">
      <div className="shell">
        <SectionHeading
          id="projects-heading"
          kicker="Selected Work"
          title="Featured Projects"
          subtitle="Real-world applications built during my studies, focusing on full-stack architecture, API design, and clean interfaces."
        />

        <motion.div
          ref={ref}
          className="mt-12 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.projects.map((project) => (
            <Card
              key={project.name}
              elevation="flat"
              className="p-6 sm:p-7 flex flex-col justify-between hover:border-line-strong transition-all duration-200"
            >
              <div>
                {/* Header meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-ink-faint">{project.year}</span>
                  {project.featured ? (
                    <Badge variant="primary">Featured Project</Badge>
                  ) : (
                    <Badge variant="default">Coursework</Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-ink tracking-tight">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-ink-muted leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-line/60 pt-4" role="list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-ink-muted font-normal">
                        <Icon name="check" size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom footer: Tech pills + Links */}
              <div className="mt-6 pt-5 border-t border-line">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((techName) => {
                    const item = techStack.find((t) => t.name === techName)
                    return (
                      <span
                        key={techName}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-paper border border-line text-[11px] font-mono text-ink-muted"
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

                <div className="flex items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-primary transition-colors link-underline"
                    >
                      <Icon name="github" size={14} />
                      <span>{link.label}</span>
                      <Icon name="external" size={12} className="text-ink-faint" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}