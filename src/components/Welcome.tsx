import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function Welcome() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('portfolio-welcomed')
    if (seen) return
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('portfolio-welcomed', '1')
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('portfolio-welcomed', '1')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper cursor-pointer select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={dismiss}
          role="dialog"
          aria-label="Welcome screen"
        >
          <div className="flex flex-col items-center text-center px-6 max-w-md">
            <motion.span
              className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-3 font-normal"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Portfolio
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl font-medium tracking-tight text-ink"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Narendra Bintang Ramadan
            </motion.h1>

            <motion.p
              className="text-xs sm:text-sm text-ink-muted mt-2 font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Software Engineer &middot; Full-Stack Web
            </motion.p>

            <motion.div
              className="w-12 h-0.5 bg-line-strong rounded-full mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
