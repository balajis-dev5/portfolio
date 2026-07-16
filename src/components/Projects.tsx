import { ArrowUpRight, ExternalLink, Github, Hammer, Star } from 'lucide-react'
import { useState } from 'react'
import { projects, profile, type Project } from '../data/profile'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import Section from './Section'

/** Shown instead of a repo link while the code is still being open-sourced. */
function InDevelopmentBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
      <Hammer size={12} aria-hidden="true" />
      In development
    </span>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const [active, setActive] = useState<Project | null>(null)

  return (
    <Section id="projects" kicker="Projects" title="Things I've built">
      <p className="-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        A selection of product and open-source work. Click any project to open its details.
      </p>

      {/* Featured projects */}
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article
              onClick={() => setActive(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(project)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
              className="group card-lift flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-indigo-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600/60"
            >
              {project.image && (
                <div className="overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Star size={12} aria-hidden="true" />
                  Featured
                </span>
                <div className="flex items-center gap-1.5">
                  {(!project.github || project.inDevelopment) && <InDevelopmentBadge />}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.name} on GitHub`}
                      className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.name} live demo`}
                      className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 flex items-center gap-1.5 text-xl font-bold text-zinc-900 dark:text-white">
                {project.name}
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500"
                />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Other projects */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {others.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article
              onClick={() => setActive(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(project)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
              className="group card-lift flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-indigo-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600/60"
            >
              {project.image && (
                <div className="overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex items-center gap-1.5 text-base font-bold text-zinc-900 dark:text-white">
                  {project.name}
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500"
                  />
                </h3>
                <div className="flex shrink-0 items-center gap-1.5">
                  {(!project.github || project.inDevelopment) && <InDevelopmentBadge />}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.name} on GitHub`}
                      className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                      <Github size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          More on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            GitHub →
          </a>
        </p>
      </Reveal>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
