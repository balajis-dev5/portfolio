import { Quote } from 'lucide-react'
import { testimonials } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

/**
 * Placeholder section — hidden automatically until real quotes replace the
 * [[...]] placeholders in src/data/profile.ts.
 */
export default function Testimonials() {
  const ready = testimonials.filter((t) => !t.quote.includes('[['))
  if (ready.length === 0) return null

  return (
    <Section id="testimonials" kicker="Testimonials" title="What colleagues say">
      <div className="grid gap-5 sm:grid-cols-2">
        {ready.map((testimonial, i) => (
          <Reveal key={testimonial.author} delay={i * 0.06}>
            <figure className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <Quote
                size={22}
                className="text-indigo-600/40 dark:text-indigo-400/40"
                aria-hidden="true"
              />
              <blockquote className="mt-3 text-sm leading-relaxed text-zinc-600 italic dark:text-zinc-400">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
