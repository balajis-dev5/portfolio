import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Where I've worked">
      <div className="space-y-8">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <Briefcase size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{job.title}</h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.summary}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {job.modules.map((module) => (
                  <div key={module.name}>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {module.name}
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {module.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
