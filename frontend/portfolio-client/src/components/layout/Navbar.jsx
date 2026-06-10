import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { navigationItems, profile, resume } from '../../data/mockPortfolioData'
import Button from '../ui/Button'

const socialItems = [
  {
    platform: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@WhahTv',
    Icon: FaYoutube,
    color: '#ff0033',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: profile.socialLinks.find((item) => item.platform === 'linkedin')?.url,
    Icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    url: profile.socialLinks.find((item) => item.platform === 'facebook')?.url,
    Icon: FaFacebookF,
    color: '#1877f2',
  },
  {
    platform: 'discord',
    label: 'Discord',
    url: null,
    Icon: FaDiscord,
    color: '#5865f2',
  },
  {
    platform: 'github',
    label: 'GitHub',
    url: profile.socialLinks.find((item) => item.platform === 'github')?.url,
    Icon: FaGithub,
    color: '#f5f5f5',
  },
]

function SocialButtons({ mobile = false }) {
  return (
    <div className={mobile ? 'mt-4 flex flex-wrap gap-2 border-t border-nocturne-border pt-4' : 'flex items-center gap-1.5'}>
      {socialItems.map(({ platform, label, url, Icon, color }) => {
        const classes = [
          'group flex items-center justify-center rounded-full border border-transparent text-nocturne-muted transition duration-300',
          mobile ? 'h-10 w-10 bg-nocturne-card' : 'h-8 w-8',
          url
            ? 'hover:-translate-y-0.5 hover:border-nocturne-border hover:bg-nocturne-card'
            : 'cursor-not-allowed opacity-45',
        ].join(' ')
        const icon = (
          <Icon
            className="text-sm transition duration-300 group-hover:scale-110"
            style={{ color }}
            aria-hidden="true"
          />
        )

        return url ? (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={classes}
            aria-label={label}
            title={label}
          >
            {icon}
          </a>
        ) : (
          <span
            key={platform}
            className={classes}
            aria-disabled="true"
            title={`${label} link coming soon`}
          >
            {icon}
          </span>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-nocturne-bg/75 shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-md backdrop-saturate-150 md:bg-nocturne-bg/65 md:backdrop-blur-xl">
      <nav
        className="relative mx-auto flex min-h-16 w-full max-w-[var(--content-max-width)] flex-wrap items-center justify-between gap-3 px-5 py-2.5 md:px-10"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="text-base font-semibold text-nocturne-cream transition hover:text-nocturne-amber lg:hidden"
          onClick={closeMenu}
        >
          {profile.name}
        </NavLink>

        <button
          type="button"
          className="mobile-nav-toggle absolute right-5 top-3 flex h-10 w-10 items-center justify-center rounded-lg border border-nocturne-border text-nocturne-cream transition hover:border-nocturne-amber-border hover:text-nocturne-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber md:right-10 lg:hidden"
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

        <div className="hidden items-center gap-0.5 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'group relative shrink-0 px-2.5 py-2 text-[13px] transition-colors duration-300',
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

        <NavLink
          to="/"
          className="absolute left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-nocturne-amber-border bg-nocturne-card font-label text-xs font-semibold text-nocturne-cream transition hover:border-nocturne-amber hover:text-nocturne-amber hover:shadow-nocturne-glow lg:flex"
          aria-label="Joseph Sotomil homepage"
        >
          JS
        </NavLink>

        <div className="hidden lg:block">
          <SocialButtons />
        </div>

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
            <SocialButtons mobile />
            <Button
              as="a"
              href={resume.downloadUrl}
              download
              className="mt-3 w-full justify-center !text-black"
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
