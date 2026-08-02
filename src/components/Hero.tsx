import { motion } from 'framer-motion'
import { ArrowRight, Braces, CheckCircle2, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react'
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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:mt-8"
        >
          <div className="hero-orbit hero-orbit-a" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-b" aria-hidden="true" />
          <div className="hero-terminal overflow-hidden rounded-3xl border border-white/50 bg-zinc-950/90 shadow-2xl shadow-indigo-950/30 ring-1 ring-indigo-500/20 backdrop-blur-xl dark:border-zinc-700/60">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[11px] text-zinc-500">shipping.log</span>
              <Terminal size={15} className="text-indigo-300" aria-hidden="true" />
            </div>
            <div className="space-y-5 p-5 font-mono text-xs leading-relaxed sm:p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <span className="text-zinc-500">$</span>
                <span>build --experience</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </div>
              <div className="space-y-3 border-l border-indigo-400/30 pl-4 text-zinc-400">
                <p><span className="text-violet-300">stack</span>: Laravel + React + TypeScript</p>
                <p><span className="text-violet-300">focus</span>: reliable data-heavy products</p>
                <p><span className="text-violet-300">testing</span>: Playwright MCP + sandbox</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex items-center gap-2 text-white">
                  <Braces size={15} className="text-sky-300" aria-hidden="true" />
                  <span className="font-semibold">Feature delivery</span>
                </div>
                <div className="mt-3 space-y-2.5 text-zinc-400">
                  {['Reporting engines', 'CRM workflows', 'End-to-end quality checks'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + index * 0.12 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={14} className="shrink-0 text-emerald-300" aria-hidden="true" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-zinc-500">status: <span className="text-emerald-300">ready to build</span></p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
