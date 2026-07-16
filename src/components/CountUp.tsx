import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CountUpProps {
  /** Display value like "2+", "4", "10+" — the numeric part animates, the rest stays. */
  value: string
  className?: string
}

/** Animates the numeric part of a stat from 0 when it scrolls into view. */
export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || reduceMotion || target === null || !ref.current) return
    const node = ref.current
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduceMotion, target, suffix])

  // Non-numeric values (or reduced motion) render as-is; numeric ones start
  // at 0 only once the animation is actually going to run.
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
