import { about } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" kicker="About" title="What I do">
      <div className="grid max-w-4xl items-center gap-8 md:grid-cols-[13rem_1fr] md:gap-10">
        <Reveal>
          <img
            src="/photo.jpg"
            alt="Balaji S"
            className="aspect-[4/5] w-full max-w-[16rem] rounded-2xl border border-zinc-200 object-cover object-[55%_center] shadow-lg dark:border-zinc-800"
          />
        </Reveal>
        <div className="space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={(i + 1) * 0.08}>
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
