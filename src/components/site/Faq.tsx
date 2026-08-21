import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '¿Necesito internet para usar Score 7 en la mesa?',
    a: 'No. Score 7 está pensado offline-first: anotás la partida sin conexión y todo se sincroniza solo cuando el dispositivo vuelve a tener señal.',
  },
  {
    q: '¿Funciona con cualquier juego de mesa?',
    a: 'Sí. Score 7 es un score tracker universal: podés armar una plantilla de puntuación para cualquier título de tu ludoteca, no solo para los que vienen precargados.',
  },
  {
    q: '¿Qué hace exactamente la detección de puntos débiles?',
    a: 'Compara tus rondas entre partidas y señala en qué momento del juego — apertura, mitad o cierre — tendés a perder terreno, para que sepas qué mirar la próxima vez.',
  },
  {
    q: '¿Cuándo se suman más juegos además de Score 7?',
    a: 'Estamos integrando de a uno, con cuidado. Score 7 es el primer paso del laboratorio; las interfaces dedicadas a juegos específicos son el siguiente.',
  },
]

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-sand sm:text-4xl">
            Antes de sentarte a la mesa
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div key={item.q} className="clay overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-sand">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-foreground/75">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
