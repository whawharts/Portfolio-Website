import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 250

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function ScrollToTopRail() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function updateScrollState() {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0

      setIsVisible(scrollTop > SCROLL_THRESHOLD)
      setScrollProgress(progress)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  const desktopVisibilityClasses = isVisible
    ? 'opacity-100 pointer-events-auto translate-x-0'
    : 'opacity-0 pointer-events-none translate-x-2'
  const mobileVisibilityClasses = isVisible
    ? 'opacity-100 pointer-events-auto translate-y-0'
    : 'opacity-0 pointer-events-none -translate-y-1'
  const progressPercent = `${scrollProgress * 100}%`

  return (
    <>
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
        className={[
          'group fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 rounded-sm px-2 py-3 text-nocturne-muted transition-all duration-300 ease-out hover:text-nocturne-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nocturne-amber md:flex',
          desktopVisibilityClasses,
        ].join(' ')}
      >
        <span className="relative h-24 w-px overflow-hidden rounded-full bg-nocturne-border/70 transition-transform duration-300 ease-out group-hover:scale-y-105">
          <span
            className="absolute left-0 top-0 w-full rounded-full bg-nocturne-amber-strong shadow-[0_0_16px_rgba(245,166,35,0.22)]"
            style={{ height: progressPercent }}
          />
        </span>
        <span
          className="font-label text-[10px] uppercase tracking-normal [writing-mode:vertical-rl]"
          aria-hidden="true"
        >
          Scroll to top
        </span>
      </button>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
        className={[
          'group fixed left-1/2 top-[7.75rem] z-40 flex -translate-x-1/2 px-4 py-3 transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber md:hidden',
          mobileVisibilityClasses,
        ].join(' ')}
      >
        <span className="relative h-px w-24 origin-left overflow-hidden rounded-full bg-nocturne-border/70 transition-transform duration-300 ease-out group-hover:scale-x-105">
          <span
            className="absolute left-0 top-0 h-full rounded-full bg-nocturne-amber-strong shadow-[0_0_14px_rgba(245,166,35,0.22)]"
            style={{ width: progressPercent }}
          />
        </span>
      </button>
    </>
  )
}
