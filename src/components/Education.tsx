import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" kicker="Education" title="Education & certifications">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.institution}</p>
              <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                {item.year}
                {item.note ? ` · ${item.note}` : ''}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
              <Award size={18} aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Certifications</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
