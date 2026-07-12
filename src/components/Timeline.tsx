import { timeline } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function Timeline() {
  return (
    <Section id="timeline" kicker="Journey" title="My timeline">
      <ol className="relative ml-3 border-l border-zinc-200 dark:border-zinc-800">
        {timeline.map((item, i) => (
          <li key={`${item.year}-${item.title}`} className="mb-10 ml-7 last:mb-0">
            <Reveal delay={i * 0.06}>
              <span
                className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-indigo-600 dark:border-zinc-950"
                aria-hidden="true"
              />
              <time className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                {item.year}
              </time>
              <h3 className="mt-1 text-base font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
