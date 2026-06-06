'use client'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg border-b border-border">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-heading text-sm font-bold text-foreground tracking-tight">
          KD
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
