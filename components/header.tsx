'use client'

import { useEffect, useState } from 'react'

const tabs = [
  { id: 'top', file: 'readme.md' },
  { id: 'building', file: 'projects.tsx' },
  { id: 'tools', file: 'tools.ts' },
  { id: 'devlog', file: 'devlog.md' },
  { id: 'writeup', file: 'writeup.md' },
  { id: 'toolbox', file: 'toolbox.ts' },
  { id: 'contact', file: 'contact.md' },
]

const tabIds = tabs.map((tab) => tab.id)

export function Header() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 160
      let current = 'top'
      for (const id of tabIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) {
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        {/* title bar */}
        <div className="flex h-11 items-center justify-between border-b border-border px-4 sm:px-6">
          <p className="truncate font-mono text-xs text-muted">
            <span className="text-foreground">keyciel</span>
            <span className="text-accent">@</span>lab
            <span className="hidden sm:inline">: ~/portfolio</span>
          </p>
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden className="led live" />
            open
          </a>
        </div>
        {/* tab bar */}
        <nav
          className="flex overflow-x-auto border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Sections"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`-mb-px flex h-9 shrink-0 items-center border-b-2 px-4 font-mono text-xs transition-colors ${
                  isActive
                    ? 'border-accent text-foreground'
                    : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                {tab.file}
              </a>
            )
          })}
        </nav>
      </header>

      {/* explorer sidebar — desktop only */}
      <aside className="fixed bottom-0 left-0 top-[82px] z-40 hidden w-56 flex-col border-r border-border bg-surface/40 lg:flex">
        <div className="border-b border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
          explorer
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <p className="flex items-center gap-1.5 px-4 pb-2 font-mono text-[11px] text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-faint"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            keyciel-portfolio
          </p>
          <nav className="flex flex-col" aria-label="Sidebar sections">
            {tabs.map((tab) => {
              const isActive = active === tab.id
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`flex items-center gap-2.5 px-4 py-1.5 font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-foreground/[0.06] text-foreground'
                      : 'text-muted hover:bg-foreground/[0.03] hover:text-foreground'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      tab.file.endsWith('.md') ? 'bg-accent' : 'bg-faint'
                    }`}
                  />
                  {tab.file}
                </a>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
