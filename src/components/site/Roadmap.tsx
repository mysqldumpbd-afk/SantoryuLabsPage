const STAGES = [
  {
    status: 'Disponible',
    tone: 'bg-lime/15 text-lime',
    title: 'Score 7',
    body: 'El score tracker que abre el laboratorio. Universal, editable, listo para cualquier juego de tu mesa.',
  },
  {
    status: 'En el banco de pruebas',
    tone: 'bg-cyan/15 text-cyan',
    title: 'Perfiles de juego',
    body: 'Plantillas dedicadas para títulos específicos, con las métricas propias de cada uno — más allá del puntaje final.',
  },
  {
    status: 'Boceto',
    tone: 'bg-gold/15 text-gold',
    title: 'Interfaces por juego',
    body: 'Pantallas pensadas para acompañar partidas concretas mientras se juegan, no solo para anotar el resultado.',
  },
]

export function Roadmap() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Hoja de ruta
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-sand sm:text-4xl">
              Un laboratorio recién abierto
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/70">
            Hoy integramos un solo juego a fondo antes que muchos a medias. Score 7 es el primer
            paso; el resto de la mesa se va sumando con el mismo cuidado.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STAGES.map((s) => (
            <div key={s.title} className="clay p-7">
              <span className={`clay-chip inline-block px-3 py-1 text-xs font-semibold ${s.tone}`}>
                {s.status}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-sand">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
