import { IconArrowUpRight } from './icons'

const NEWS = [
  {
    tag: 'Premios',
    date: '13 jul 2026',
    title: 'JinxO se corona en el Spiel des Jahres 2026',
    body:
      'El juego de asociación de palabras diseñado por Martin Ang ganó el Spiel des Jahres, mientras Rebirth, de Reiner Knizia, se llevó el Kennerspiel y completó un triplete histórico entre las tres categorías del premio. Mooki Island, de Florian Sirieix, ganó el Kinderspiel des Jahres.',
    source: 'BoardGameWire',
    url: 'https://boardgamewire.com/index.php/2026/07/13/jinxo-wins-2026-spiel-des-jahres-rebirth-secures-historic-triple-for-reiner-knizia/',
  },
  {
    tag: 'Convenciones',
    date: '5 ago 2026',
    title: 'Lo mejor de Gen Con 2026, mesa por mesa',
    body:
      'Drillers, The Glasgow Train Robbery y Tenby encabezan el repaso de la convención, con una tendencia marcada hacia partidas de 45 minutos o menos y reediciones de clásicos agotados volviendo a las mesas.',
    source: 'The Dish · Meadow',
    url: 'https://meadowparty.com/blog/2026/08/05/gen-con-2026-recap-top-10-games/',
  },
  {
    tag: 'Estrenos',
    date: '2026',
    title: 'Los más esperados de 2026 siguen llegando a la mesa',
    body:
      'De Brass: Pittsburgh a la expansión Everdell: Emerland, la agenda de estrenos del año sigue activa — con la segunda edición de Rising Sun asomando para fin de agosto.',
    source: 'Zatu Games',
    url: 'https://zatu.com/en-us/blogs/news/top-10-most-anticipated-board-games-of-2026',
  },
]

export function News() {
  return (
    <section id="bitacora" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Bitácora del tablero
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-sand sm:text-4xl">
            Lo que se mueve en el mundo de los juegos de mesa
          </h2>
          <p className="mt-4 text-foreground/75">
            No inventamos noticias: recogemos lo que se cuenta en fuentes del gremio — a la
            manera de lo que la comunidad de{' '}
            <a
              href="https://boardgamegeek.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 hover:text-lime"
            >
              BoardGameGeek
            </a>{' '}
            documenta a diario — y siempre enlazamos a la fuente original.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {NEWS.map((n) => (
            <a
              key={n.title}
              href={n.url}
              target="_blank"
              rel="noreferrer"
              className="clay group flex flex-col p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="clay-chip bg-white/5 px-3 py-1 font-semibold text-cyan">
                  {n.tag}
                </span>
                <span className="text-foreground/50">{n.date}</span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-sand">
                {n.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-foreground/70">{n.body}</p>

              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                <span className="font-medium text-foreground/55">Fuente: {n.source}</span>
                <span className="flex items-center gap-1 font-semibold text-lime group-hover:text-cyan">
                  Leer nota
                  <IconArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
