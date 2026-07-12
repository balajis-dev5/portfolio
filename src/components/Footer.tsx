import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-sm text-zinc-500 sm:flex-row sm:px-8 dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React 19, TypeScript & Tailwind
          CSS.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  )
}
