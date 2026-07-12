import { about } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" kicker="About" title="What I do">
      <div className="max-w-3xl space-y-5">
        {about.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
