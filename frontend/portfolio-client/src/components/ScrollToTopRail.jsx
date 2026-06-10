import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

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
    ? 'opacity-100 pointer-events-auto translate-x-0'
    : 'opacity-0 pointer-events-none translate-x-2'
  const progressPercent = `${scrollProgress * 100}%`

  return (
    <>
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
        className={[
          'group fixed right-5 top-1/2 z-[60] hidden min-h-32 -translate-y-1/2 touch-manipulation items-center gap-3 rounded-lg border border-transparent px-3 py-4 text-nocturne-muted transition-all duration-300 ease-out hover:border-nocturne-border hover:bg-nocturne-card-muted hover:text-nocturne-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nocturne-amber md:flex',
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
          To Top
        </span>
        <FaArrowUp className="text-xs transition duration-300 group-hover:-translate-y-1" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
        className={[
          'group fixed bottom-24 right-5 z-[70] flex min-h-12 touch-manipulation items-center gap-2 rounded-lg border border-nocturne-amber-border bg-nocturne-card/95 px-3 py-2 text-nocturne-cream shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber md:hidden',
          mobileVisibilityClasses,
        ].join(' ')}
      >
        <FaArrowUp className="text-xs text-nocturne-amber transition duration-300 group-hover:-translate-y-1" aria-hidden="true" />
        <span className="relative h-7 w-px overflow-hidden rounded-full bg-nocturne-border/70">
          <span
            className="absolute bottom-0 left-0 w-full rounded-full bg-nocturne-amber-strong shadow-[0_0_14px_rgba(245,166,35,0.22)]"
            style={{ height: progressPercent }}
          />
        </span>
        <span className="font-label text-[10px] uppercase tracking-normal text-nocturne-cream">
          To Top
        </span>
      </button>
    </>
  )
}
