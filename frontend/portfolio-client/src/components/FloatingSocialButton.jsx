import { useEffect, useRef, useState } from 'react'

// TODO: Replace these constants with profile/social API data once a shared profile context exists.
const contactProfile = {
  name: 'Joseph Sotomil',
  status: 'Available',
  message:
    "Hey! Want to work together or have a question? Reach out anytime - I'd love to hear from you.",
  avatarUrl: '/images/profile/chibi_joseph.png',
  email: 'Josephsotomil2000@gmail.com',
  phone: '',
  facebookUrl: 'https://www.facebook.com/whawharts/',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-sotomil-7b63173b5/',
  githubUrl: 'https://github.com/whawharts',
}

const secondaryLinks = [
  { label: 'LinkedIn', href: contactProfile.linkedinUrl },
  { label: 'GitHub', href: contactProfile.githubUrl },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function isRealValue(value) {
  return Boolean(value && value !== '#')
}

function ContactAction({
  children,
  href,
  variant = 'secondary',
  external = false,
  isPanelOpen,
}) {
  const variantClasses =
    variant === 'primary'
      ? 'border-transparent bg-nocturne-amber-strong text-[#291800] shadow-[0_0_22px_rgba(245,166,35,0.2)] hover:bg-[#ffb23a] hover:shadow-[0_0_28px_rgba(245,166,35,0.28)]'
      : 'border-nocturne-border bg-nocturne-panel/80 text-nocturne-cream hover:border-nocturne-amber-border hover:text-nocturne-amber hover:shadow-[0_0_18px_rgba(245,166,35,0.14)]'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      tabIndex={isPanelOpen ? undefined : -1}
      className={[
        'inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber',
        variantClasses,
      ].join(' ')}
    >
      {children}
    </a>
  )
}

function DisabledAction({ children }) {
  return (
    <span className="inline-flex min-h-10 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-bg/35 px-4 py-2 text-sm font-semibold text-nocturne-muted/75">
      {children}
    </span>
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
  const hasAvatar = isRealValue(contactProfile.avatarUrl)
  const hasEmail = isRealValue(contactProfile.email)
  const hasPhone = isRealValue(contactProfile.phone)
  const hasFacebook = isRealValue(contactProfile.facebookUrl)
  const visibleSecondaryLinks = secondaryLinks.filter((link) => isRealValue(link.href))

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
          <div className="flex items-center gap-3 border-b border-nocturne-border/70 pb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-nocturne-amber-border bg-nocturne-panel">
              {hasAvatar ? (
                <img
                  src={contactProfile.avatarUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-label text-sm text-nocturne-amber">JS</span>
              )}
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-nocturne-cream">
                {contactProfile.name}
              </h2>
              <p className="mt-1 flex items-center gap-2 font-label text-xs text-nocturne-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-nocturne-amber-strong shadow-[0_0_10px_rgba(245,166,35,0.32)]" />
                {contactProfile.status}
              </p>
            </div>
          </div>

          <p className="py-4 text-sm leading-6 text-nocturne-muted">{contactProfile.message}</p>

          <div className="grid gap-2">
            {hasEmail ? (
              <ContactAction
                href={`mailto:${contactProfile.email}`}
                variant="primary"
                isPanelOpen={isOpen}
              >
                Email Me
              </ContactAction>
            ) : null}
            {hasPhone ? (
              <ContactAction href={`tel:${contactProfile.phone}`} isPanelOpen={isOpen}>
                Call Me
              </ContactAction>
            ) : (
              <DisabledAction>Call Me - Coming soon</DisabledAction>
            )}
            {hasFacebook ? (
              <ContactAction href={contactProfile.facebookUrl} external isPanelOpen={isOpen}>
                Facebook
              </ContactAction>
            ) : null}
          </div>

          {visibleSecondaryLinks.length ? (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {visibleSecondaryLinks.map((link) => (
                <ContactAction
                  key={link.label}
                  href={link.href}
                  external
                  isPanelOpen={isOpen}
                >
                  {link.label}
                </ContactAction>
              ))}
            </div>
          ) : null}
        </section>

        <button
          type="button"
          aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-nocturne-amber-border bg-nocturne-amber-strong text-[#291800] shadow-[0_0_28px_rgba(245,166,35,0.28)] transition duration-200 hover:shadow-[0_0_36px_rgba(245,166,35,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nocturne-amber"
        >
          <span className="absolute inset-0 rounded-full border border-nocturne-amber opacity-20 motion-safe:animate-ping" />
          <span className="relative z-10 font-label text-base font-semibold">
            {isOpen ? 'X' : (
              <span className="flex h-5 w-7 items-center justify-center gap-1 rounded-full border-2 border-[#291800]">
                <span className="h-1 w-1 rounded-full bg-[#291800]" />
                <span className="h-1 w-1 rounded-full bg-[#291800]" />
                <span className="h-1 w-1 rounded-full bg-[#291800]" />
              </span>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}
