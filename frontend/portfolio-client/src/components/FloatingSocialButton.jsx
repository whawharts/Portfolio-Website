import { useEffect, useRef, useState } from 'react'
import {
  FaArrowRight,
  FaCommentDots,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXmark,
  FaYoutube,
} from 'react-icons/fa6'

const contactRows = [
  {
    label: 'LinkedIn',
    value: 'Joseph Sotomil',
    href: 'https://www.linkedin.com/in/joseph-sotomil-7b63173b5/',
    Icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    label: 'Facebook',
    value: 'whawharts',
    href: 'https://www.facebook.com/whawharts/',
    Icon: FaFacebookF,
    color: '#1877f2',
  },
  {
    label: 'YouTube',
    value: '@WhahTv',
    href: 'https://www.youtube.com/@WhahTv',
    Icon: FaYoutube,
    color: '#ff0033',
  },
  {
    label: 'Discord',
    value: 'promi_1',
    href: null,
    Icon: FaDiscord,
    color: '#5865f2',
  },
  {
    label: 'GitHub',
    value: 'whawharts',
    href: 'https://github.com/whawharts',
    Icon: FaGithub,
    color: '#f5f5f5',
  },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function FloatingSocialButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const widgetRef = useRef(null)
  const lastScrollYRef = useRef(0)
  const scrollResetTimeoutRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    function handlePointerDown(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined
    }

    lastScrollYRef.current = window.scrollY

    function handleScroll() {
      const currentY = window.scrollY
      const delta = currentY - lastScrollYRef.current
      const nextOffset = Math.max(-10, Math.min(10, delta * -0.2))

      setScrollOffset(nextOffset)
      lastScrollYRef.current = currentY

      if (scrollResetTimeoutRef.current) {
        window.clearTimeout(scrollResetTimeoutRef.current)
      }

      scrollResetTimeoutRef.current = window.setTimeout(() => {
        setScrollOffset(0)
      }, 120)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (scrollResetTimeoutRef.current) {
        window.clearTimeout(scrollResetTimeoutRef.current)
      }
    }
  }, [])

  const menuStateClasses = isOpen
    ? 'translate-y-0 opacity-100 pointer-events-auto'
    : 'translate-y-3 opacity-0 pointer-events-none'
  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className="flex flex-col items-end gap-3 transition-transform duration-300 ease-out motion-reduce:transition-none"
        style={{ transform: `translate3d(0, ${scrollOffset}px, 0)` }}
      >
        <section
          className={[
            'w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-nocturne-border bg-nocturne-card/95 p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 ease-out motion-reduce:transition-none',
            menuStateClasses,
          ].join(' ')}
          aria-hidden={!isOpen}
          aria-label="Contact options"
        >
          <div className="border-b border-nocturne-border/70 pb-3">
            <h2 className="text-base font-semibold text-nocturne-cream">Contact Me</h2>
            <p className="mt-1 text-xs text-nocturne-muted">Find me on these platforms.</p>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {contactRows.map(({ label, value, href, Icon, color }) => {
              const rowContent = (
                <>
                  <span
                    className="absolute inset-y-2 left-0 w-0.5 origin-center scale-y-0 rounded-full transition-transform duration-300 group-hover:scale-y-100"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 14px ${color}88`,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-bg transition duration-300 group-hover:-rotate-3 group-hover:scale-110"
                    style={{
                      color,
                      boxShadow: `inset 0 0 14px ${color}18, 0 0 0 0 ${color}00`,
                    }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-nocturne-cream">{label}</span>
                    <span className="block truncate font-label text-[10px] text-nocturne-muted">
                      {value}
                    </span>
                  </span>
                  {href ? (
                    <FaArrowRight
                      className="text-xs text-nocturne-muted transition duration-300 group-hover:translate-x-1 group-hover:text-nocturne-amber"
                      aria-hidden="true"
                    />
                  ) : null}
                </>
              )
              const rowClasses =
                'group relative flex min-h-14 w-full items-center gap-3 overflow-hidden rounded-lg border border-nocturne-border bg-nocturne-panel/70 px-3 py-2 text-left transition duration-300 hover:translate-x-1 hover:border-nocturne-amber-border hover:bg-nocturne-card hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)]'

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isOpen ? undefined : -1}
                  className={rowClasses}
                >
                  {rowContent}
                </a>
              ) : (
                <div key={label} className={rowClasses}>
                  {rowContent}
                </div>
              )
            })}
          </div>
        </section>

        <button
          type="button"
          aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={[
            'group relative flex h-14 w-14 touch-manipulation items-center justify-center overflow-hidden rounded-full border border-nocturne-amber-border shadow-[0_0_28px_rgba(245,166,35,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(245,166,35,0.36)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nocturne-amber',
            isOpen
              ? 'rotate-90 bg-nocturne-card text-nocturne-amber'
              : 'bg-nocturne-amber-strong text-[#291800]',
          ].join(' ')}
        >
          <span className="absolute inset-1 rounded-full border border-current/15 transition-all duration-300 group-hover:inset-0" />
          <span className="absolute inset-0 scale-50 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          {isOpen ? (
            <FaXmark className="relative z-10 -rotate-90 text-xl transition duration-300 group-hover:scale-110" aria-hidden="true" />
          ) : (
            <FaCommentDots
              className="relative z-10 text-xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </div>
  )
}
