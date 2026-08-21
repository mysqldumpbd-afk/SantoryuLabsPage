import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { IconSwordsThree } from './icons'

const LINKS = [
  { href: '#score7', label: 'Score 7' },
  { href: '#bitacora', label: 'Bitácora' },
  { href: '#manifiesto', label: 'Manifiesto' },
  { href: '#faq', label: 'Preguntas' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`clay mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 transition-shadow sm:px-6 ${
          scrolled ? '' : 'opacity-95'
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="clay-btn flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br from-violet-600/60 to-ink text-lime">
            <IconSwordsThree className="h-6 w-6" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-sand sm:text-xl">
            Santoryu Labs
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/5 hover:text-lime"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#newsletter"
          className="clay-btn hidden shrink-0 bg-lime px-5 py-2.5 text-sm font-semibold text-ink md:inline-block"
        >
          Sumarme a la mesa
        </a>

        <button
          type="button"
          className="clay-btn flex h-11 w-11 items-center justify-center text-sand md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="clay mx-auto mt-2 flex max-w-6xl flex-col gap-1 p-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="clay-btn mt-1 bg-lime px-4 py-3 text-center text-sm font-semibold text-ink"
          >
            Sumarme a la mesa
          </a>
        </div>
      )}
    </header>
  )
}
