import {
  personal,
  projects,
  tools,
  devlog,
  writeup,
  skills,
  education,
  coursework,
} from '@/lib/content'
import type { ProjectStatus } from '@/lib/content'

const statusMeta: Record<ProjectStatus, { label: string; dot: string }> = {
  live: { label: 'live', dot: 'led lit' },
  beta: { label: 'beta', dot: 'led lit' },
  wip: { label: 'wip', dot: 'led dim' },
  planned: { label: 'planned', dot: 'led' },
}

function SectionLabel({ file, note }: { file: string; note?: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
        {file}
      </h2>
      {note && (
        <span className="hidden font-mono text-[11px] text-faint sm:inline">
          — {note}
        </span>
      )}
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  )
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${personal.email}`}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition hover:brightness-110"
      >
        <MailIcon />
        Email me
      </a>
      <a
        href={personal.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
      >
        <GitHubIcon />
        GitHub
      </a>
      <a
        href={personal.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
      >
        <LinkedInIcon />
        LinkedIn
      </a>
    </div>
  )
}

export default function Home() {
  const certifications = coursework
    .filter((course) => course.provider !== 'University')
    .map((course) => (course.year ? `${course.name} (${course.year})` : course.name))
    .join(' · ')

  return (
    <main id="top" className="mx-auto max-w-3xl px-6 pb-24">
      {/* hero */}
      <header className="pb-16 pt-32 sm:pt-40">
        <p className="rise d1 mb-5 font-mono text-xs text-faint">
          ~/portfolio — IT student · building in public
        </p>
        <h1 className="rise d2 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {personal.name}
        </h1>
        <p className="rise d3 mt-5 flex items-center gap-2 font-mono text-xs text-muted">
          <span aria-hidden className="led live" />
          open for internships — summer 2026
        </p>
        <p className="rise d3 mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          {personal.summary}
        </p>
        <div className="rise d4 mt-8">
          <SocialLinks />
        </div>
      </header>

      {/* now building */}
      <section id="building" className="scroll-mt-24 pb-16">
        <SectionLabel file="projects.tsx" note="now building" />
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => {
            const status = statusMeta[project.status]
            return (
              <article
                key={project.title}
                className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span aria-hidden className={status.dot} />
                  <span className="font-mono text-[11px] text-faint">
                    EXP-{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="truncate text-[15px] font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="flex-1" />
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-[11px] text-muted transition-colors hover:text-accent"
                    >
                      source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-[11px] text-muted transition-colors hover:text-accent"
                    >
                      live
                    </a>
                  )}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* tools */}
      <section id="tools" className="scroll-mt-24 pb-16">
        <SectionLabel file="tools.ts" note="small utilities" />
        <ul className="divide-y divide-border border-y border-border">
          {tools.map((tool) => (
            <li
              key={tool.name}
              className="group flex items-center justify-between gap-4 py-4"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
                <p className="mt-0.5 text-sm text-muted">{tool.description}</p>
              </div>
              <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors group-hover:text-accent">
                {tool.type}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* devlog */}
      <section id="devlog" className="scroll-mt-24 pb-16">
        <SectionLabel file="devlog.md" note="recent entries" />
        <ul className="divide-y divide-border border-y border-border">
          {devlog.map((entry) => (
            <li key={entry.date} className="group flex items-baseline gap-5 py-4">
              <span className="w-24 shrink-0 font-mono text-xs text-faint">
                {entry.date}
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {entry.title}
              </span>
              <span
                aria-hidden
                className="ml-auto shrink-0 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100"
              >
                ↗
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* latest write-up */}
      <section id="writeup" className="scroll-mt-24 pb-16">
        <SectionLabel file="writeup.md" note="latest" />
        <article className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
          <p className="mb-3 font-mono text-[11px] text-faint">
            {writeup.date} · {writeup.tags.map((tag) => `#${tag}`).join(' ')}
          </p>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {writeup.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{writeup.excerpt}</p>
        </article>
      </section>

      {/* toolbox */}
      <section id="toolbox" className="scroll-mt-24 pb-16">
        <SectionLabel file="toolbox.ts" note="skills & education" />
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {category.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {education[0].degree}
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {education[0].school} · {education[0].year}
            </p>
          </div>
          <p className="font-mono text-[11px] text-faint">{certifications}</p>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-24 border-t border-border pt-16">
        <SectionLabel file="contact.md" note="get in touch" />
        <h2 className="text-4xl font-semibold tracking-tight text-foreground">
          Let&rsquo;s build something.
        </h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          I&rsquo;m looking for an internship where I can ship real software and
          learn from people who&rsquo;ve done it. If that sounds like your team,
          say hi.
        </p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </section>
    </main>
  )
}
