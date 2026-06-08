import { NavLink } from 'react-router-dom'
import { navigationItems, profile, resume } from '../../data/mockPortfolioData'
import Button from '../ui/Button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-nocturne-border bg-nocturne-nav backdrop-blur-[20px]">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-[var(--content-max-width)] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-20"
        aria-label="Primary navigation"
      >
        <NavLink to="/" className="group">
          <span className="block font-label text-xs uppercase tracking-normal text-nocturne-muted">
            Portfolio
          </span>
          <span className="text-lg font-semibold text-nocturne-cream transition group-hover:text-nocturne-amber">
            {profile.name}
          </span>
        </NavLink>

        <div className="order-3 flex w-full items-center gap-1 overflow-x-auto lg:order-none lg:w-auto lg:overflow-visible">
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

        <Button as="a" href={resume.downloadUrl} download className="order-2 lg:order-none">
          {resume.label}
        </Button>
      </nav>
    </header>
  )
}
