import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  kicker: string
  title: string
  children: ReactNode
  className?: string
}

/** Consistent wrapper: max width, vertical rhythm, kicker + title. */
export default function Section({ id, kicker, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
            {kicker}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
