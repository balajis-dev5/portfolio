import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { heroStats, profile } from '../data/profile'
import CountUp from './CountUp'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Drifting aurora color fields */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora aurora-a -top-40 -left-32 h-[34rem] w-[34rem]" />
        <div className="aurora aurora-b -top-24 right-[-10%] h-[30rem] w-[30rem]" />
        <div className="aurora aurora-c bottom-[-40%] left-[30%] h-[28rem] w-[28rem]" />
      </div>

      {/* Decorative dotted backdrop */}
      <div
        className="bg-dots pointer-events-none absolute inset-0 text-zinc-300 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] dark:text-zinc-800"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-700/80 dark:bg-zinc-900/80 dark:text-zinc-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to {profile.openTo}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-indigo-600 sm:text-2xl dark:text-indigo-400">
            {profile.role} — {profile.stack}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-gradient inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white"
            >
              View my work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-800 backdrop-blur transition-colors hover:border-indigo-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-indigo-500 dark:hover:bg-zinc-800"
            >
              Contact me
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <p className="mt-6 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center sm:px-6">
              <dt className="order-2 mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </dt>
              <dd className="order-1 text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
