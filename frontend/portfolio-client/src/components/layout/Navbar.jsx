import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems, profile, resume } from '../../data/mockPortfolioData'
import Button from '../ui/Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-nocturne-border bg-nocturne-nav backdrop-blur-[20px]">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-[var(--content-max-width)] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-20"
        aria-label="Primary navigation"
      >
        <NavLink to="/" className="group" onClick={closeMenu}>
          <span className="block font-label text-xs uppercase tracking-normal text-nocturne-muted">
            Portfolio
          </span>
          <span className="text-lg font-semibold text-nocturne-cream transition group-hover:text-nocturne-amber">
            {profile.name}
          </span>
        </NavLink>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-nocturne-border text-nocturne-cream transition hover:border-nocturne-amber-border hover:text-nocturne-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={[
                'absolute left-0 top-0.5 h-0.5 w-6 bg-current transition duration-300',
                isMenuOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-2.5 h-0.5 w-6 bg-current transition duration-300',
                isMenuOpen ? 'opacity-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[18px] h-0.5 w-6 bg-current transition duration-300',
                isMenuOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'group relative shrink-0 px-3 py-2 text-sm transition-colors duration-300',
                  isActive ? 'text-nocturne-amber' : 'text-nocturne-muted',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10 transition duration-300 group-hover:text-nocturne-amber group-hover:[text-shadow:0_0_12px_rgba(245,166,35,0.35)]">
                    {item.label}
                  </span>
                  <span
                    className={[
                      'absolute bottom-1 left-3 right-3 h-px origin-left bg-nocturne-amber transition-transform duration-300 ease-out',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Button as="a" href={resume.downloadUrl} download className="hidden lg:inline-flex">
          {resume.label}
        </Button>

        <div
          id="mobile-navigation"
          className={[
            'w-full overflow-hidden transition-all duration-300 lg:hidden',
            isMenuOpen ? 'max-h-[32rem] border-t border-nocturne-border pt-4 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-4 py-3 text-sm transition-colors duration-300 hover:bg-nocturne-card hover:text-nocturne-amber',
                    isActive ? 'bg-nocturne-card text-nocturne-amber' : 'text-nocturne-muted',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              as="a"
              href={resume.downloadUrl}
              download
              className="mt-3 w-full justify-center"
              onClick={closeMenu}
            >
              {resume.label}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
