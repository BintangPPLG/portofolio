import { useState } from 'react'
import { motion } from 'motion/react'
import { useReveal } from '../../hooks/useReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { techStack, techCategories } from '../../data/techLogos'

export function Skills() {
  const { ref, visible } = useReveal()
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', ...techCategories.map((c) => c.label)]

  const filteredTech = activeCategory === 'All'
    ? techStack
    : techStack.filter((tech) => {
        const catGroup = techCategories.find((c) => c.label === activeCategory)
        return catGroup ? catGroup.items.includes(tech.name) : true
      })

  return (
    <section id="skills" className="section-pad relative" role="region" aria-labelledby="skills-heading">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            id="skills-heading"
            kicker="Technical Stack"
            title="Tools & Technologies"
            subtitle="The core frameworks, libraries, and developer tools I use to build scalable web and mobile software."
          />

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-panel border border-line" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-paper text-ink shadow-xs border border-line font-medium'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl bg-panel border border-line hover:border-line-strong hover:shadow-sm transition-all duration-150 flex items-start gap-3.5"
            >
              <div
                className="w-9 h-9 rounded-lg bg-paper border border-line flex items-center justify-center p-2 flex-shrink-0 transition-transform duration-150 group-hover:scale-105"
                style={{ color: tech.color }}
                aria-hidden="true"
              >
                {tech.svg}
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-mono text-xs font-medium text-ink truncate">
                  {tech.name}
                </span>
                <span className="text-[11px] text-ink-muted mt-0.5 line-clamp-1 font-normal">
                  {tech.description || tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
