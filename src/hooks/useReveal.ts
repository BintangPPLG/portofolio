import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: { threshold?: number; rootMargin?: string; once?: boolean }) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { amount: 0.15, once: options?.once ?? true })

  // For reduced motion, immediately show
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
    } else {
      setVisible(isInView)
    }
  }, [isInView])

  return { ref, visible }
}