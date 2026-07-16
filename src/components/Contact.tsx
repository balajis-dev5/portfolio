import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: Github, label: 'GitHub', value: `github.com/${profile.githubUsername}`, href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
]

export default function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Let's talk">
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            I'm open to {profile.openTo}. The fastest way to reach me is email — I usually reply
            within a day.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, i) => {
            const Icon = item.icon
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            )
            return (
              <Reveal key={item.label} delay={i * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`}
            className="btn-gradient mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white"
          >
            <Mail size={16} aria-hidden="true" />
            Say hello
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
