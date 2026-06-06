export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Course {
  name: string
  provider: string
  year?: string
}

export const personal = {
  name: "Ken David Dela Peña",
  title: "IT Student",
  email: "kendavid.delapenia@email.com",
  summary:
    "IT student with a passion for building web applications. Experienced in React, TypeScript, and Node.js through personal projects and coursework. Seeking an internship to apply skills in a real-world environment and learn from experienced engineers.",
  social: {
    github: "https://github.com/keyciel",
    linkedin: "https://linkedin.com/in/kendp",
  },
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Linux", "VS Code", "Figma", "Vercel"],
  },
]

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with product listings, cart management, Stripe checkout, and an admin dashboard for inventory control.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/alexchen/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative boards with drag-and-drop, team workspaces, and instant updates via WebSockets.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/alexchen/taskflow",
    live: "https://taskflow.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather app with 7-day forecasts, animated maps, and location search powered by OpenWeather API.",
    tech: ["Next.js", "D3.js", "OpenWeather API"],
    github: "https://github.com/alexchen/weather",
  },
  {
    title: "Dev Blog Platform",
    description:
      "Markdown-based blog with syntax highlighting, tag filtering, RSS feed generation, and a minimal admin CMS.",
    tech: ["Next.js", "MDX", "Prisma", "SQLite"],
    github: "https://github.com/alexchen/devblog",
  },
  {
    title: "Pomodoro Timer",
    description:
      "Focus timer with session tracking, ambient sounds, and daily productivity stats stored in localStorage.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/alexchen/pomodoro",
    live: "https://pomodoro-demo.vercel.app",
  },
  {
    title: "URL Shortener",
    description:
      "Short link service with click analytics, QR code generation, and rate-limited API built with Express.",
    tech: ["Node.js", "Express", "Redis", "PostgreSQL"],
    github: "https://github.com/alexchen/urlshort",
  },
]

export interface Education {
  school: string
  degree: string
  year: string
}

export const education: Education[] = [
  { school: "Bulacan State University", degree: "BS Information Technology", year: "2023 – 2027" },
]

export const coursework: Course[] = [
  { name: "Data Structures & Algorithms", provider: "University" },
  { name: "Operating Systems", provider: "University" },
  { name: "Database Systems", provider: "University" },
  { name: "Web Development", provider: "University" },
  { name: "Machine Learning Foundations", provider: "Coursera" },
  { name: "AWS Cloud Practitioner", provider: "Amazon Web Services", year: "2025" },
]
