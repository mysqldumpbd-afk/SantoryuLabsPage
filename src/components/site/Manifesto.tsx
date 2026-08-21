import { IconSwordsThree } from './icons'

export function Manifesto() {
  return (
    <section id="manifiesto" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="clay-edge clay relative mx-auto max-w-5xl overflow-hidden px-6 py-14 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="clay-chip mx-auto flex h-14 w-14 items-center justify-center bg-white/5 text-lime">
            <IconSwordsThree className="h-7 w-7" />
          </span>

          <h2 className="mt-6 font-display text-2xl font-semibold leading-snug text-sand sm:text-3xl">
            Ninguna partida debería terminar en el olvido.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
            Santoryu Labs nace de una convicción simple: se juega mejor cuando se recuerda cómo
            se jugó. Igual que quien empuña tres aceros y aprende a leer la distancia con el
            cuerpo antes que con la mente, creemos en herramientas que caminan con vos antes de
            sentarte a la mesa, permanecen a tu lado mientras las fichas se mueven, y se quedan
            después de guardar la caja.
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            Por eso guardamos cada partida: para que sea también una lección aprendida, y cada
            punto débil, un filo más por pulir.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground/55">
            <span className="h-px w-10 bg-foreground/20" />
            Santoryu Labs
            <span className="h-px w-10 bg-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
