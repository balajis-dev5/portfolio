import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github, Hammer, Star, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/profile'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * Accessible project detail "screen": a dialog that overlays the page with the
 * full write-up for a single project. Closes on Esc, backdrop click, or the
 * close button; restores focus to the trigger; respects reduced-motion.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl outline-none sm:rounded-2xl dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-zinc-200 bg-white/90 px-6 py-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
              <div>
                {project.featured && (
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <Star size={12} aria-hidden="true" />
                    Featured project
                  </span>
                )}
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white"
                >
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cover: real screenshot when the app runs, designed cover art otherwise */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full border-b border-zinc-200 dark:border-zinc-800"
              />
            )}

            {/* Body */}
            <div className="space-y-6 px-6 py-6">
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-200">
                    What it does
                  </h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-200">
                    Screens
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.images.map((img) => (
                      <figure
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
                      >
                        <img src={img.src} alt={img.caption} loading="lazy" className="w-full" />
                        <figcaption className="px-3 py-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-200">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="flex flex-wrap items-center gap-3 border-t border-zinc-200 px-6 py-5 dark:border-zinc-800">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <Github size={16} aria-hidden="true" />
                  {project.inDevelopment ? 'View repo & roadmap' : 'View code'}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-2.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  <Hammer size={13} aria-hidden="true" />
                  Code being open-sourced
                </span>
              )}
              {project.github && project.inDevelopment && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-2.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  <Hammer size={13} aria-hidden="true" />
                  Docs &amp; roadmap stage — code landing incrementally
                </span>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
