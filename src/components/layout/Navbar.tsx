import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from '../../hooks/useTheme'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const sections = ['about', 'skills', 'projects', 'experience', 'contact']

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="shell">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a
              href="#home"
              className="font-sans text-base font-medium tracking-tight text-ink hover:text-ink-muted transition-colors"
              aria-label="Narendra Bintang Ramadan - Home"
            >
              Narendra Bintang
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5" role="menubar">
                {sections.map((section) => (
                  <li key={section} role="none">
                    <a
                      href={`#${section}`}
                      className="text-xs font-mono uppercase tracking-wider text-ink-muted hover:text-ink transition-colors link-underline"
                      role="menuitem"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 pl-3 border-l border-line">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  className="w-8 h-8 p-0"
                >
                  <Icon name={theme === 'light' ? 'moon' : 'sun'} size={15} />
                </Button>
                <a href="#contact" className="btn-primary text-xs py-1.5 px-3">
                  Get in touch
                </a>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="w-8 h-8 p-0"
              >
                <Icon name={theme === 'light' ? 'moon' : 'sun'} size={15} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                className="w-8 h-8 p-0"
              >
                <Icon name="chevronRight" size={16} className={mobileOpen ? 'rotate-90 transition-transform' : 'transition-transform'} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-paper/95 backdrop-blur-md pt-20 px-6 flex flex-col justify-between pb-8"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-lg font-medium text-ink capitalize py-2 border-b border-line/50"
                  onClick={closeMobile}
                >
                  {section}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-line flex flex-col gap-3">
              <a
                href="#contact"
                className="btn-primary w-full text-center justify-center py-2.5"
                onClick={closeMobile}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}