// ── Site content ──────────────────────────────────────────────
// Edit everything here. Projects marked "PLACEHOLDER" are
// example entries — replace them with your real work.

export type ProjectStatus = 'live' | 'beta' | 'wip' | 'planned'

export interface Project {
  title: string
  description: string
  tech: string[]
  status: ProjectStatus
  github?: string
  live?: string
}

export interface Tool {
  name: string
  description: string
  type: 'cli' | 'web' | 'api' | 'desktop'
}

export interface DevlogEntry {
  date: string
  title: string
}

export interface Writeup {
  date: string
  tags: string[]
  title: string
  excerpt: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Education {
  school: string
  degree: string
  year: string
}

export interface Course {
  name: string
  provider: string
  year?: string
}

export const personal = {
  name: 'Ken David',
  handle: 'keyciel',
  title: 'IT Student',
  email: 'kendavid.delapenia@gmail.com',
  summary:
    'IT student at Bulacan State University. I build web apps with React, TypeScript, and Node.js, and I log what I learn here. Looking for an internship where I can ship real software and learn from engineers who have done it.',
  social: {
    github: 'https://github.com/keyciel',
    linkedin: 'https://linkedin.com/in/kendp',
  },
}

export const projects: Project[] = [
  {
    title: 'This Portfolio',
    description:
      'A public lab where I log my projects, tools, and devlog. Every project is an experiment record — status, stack, and what it does.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'live',
    github: 'https://github.com/keyciel/portfolio',
  },
  // PLACEHOLDER — replace with a real project
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather app with 7-day forecasts, animated maps, and location search powered by the OpenWeather API.',
    tech: ['Next.js', 'D3.js', 'OpenWeather API'],
    status: 'live',
  },
  // PLACEHOLDER
  {
    title: 'Task Board',
    description:
      'Real-time collaborative boards with drag-and-drop, team workspaces, and instant updates via WebSockets.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    status: 'beta',
  },
  // PLACEHOLDER
  {
    title: 'Pomodoro Timer',
    description:
      'Focus timer with session tracking, ambient sounds, and daily productivity stats stored in localStorage.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'wip',
  },
  // PLACEHOLDER
  {
    title: 'URL Shortener',
    description:
      'Short link service with click analytics, QR code generation, and a rate-limited API built with Express.',
    tech: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    status: 'wip',
  },
  // PLACEHOLDER
  {
    title: 'Dev Blog Platform',
    description:
      'Markdown-based blog with syntax highlighting, tag filtering, and RSS feed generation.',
    tech: ['Next.js', 'MDX', 'Prisma', 'SQLite'],
    status: 'planned',
  },
]

// PLACEHOLDER tools — replace with scripts or utilities you actually use
export const tools: Tool[] = [
  {
    name: 'Notes Sync',
    description: 'Sync markdown notes to a git repo from the terminal.',
    type: 'cli',
  },
  {
    name: 'Project Scaffold',
    description: 'Scaffold a new Next.js + Tailwind project with sensible defaults.',
    type: 'cli',
  },
  {
    name: 'Request Runner',
    description: 'A tiny browser-based HTTP client for testing APIs.',
    type: 'web',
  },
]

// PLACEHOLDER devlog entries — replace with your own notes
export const devlog: DevlogEntry[] = [
  { date: '2026-08-02', title: 'Shipped the redesigned portfolio' },
  { date: '2026-07-25', title: 'Deploying to Vercel — the 20-minute loop' },
  { date: '2026-07-18', title: 'First look at React Server Components' },
  { date: '2026-07-10', title: 'Why I am building in public' },
]

// PLACEHOLDER write-up
export const writeup: Writeup = {
  date: '2026-07-30',
  tags: ['meta', 'process'],
  title: 'Building in public: notes from month one',
  excerpt:
    'A month into logging my work in public — what changed about how I pick projects, finish them, and write about the boring parts.',
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma', 'Vercel'],
  },
]

export const education: Education[] = [
  {
    school: 'Bulacan State University',
    degree: 'BS Information Technology',
    year: '2023 – 2027',
  },
]

export const coursework: Course[] = [
  { name: 'Data Structures & Algorithms', provider: 'University' },
  { name: 'Operating Systems', provider: 'University' },
  { name: 'Database Systems', provider: 'University' },
  { name: 'Web Development', provider: 'University' },
  { name: 'Machine Learning Foundations', provider: 'Coursera' },
  { name: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', year: '2025' },
]
