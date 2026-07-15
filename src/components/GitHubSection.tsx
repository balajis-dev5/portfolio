import { useState } from 'react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

/**
 * GitHub activity cards are rendered by public image services
 * (github-readme-stats, ghchart). Those services are occasionally
 * rate-limited or down, which would otherwise surface as a broken-image
 * icon. Each card tracks its own load state and falls back to a clean
 * "view on GitHub" panel so the section always looks intentional.
 */
export default function GitHubSection() {
  const user = profile.githubUsername
  const profileUrl = `https://github.com/${user}`

  return (
    <Section id="github" kicker="Open Source" title="GitHub activity">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <StatCard
            src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=6366f1&text_color=71717a`}
            alt={`GitHub statistics for ${profile.name}`}
            label="Contribution stats"
            href={profileUrl}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <StatCard
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=71717a`}
            alt={`Most used languages for ${profile.name}`}
            label="Most used languages"
            href={profileUrl}
          />
        </Reveal>
      </div>
      <Reveal delay={0.12}>
        <StatCard
          src={`https://ghchart.rshah.org/6366f1/${user}`}
          alt={`GitHub contribution graph for ${profile.name}`}
          label="Contribution graph"
          href={profileUrl}
          className="mt-5 p-4"
        />
      </Reveal>
    </Section>
  )
}

function StatCard({
  src,
  alt,
  label,
  href,
  className = 'p-2',
}: {
  src: string
  alt: string
  label: string
  href: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  const shell =
    'w-full rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'

  if (failed) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex min-h-[9rem] flex-col items-center justify-center gap-1 text-center transition hover:border-indigo-400 dark:hover:border-indigo-500 ${shell} p-6`}
      >
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{label}</span>
        <span className="text-sm text-indigo-600 dark:text-indigo-400">View on GitHub →</span>
      </a>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${shell} ${className}`}
    />
  )
}
