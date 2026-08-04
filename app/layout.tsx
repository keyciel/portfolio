import type { Metadata } from 'next'
import { Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@/components/header'
import './globals.css'

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ken David — Building in Public',
    template: '%s · Ken David',
  },
  description:
    'IT student at Bulacan State University building web apps with React, TypeScript, and Node.js. A public lab of projects, tools, and devlog entries.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${plexMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        <div className="lg:pl-56">{children}</div>
      </body>
    </html>
  )
}
