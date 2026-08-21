import { IconAfter, IconBefore, IconDuring } from './icons'

const PILLARS = [
  {
    icon: IconBefore,
    tone: 'text-lime',
    bg: 'bg-lime/10',
    title: 'Antes',
    body:
      'Prepará la mesa con los datos de la última vez: quién arrastra una racha, qué estrategia ya se agotó y qué grupo quiere revancha.',
  },
  {
    icon: IconDuring,
    tone: 'text-cyan',
    bg: 'bg-cyan/10',
    title: 'Durante',
    body:
      'Anotá en vivo, ronda a ronda, sin perder el ritmo de la partida ni la conversación en la mesa. La cuenta corre sola en segundo plano.',
  },
  {
    icon: IconAfter,
    tone: 'text-gold',
    bg: 'bg-gold/10',
    title: 'Después',
    body:
      'Leé lo que pasó: dónde se decidió la partida, quién mejoró más y qué ronda conviene repensar antes de la próxima vez.',
  },
]

export function Pillars() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Nuestro estilo
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-sand sm:text-4xl">
            Tres tiempos de una misma técnica
          </h2>
          <p className="mt-4 text-foreground/75">
            Como toda técnica de tres aceros, cada filo cubre un momento distinto de la partida.
            Ninguno reemplaza al otro — juntos sostienen el juego completo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="clay p-7">
              <div className={`clay-chip flex h-14 w-14 items-center justify-center ${p.bg} ${p.tone}`}>
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-sand">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
