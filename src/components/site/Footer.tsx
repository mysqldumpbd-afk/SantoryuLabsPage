import { IconSwordsThree } from './icons'

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6">
      <div className="clay mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-3">
              <span className="clay-btn flex h-11 w-11 items-center justify-center bg-gradient-to-br from-violet-600/60 to-ink text-lime">
                <IconSwordsThree className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-semibold text-sand">Santoryu Labs</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/65">
              Herramientas para vivir tus juegos de mesa antes, durante y después de la partida.
              Empezamos por Score 7 — el resto de la mesa se va sumando.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-sand">Explorar</p>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/65">
              <li><a href="#score7" className="hover:text-lime">Score 7</a></li>
              <li><a href="#bitacora" className="hover:text-lime">Bitácora del tablero</a></li>
              <li><a href="#manifiesto" className="hover:text-lime">Manifiesto</a></li>
              <li><a href="#faq" className="hover:text-lime">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-sand">Contacto</p>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/65">
              <li>
                <a href="mailto:contactus@santoryulabs.com" className="hover:text-lime">
                  contactus@santoryulabs.com
                </a>
              </li>
              <li className="text-foreground/45">santoryulabs.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Santoryu Labs. Antes, durante y después de la partida.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Hecho para mesas que se juegan más de una vez.</span>
            <span className="text-foreground/25">·</span>
            <a href="/privacy-cosmic-shutter.html" className="hover:text-lime">
              Aviso de privacidad — Cosmic Shutter
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
