import { motion, useScroll, useSpring } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
      {/* Reading progress along the top edge */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400"
        style={{ scaleX: progress }}
      />
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white shadow-md shadow-indigo-600/30">
            B
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="btn-gradient ml-2 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-white"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-1 rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-lg p-2 text-zinc-600 dark:text-zinc-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-lg p-2 text-zinc-600 dark:text-zinc-400"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-5 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white"
          >
            <Download size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
