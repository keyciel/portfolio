import { personal, skills, projects, education, coursework } from '@/lib/content'

const categoryColor: Record<string, string> = {
  Languages: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  Frontend: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  Backend: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  Tools: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
}

const techColor: Record<string, string> = {
  'Next.js': 'bg-foreground/5 text-foreground/70 border-foreground/10',
  TypeScript: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  Stripe: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  PostgreSQL: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  React: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'Node.js': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Socket.io': 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20',
  MongoDB: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  'D3.js': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'OpenWeather API': 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  MDX: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Prisma: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
  SQLite: 'bg-sky-700/10 text-sky-700 dark:text-sky-300 border-sky-700/20',
  Redux: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Redis: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-16 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14">
          <h1 className="font-heading text-5xl font-bold text-foreground tracking-tight mb-2">
            {personal.name}
          </h1>
          <p className="text-lg text-muted mb-5">{personal.title}</p>
          <p className="text-foreground/75 max-w-xl leading-relaxed mb-6">
            {personal.summary}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-foreground hover:border-accent/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-foreground hover:border-accent/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((cat) => (
              <div
                key={cat.name}
                className={`p-4 rounded-xl border ${categoryColor[cat.name] || 'bg-muted/10 text-foreground border-border'}`}
              >
                <p className="text-xs font-medium uppercase tracking-wider mb-2 opacity-70">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group p-5 rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-foreground">
                    {p.title}
                  </h3>
                  <div className="flex gap-3 shrink-0 ml-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors">
                        Source
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors">
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] px-2 py-0.5 rounded-md border ${techColor[t] || 'bg-muted/10 text-muted border-border'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((e) => (
              <div
                key={e.school}
                className="p-3 rounded-lg border border-border"
              >
                <p className="text-sm font-medium text-foreground">{e.degree}</p>
                <p className="text-xs text-muted">{e.school} · {e.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {coursework.filter((c) => c.provider !== "University").map((c) => (
              <div
                key={c.name}
                className="p-3 rounded-lg border border-border"
              >
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted">
                  {c.provider}
                  {c.year && <span className="text-muted/50"> · {c.year}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
