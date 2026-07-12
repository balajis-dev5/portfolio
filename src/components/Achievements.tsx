import { Trophy } from 'lucide-react'
import { achievements } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function Achievements() {
  return (
    <Section id="achievements" kicker="Recognition" title="Achievements">
      <div className="grid gap-5 sm:grid-cols-3">
        {achievements.map((achievement, i) => (
          <Reveal key={achievement.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                <Trophy size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-zinc-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {achievement.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
