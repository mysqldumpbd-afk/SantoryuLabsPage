import {
  IconLeague,
  IconLiveScore,
  IconOffline,
  IconProfiles,
  IconShare,
  IconTarget,
  IconTemplate,
  IconTrend,
} from './icons'

const FEATURES = [
  {
    icon: IconLiveScore,
    title: 'Registro en vivo, ronda a ronda',
    body:
      'Anotá los puntos apenas suceden, desde el celular de cualquiera en la mesa. Sin planillas improvisadas, sin sumar de cabeza al final.',
  },
  {
    icon: IconProfiles,
    title: 'Perfiles de jugador persistentes',
    body:
      'Cada jugador acumula su propio historial: partidas jugadas, victorias, puntuación media y con quién juega más seguido.',
  },
  {
    icon: IconTrend,
    title: 'Curvas de rendimiento',
    body:
      'No solo el resultado final: la curva de cómo se construyó ese resultado, ronda a ronda, partida tras partida.',
  },
  {
    icon: IconTarget,
    title: 'Detección de puntos débiles',
    body:
      'Score 7 compara tus rondas entre sí y te muestra en qué fase del juego sueles perder terreno — apertura, mitad o cierre.',
  },
  {
    icon: IconTemplate,
    title: 'Plantillas de puntuación a medida',
    body:
      'Armá la hoja de anotación de cualquier juego de tu ludoteca, no solo los que vienen precargados de fábrica.',
  },
  {
    icon: IconOffline,
    title: 'Offline-first, de verdad',
    body:
      'Funciona sin señal en la mesa de siempre y sincroniza solo cuando vuelve la conexión. La partida no espera al wifi.',
  },
  {
    icon: IconShare,
    title: 'Resúmenes para compartir',
    body:
      'Al cerrar la partida, un resumen con ganador, MVP de la mesa y quién más mejoró — listo para mandar al grupo.',
  },
  {
    icon: IconLeague,
    title: 'Modo liga y temporadas',
    body:
      'Llevá el ranking de tu grupo habitual a lo largo del tiempo: quién domina la mesa esta temporada, y quién viene por la revancha.',
  },
]

export function Score7() {
  return (
    <section id="score7" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="clay-edge clay relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="clay-chip flex h-20 w-20 shrink-0 items-center justify-center bg-gradient-to-br from-lime/25 to-cyan/15 font-display text-3xl font-bold text-sand">
              7
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                Disponible ahora
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-sand sm:text-4xl">
                Score 7
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/75">
                Score 7 no es un juego — es el score tracker de Santoryu Labs: la libreta de
                puntajes que se volvió memoria de tu grupo. Funciona junto a los juegos que ya
                tenés en tu estante, llevando la cuenta y, con el tiempo, contándote a vos algo
                sobre cómo jugás.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="clay p-6">
              <div className="clay-chip flex h-12 w-12 items-center justify-center bg-white/5 text-cyan">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-sand">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
