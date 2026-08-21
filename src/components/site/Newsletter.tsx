import { IconArrowUpRight, IconDice } from './icons'

export function Newsletter() {
  return (
    <section id="newsletter" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="clay-edge clay relative mx-auto max-w-5xl overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="clay-chip mx-auto flex h-16 w-16 items-center justify-center bg-gold/15 text-gold">
          <IconDice className="h-8 w-8" />
        </div>

        <h2 className="mt-6 font-display text-3xl font-semibold text-sand sm:text-4xl">
          Sumate a la primera mesa
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/75">
          Score 7 sigue creciendo con los grupos que ya la prueban. Escribinos y te contamos
          cómo sumar al tuyo — sin formularios eternos, sin spam.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hola@santoryulabs.com?subject=Quiero%20sumarme%20a%20Score%207"
            className="clay-btn inline-flex items-center gap-2 bg-lime px-7 py-3.5 text-sm font-semibold text-ink"
          >
            Escribir a hola@santoryulabs.com
            <IconArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#score7"
            className="clay-btn inline-flex items-center gap-2 bg-white/5 px-7 py-3.5 text-sm font-semibold text-sand"
          >
            Ver features de Score 7
          </a>
        </div>
      </div>
    </section>
  )
}
