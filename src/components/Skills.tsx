import { Code2, Database, Layers, Wrench } from 'lucide-react'
import { skillGroups } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

const groupIcons = [Layers, Code2, Database, Wrench]

export default function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="Technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[i % groupIcons.length]
          return (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
