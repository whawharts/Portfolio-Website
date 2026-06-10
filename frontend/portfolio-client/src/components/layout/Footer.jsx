import { NavLink } from 'react-router-dom'
import { navigationItems, profile } from '../../data/mockPortfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-nocturne-border bg-nocturne-surface/80">
      <div className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-4 px-5 py-8 text-sm text-nocturne-muted md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <p>
          {profile.name} - {profile.title}
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="transition hover:text-nocturne-amber"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  )
}
