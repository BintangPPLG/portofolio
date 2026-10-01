import { motion } from 'motion/react'
import { useReveal } from '../../hooks/useReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { profile } from '../../data/profile'

const principles = [
  {
    title: 'Code Clarity & Maintainability',
    desc: 'Writing self-documenting, clean code that is easy for teams to read, review, and extend over time.',
  },
  {
    title: 'Performance & Responsiveness',
    desc: 'Building lightweight components and responsive layouts optimized across mobile and desktop devices.',
  },
  {
    title: 'End-to-End Problem Solving',
    desc: 'Connecting frontend interfaces with reliable backend APIs, structured databases, and role-based workflows.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Actively exploring modern tooling, TypeScript architectures, and scalable full-stack patterns.',
  },
]

export function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="section-pad relative" role="region" aria-labelledby="about-heading">
      <div className="shell">
        <SectionHeading
          id="about-heading"
          kicker="Background & Approach"
          title="About Me"
          subtitle="A Software Engineering student committed to craftsmanship, clean code, and practical problem-solving."
        />

        <motion.div
          ref={ref}
          className="grid md:grid-cols-12 gap-8 mt-12 items-start"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Bio card */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <Card elevation="flat" className="p-6 sm:p-8">
              <h3 className="text-lg font-medium text-ink mb-4">
                Engineering Journey
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                <p>
                  I am a Software Engineering student at SMK Taruna Bhakti Depok with a focused interest in full-stack web applications. Through practical school coursework and independent projects, I have developed foundational competencies across modern web technologies.
                </p>
                <p>
                  My work centers around crafting clear user interfaces in React and Next.js, backed by structured APIs with Node.js, Express, and MySQL databases. I enjoy solving real problems for users and transforming wireframes into production-ready software.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-line flex items-center justify-between text-xs font-mono text-ink-faint">
                <span>Location: {profile.location}</span>
                <span>Status: {profile.availability}</span>
              </div>
            </Card>
          </div>

          {/* Core Principles */}
          <div className="md:col-span-6">
            <Card elevation="flat" className="p-6 sm:p-8">
              <h3 className="text-lg font-medium text-ink mb-5">
                Core Working Principles
              </h3>
              <ul className="space-y-4" role="list">
                {principles.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-paper border border-line flex items-center justify-center text-primary">
                      <Icon name="check" size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-ink">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
