/**
 * Single source of truth for all portfolio content.
 * Identity values are filled (github: balajis-dev5, linkedin: balaji-s-72245b244).
 * Only the testimonials below still contain [[placeholders]] — the section
 * stays hidden until real quotes replace them.
 */

export interface NavLink {
  label: string
  href: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceModule {
  name: string
  bullets: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  summary: string
  modules: ExperienceModule[]
}

export interface ProjectImage {
  src: string
  caption: string
}

export interface Project {
  name: string
  description: string
  highlights: string[]
  tags: string[]
  /** Omit until the repo is actually public — a dead link is worse than a badge. */
  github?: string
  /** True while the public repo is still docs/roadmap-stage — keeps the "In development" badge visible even with a repo link. */
  inDevelopment?: boolean
  /**
   * Card cover, served from /public. Real app screenshot when the app runs;
   * designed cover art (covers/*.svg) for docs/roadmap-stage projects.
   */
  image?: string
  /** Extra captioned screenshots shown as a gallery in the project modal. */
  images?: ProjectImage[]
  live?: string
  featured: boolean
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface Achievement {
  title: string
  detail: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface EducationItem {
  degree: string
  institution: string
  year: string
  note?: string
}

export const profile = {
  name: 'Balaji S',
  firstName: 'Balaji',
  role: 'Full Stack Developer',
  stack: 'Laravel · React · TypeScript · PostgreSQL',
  tagline:
    'I build data-heavy product features — reporting engines, dashboards, and CRMs — that business teams rely on every day.',
  location: 'Madurai, Tamil Nadu, India',
  email: 'barath19231@gmail.com',
  phone: '+91 88381 87342',
  githubUsername: 'balajis-dev5',
  github: 'https://github.com/balajis-dev5',
  linkedin: 'https://www.linkedin.com/in/balaji-s-72245b244',
  resumeUrl: '/Balaji_S_Full_Stack_Developer.pdf',
  yearsOfExperience: '2+',
  openTo: 'Full Stack / Backend roles — product companies & MNCs',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '2+', label: 'Years shipping product features' },
  { value: '4', label: 'Major CRM modules built' },
  { value: '10+', label: 'Chart types in my report engine' },
]

export const about = {
  paragraphs: [
    `I'm a full stack developer at a CRM product company, where I own one of the product's most complex surfaces: the Advanced Reporting module. That means everything from designing schemas and compiling user-defined reports into optimized SQL, to chart rendering, scheduled email/WhatsApp delivery, and exports that stay memory-stable over very large datasets.`,
    `I work across the stack every day — Laravel and MySQL/PostgreSQL on the backend, and React 19 with TypeScript on the frontend, where I'm helping rebuild the product as a modern SPA. I've also built Google Maps integrations (territories, clustering, nearby search) and a real-estate unit inventory module.`,
    `What I enjoy most is the intersection of data and product: taking a vague business question ("why did lead flow drop last quarter?") and shipping the tool that answers it.`,
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: [
      'PHP 8.x',
      'Laravel 10–12',
      'REST APIs',
      'JWT Auth',
      'Eloquent ORM',
      'Livewire',
      'Queues & Scheduler',
      'Cron Jobs',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'React Router',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'Chart.js / ApexCharts',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MySQL',
      'PostgreSQL',
      'Schema design',
      'Indexing & EXPLAIN',
      'Query optimization',
      'Large datasets',
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      'Git & GitHub',
      'GitFlow',
      'Postman',
      'Docker (basics)',
      'ESLint / Prettier',
      'Agile / Scrum',
      'Code review',
    ],
  },
]

export const experience: Experience[] = [
  {
    title: 'Software Developer (Full Stack)',
    company: 'RSoft Technologies Pvt Ltd',
    period: 'Jun 2024 — Present',
    summary:
      'Enterprise CRM product for the real estate domain, used daily by sales and marketing teams across client businesses.',
    modules: [
      {
        name: 'Advanced Reports — module owner',
        bullets: [
          'Dynamic report builder: detail, summary and matrix reports with multi-level group-by and aggregate functions over any CRM module.',
          'Filter engine with condition groups, saved filters, relative-date ranges and picklist-change tracking.',
          'Chart builder with 10+ chart types, drill-down, and dashboard widget embedding.',
          'Scheduled delivery (daily/weekly/monthly) by email and WhatsApp via queues and cron.',
          'Excel/CSV/PDF exports over large datasets using chunked, streamed queries.',
          'MySQL optimization: composite indexes, eager loading and query restructuring on high-volume tables.',
        ],
      },
      {
        name: 'CRM Map module',
        bullets: [
          'Google Maps integration: property pins, customer locations, marker clustering, nearby search, sales territories, distance calculations and live filters.',
        ],
      },
      {
        name: 'Unit Management module',
        bullets: [
          'Real-estate inventory: units, availability, booking status, pricing, floor plans and sales tracking.',
        ],
      },
      {
        name: 'Next-generation CRM (React + Laravel rebuild)',
        bullets: [
          'React 19 + TypeScript + Vite SPA over a Laravel 12 + PostgreSQL REST API with JWT auth.',
          'Delivered: analytics dashboard, report builder UI, lead/customer/follow-up management, notifications, responsive UI.',
        ],
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Advanced Report Builder',
    description:
      'Open-source reporting engine, built in public in vertical slices — five shipped. A Laravel 12 REST API compiles JSON report definitions into safe, whitelist-validated SQL; a React 19 + TypeScript builder composes detail, summary and matrix (pivot) reports with live preview — then exports, shares and delivers them on a schedule.',
    highlights: [
      'Report definition → SQL compiler with a whitelist security boundary, feature-tested against injection',
      'Drag & drop builder with live preview, filters, saved reports and a Table/Chart toggle',
      'Dependency-free SVG charts (bar / line / donut) plus live dashboard widgets',
      'CSV / Excel / PDF exports of live previews and saved reports — the XLSX writer is hand-built, no heavyweight deps',
      'Per-user sharing (view/edit) enforced server-side; scheduled deliveries with run-now and a stored history',
    ],
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind', 'JWT'],
    github: 'https://github.com/balajis-dev5/advanced-report-builder',
    live: 'https://arb-web-balaji.onrender.com',
    image: '/projects/arb-dashboard.png',
    images: [
      {
        src: '/projects/arb-export.png',
        caption: 'The builder: live summary result with the CSV / Excel / PDF export menu open',
      },
      {
        src: '/projects/arb-share.png',
        caption: 'Sharing a report — per-user view/edit grants, managed by the owner',
      },
      {
        src: '/projects/arb-schedule.png',
        caption: 'Scheduled deliveries: daily/weekly/monthly, with an on-demand run',
      },
      {
        src: '/projects/arb-reports.png',
        caption: 'Report library with type badges and one-click export per report',
      },
    ],
    featured: true,
  },
  {
    name: 'Modern CRM',
    description:
      'Full-stack CRM: kanban lead pipeline with optimistic drag-and-drop, customers, follow-up queues and an analytics dashboard. Typed end-to-end — React 19 + TypeScript strict on the client, Laravel 13 + JWT on the API.',
    highlights: [
      'JWT auth with refresh-token rotation and role-based access',
      'Kanban board with optimistic updates and stage history',
      'Lead-to-customer conversion flow with follow-up scheduling',
      '30 PHPUnit feature tests, CI on every push',
    ],
    tags: ['React 19', 'TypeScript', 'Laravel 13', 'JWT', 'Tailwind v4'],
    github: 'https://github.com/balajis-dev5/modern-crm',
    live: 'https://crm-web-balaji.onrender.com',
    image: '/projects/covers/modern-crm.svg',
    featured: true,
  },
  {
    name: 'Property Management System',
    description:
      'Real-estate inventory and bookings: a hold → confirm → complete state machine with 48-hour hold expiry, an availability grid with floor-rise pricing, and a Leaflet map of projects across the city.',
    highlights: [
      'Atomic hold guard — a unit can never be double-booked, proven by a race-condition test',
      'Price snapshotting: a booking keeps the price it was held at',
      '27 PHPUnit tests including state-machine and hold-expiry coverage',
    ],
    tags: ['Laravel 13', 'React 19', 'TypeScript', 'Leaflet'],
    github: 'https://github.com/balajis-dev5/property-management-system',
    live: 'https://pms-web-balaji.onrender.com',
    image: '/projects/covers/property-management.svg',
    featured: false,
  },
  {
    name: 'React Admin Dashboard',
    description:
      'Production-grade admin template: command-palette app shell, URL-synced data tables with CSV export, and hand-rolled SVG charts on a colorblind-validated palette — no chart library.',
    highlights: [
      'One reusable DataTable<T>: search, filters, sort, pagination — all state in the URL, so filtered views are shareable links',
      'Line/bar/donut charts in plain SVG with crosshair tooltips; separate light/dark palette steps, CVD-checked',
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind v4', 'React Router'],
    github: 'https://github.com/balajis-dev5/react-admin-dashboard',
    live: 'https://balajis-dev5.github.io/react-admin-dashboard/',
    image: '/projects/covers/react-admin-dashboard.svg',
    featured: true,
  },
  {
    name: 'React UI Library',
    description:
      '14 typed, accessible components — dialog with focus trap, roving-tabindex tabs, toasts, form controls — plus a live docs site with runnable examples. Zero runtime dependencies.',
    highlights: [
      'Keyboard and a11y behavior locked in by a Vitest + Testing Library suite',
      'Docs deploy to GitHub Pages on every push, after tests pass',
    ],
    tags: ['React 19', 'TypeScript', 'a11y', 'Vitest'],
    github: 'https://github.com/balajis-dev5/react-ui-library',
    live: 'https://balajis-dev5.github.io/react-ui-library/',
    image: '/projects/covers/react-ui-library.svg',
    featured: false,
  },
  {
    name: 'Laravel API Template',
    description:
      'Opinionated Laravel 13 REST API starter: hand-rolled JWT (HS256) with refresh-token rotation and reuse detection, RBAC, form requests, API resources, rate limiting, Docker and CI. The base for my CRM and PMS APIs.',
    highlights: [
      'Refresh-token reuse is detected and revokes the whole token family',
      'PHPUnit suite covers the full auth lifecycle; Pint-clean, CI on every push',
    ],
    tags: ['Laravel 13', 'PHP 8.4', 'JWT', 'Docker'],
    github: 'https://github.com/balajis-dev5/laravel-api-template',
    image: '/projects/covers/laravel-api-template.svg',
    featured: false,
  },
]

export const timeline: TimelineItem[] = [
  {
    year: '2022',
    title: 'B.Sc. Computer Science',
    description: 'Graduated from Vivekananda College, Madurai Kamaraj University.',
  },
  {
    year: '2024',
    title: 'MCA with Distinction',
    description: 'Kongu Arts and Science College, Bharathiar University.',
  },
  {
    year: '2024',
    title: 'Joined CRM product company',
    description: 'Started as a Laravel developer on an enterprise real-estate CRM.',
  },
  {
    year: '2025',
    title: 'Owned the Advanced Reports module',
    description:
      'Became the core developer for reporting: builder, charts, scheduling, exports, permissions.',
  },
  {
    year: '2026',
    title: 'Full stack on the next-gen CRM',
    description:
      'Building the React 19 + TypeScript + Laravel 12 + PostgreSQL rebuild of the product.',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Report module ownership',
    detail:
      'Trusted with end-to-end ownership of the most data-intensive module in the product within my first year.',
  },
  {
    title: 'First Prize — Technical Paper Presentations',
    detail: 'National and inter-college level competitions.',
  },
  {
    title: 'Department Rank Holder',
    detail: 'Recognized on College Day for academic performance.',
  },
]

/** Placeholder content — replace with real quotes (ask a lead/senior at work, or colleagues). */
export const testimonials: Testimonial[] = [
  {
    quote:
      '[[Placeholder — e.g. "Balaji took full ownership of our reporting module and consistently shipped features our customers asked for."]]',
    author: '[[Name]]',
    role: '[[Title, Company]]',
  },
  {
    quote: '[[Placeholder — a second short quote from a colleague or mentor.]]',
    author: '[[Name]]',
    role: '[[Title, Company]]',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'MCA — Master of Computer Applications',
    institution: 'Kongu Arts and Science College, Bharathiar University',
    year: '2024',
    note: 'Distinction',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Vivekananda College, Madurai Kamaraj University',
    year: '2022',
  },
]

export const certifications = [
  'JavaScript — Great Learning',
  'Software Testing — NPTEL',
  'Certificate Course — IGNOU',
]
