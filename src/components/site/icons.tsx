import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconSwordsThree(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M8 40 L34 14" stroke="currentColor" />
      <path d="M28 8 L31 11 L14 28 L11 25 Z" stroke="currentColor" />
      <path d="M40 40 L14 14" stroke="currentColor" />
      <path d="M20 8 L17 11 L34 28 L37 25 Z" stroke="currentColor" />
      <path d="M24 6 V42" stroke="currentColor" opacity="0.55" />
    </svg>
  )
}

export function IconLiveScore(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="7" y="9" width="34" height="30" rx="6" stroke="currentColor" />
      <path d="M14 27 L20 19 L26 24 L34 14" stroke="currentColor" />
      <circle cx="34" cy="14" r="2.2" fill="currentColor" stroke="none" />
      <path d="M13 33 H23" stroke="currentColor" opacity="0.6" />
    </svg>
  )
}

export function IconProfiles(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="18" cy="16" r="6" stroke="currentColor" />
      <path d="M6 39 C6 30 11 26 18 26 C25 26 30 30 30 39" stroke="currentColor" />
      <circle cx="34" cy="14" r="4" stroke="currentColor" opacity="0.6" />
      <path d="M26 39 C26 33 30 30 34 30 C38.5 30 42 33 42 39" stroke="currentColor" opacity="0.6" />
    </svg>
  )
}

export function IconTrend(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M8 36 V16 M8 36 H40" stroke="currentColor" opacity="0.5" />
      <path d="M12 30 L20 22 L26 27 L38 12" stroke="currentColor" />
      <path d="M30 12 H38 V20" stroke="currentColor" />
    </svg>
  )
}

export function IconTarget(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" />
      <circle cx="24" cy="24" r="8.5" stroke="currentColor" />
      <circle cx="24" cy="24" r="2.2" fill="currentColor" stroke="none" />
      <path d="M24 2 V9 M24 39 V46 M2 24 H9 M39 24 H46" stroke="currentColor" opacity="0.5" />
    </svg>
  )
}

export function IconOffline(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 34 h.01" stroke="currentColor" strokeWidth={3} />
      <path d="M15 27 a13 13 0 0 1 18 0" stroke="currentColor" />
      <path d="M8 20 a24 24 0 0 1 32 0" stroke="currentColor" opacity="0.55" />
    </svg>
  )
}

export function IconShare(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="36" cy="12" r="5" stroke="currentColor" />
      <circle cx="12" cy="24" r="5" stroke="currentColor" />
      <circle cx="36" cy="36" r="5" stroke="currentColor" />
      <path d="M16.5 21.5 L31.5 14.5 M16.5 26.5 L31.5 33.5" stroke="currentColor" />
    </svg>
  )
}

export function IconTemplate(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="7" y="7" width="34" height="34" rx="7" stroke="currentColor" />
      <path d="M7 19 H41" stroke="currentColor" opacity="0.6" />
      <path d="M17 19 V41" stroke="currentColor" opacity="0.6" />
      <path d="M25 27 H34 M25 33 H31" stroke="currentColor" />
    </svg>
  )
}

export function IconLeague(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M16 8 H32 V21 C32 28 27 32 24 32 C21 32 16 28 16 21 Z" stroke="currentColor" />
      <path d="M16 12 H9 C9 18 12 21 16 21" stroke="currentColor" opacity="0.6" />
      <path d="M32 12 H39 C39 18 36 21 32 21" stroke="currentColor" opacity="0.6" />
      <path d="M24 32 V38 M17 42 H31 L29 38 H19 Z" stroke="currentColor" />
    </svg>
  )
}

export function IconDice(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="9" y="9" width="30" height="30" rx="8" stroke="currentColor" />
      <circle cx="17" cy="17" r="2" fill="currentColor" stroke="none" />
      <circle cx="31" cy="17" r="2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="31" r="2" fill="currentColor" stroke="none" />
      <circle cx="31" cy="31" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" />
    </svg>
  )
}

export function IconBefore(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M14 12 L34 12 L26 24 L34 36 L14 36" stroke="currentColor" />
      <circle cx="14" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="36" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconDuring(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="16" stroke="currentColor" />
      <path d="M24 15 V24 L31 29" stroke="currentColor" />
    </svg>
  )
}

export function IconAfter(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M34 12 L14 12 L22 24 L14 36 L34 36" stroke="currentColor" />
      <circle cx="34" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="34" cy="36" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
