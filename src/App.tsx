import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import GitHubSection from './components/GitHubSection'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Section from './components/Section'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Timeline from './components/Timeline'
import { profile } from './data/profile'
import { useTheme } from './hooks/useTheme'
import { Download } from 'lucide-react'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <LoadingScreen />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubSection />
        <Section id="resume" kicker="Resume" title="Prefer a PDF?">
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Everything on this page — plus the details recruiters need — in a single-page,
            ATS-friendly document.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            <Download size={16} aria-hidden="true" />
            Download resume
          </a>
        </Section>
        <Timeline />
        <Achievements />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
