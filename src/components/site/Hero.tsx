import { IconArrowUpRight } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="clay-chip inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Laboratorio de juegos de mesa
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-sand sm:text-5xl lg:text-6xl">
            Antes. Durante.{' '}
            <span className="text-gradient-clay">Después.</span>
            <br />
            Tres tiempos, una sola mesa.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Santoryu Labs construye herramientas que acompañan tu grupo de juego en los tres
            momentos de la partida: la preparación, el turno a turno y la lectura de lo que
            quedó sobre el tablero. Empezamos por algo simple y necesario — llevar la cuenta,
            bien.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#score7"
              className="clay-btn inline-flex items-center gap-2 bg-lime px-6 py-3.5 text-sm font-semibold text-ink"
            >
              Conocer Score 7
              <IconArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#bitacora"
              className="clay-btn inline-flex items-center gap-2 bg-white/5 px-6 py-3.5 text-sm font-semibold text-sand"
            >
              Leer la bitácora del tablero
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/60">
            <span>Sin conexión, sin fricción</span>
            <span className="hidden h-1 w-1 self-center rounded-full bg-foreground/30 sm:inline-block" />
            <span>Un score tracker que aprende contigo</span>
            <span className="hidden h-1 w-1 self-center rounded-full bg-foreground/30 sm:inline-block" />
            <span>Más juegos, en camino</span>
          </div>
        </div>

        {/* Panel visual abstracto — mockup de Score 7 */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="clay-edge clay relative rotate-1 p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-semibold text-sand">Ronda 4 de 6</p>
                <p className="text-xs text-foreground/55">Mesa · &ldquo;Los del jueves&rdquo;</p>
              </div>
              <span className="clay-chip bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
                En vivo
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { name: 'Mari', score: 47, tone: 'bg-lime', w: '86%' },
                { name: 'Kenji', score: 41, tone: 'bg-cyan', w: '75%' },
                { name: 'Vale', score: 33, tone: 'bg-gold', w: '60%' },
                { name: 'Dani', score: 28, tone: 'bg-violet-400', w: '50%' },
              ].map((p) => (
                <div key={p.name} className="clay-inset flex items-center gap-3 p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-semibold text-sand">
                    {p.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-xs text-foreground/70">
                      <span className="font-medium text-sand">{p.name}</span>
                      <span className="font-display font-semibold text-sand">{p.score}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/30">
                      <div className={`h-full rounded-full ${p.tone}`} style={{ width: p.w }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 clay-inset flex items-center justify-between p-3.5">
              <p className="text-xs text-foreground/60">
                Punto débil detectado: <span className="text-gold">cierre de ronda</span>
              </p>
              <span className="text-xs font-semibold text-cyan">Dani ↑</span>
            </div>
          </div>

          <div className="clay-chip absolute -left-6 -top-6 hidden h-16 w-16 rotate-[-8deg] items-center justify-center bg-gold/20 text-2xl sm:flex">
            🎲
          </div>
          <div className="clay-chip absolute -bottom-5 -right-4 hidden h-20 w-20 rotate-[10deg] items-center justify-center bg-cyan/15 text-3xl sm:flex">
            ♟️
          </div>
        </div>
      </div>
    </section>
  )
}
