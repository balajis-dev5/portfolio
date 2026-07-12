import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

/**
 * GitHub stats cards render from public image services once
 * barath19231 is replaced in src/data/profile.ts.
 */
export default function GitHubSection() {
  const user = profile.githubUsername

  return (
    <Section id="github" kicker="Open Source" title="GitHub activity">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=6366f1`}
            alt={`GitHub statistics for ${profile.name}`}
            loading="lazy"
            className="w-full rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=transparent&hide_border=true&title_color=6366f1`}
            alt={`Most used languages for ${profile.name}`}
            loading="lazy"
            className="w-full rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900"
          />
        </Reveal>
      </div>
      <Reveal delay={0.12}>
        <img
          src={`https://ghchart.rshah.org/6366f1/${user}`}
          alt={`GitHub contribution graph for ${profile.name}`}
          loading="lazy"
          className="mt-5 w-full rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
        />
      </Reveal>
    </Section>
  )
}
