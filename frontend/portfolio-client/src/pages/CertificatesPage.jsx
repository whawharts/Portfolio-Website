import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  certificateFilters,
  certificates,
  certificatesPage,
  learningProgress,
} from '../data/mockPortfolioData'
import ArrowLink from '../components/ui/ArrowLink'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import { EmptyState } from '../components/ui/PageState'

function PageHero() {
  const { hero } = certificatesPage

  return (
    <header className="mx-auto mb-[120px] max-w-[1120px] pt-6">
      <HeroEyebrow className="mb-6" textClassName="text-nocturne-amber">
        {hero.eyebrow}
      </HeroEyebrow>
      <h1 className="text-[40px] font-bold leading-tight text-nocturne-cream md:text-[64px]">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </header>
  )
}

function FilterTabs({ activeFilter, onFilterChange }) {
  const tabsContainerRef = useRef(null)
  const tabRefs = useRef({})
  const [underlineStyle, setUnderlineStyle] = useState({
    width: '0px',
    transform: 'translate3d(0px, 0, 0)',
  })

  useEffect(() => {
    let animationFrame = 0

    function updateUnderline() {
      const activeButton = tabRefs.current[activeFilter]
      const container = tabsContainerRef.current

      if (!activeButton || !container) {
        return
      }

      setUnderlineStyle({
        width: `${activeButton.offsetWidth}px`,
        transform: `translate3d(${activeButton.offsetLeft}px, 0, 0)`,
      })
    }

    animationFrame = window.requestAnimationFrame(updateUnderline)
    window.addEventListener('resize', updateUnderline)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', updateUnderline)
    }
  }, [activeFilter])

  return (
    <section className="mx-auto mb-12 max-w-[1120px]">
      <div className="overflow-x-auto">
        <div
          ref={tabsContainerRef}
          className="relative flex w-max min-w-full gap-2 border-b border-nocturne-border pb-4 md:gap-4"
        >
          {certificateFilters.map((filter) => {
            const isActive = activeFilter === filter.value

            return (
              <button
                key={filter.value}
                ref={(node) => {
                  tabRefs.current[filter.value] = node
                }}
                type="button"
                onClick={() => onFilterChange(filter.value)}
                className={[
                  'shrink-0 px-4 py-2 font-label text-sm transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber',
                  isActive
                    ? 'text-nocturne-amber'
                    : 'text-nocturne-muted hover:text-nocturne-amber hover:[text-shadow:0_0_10px_rgba(245,166,35,0.25)]',
                ].join(' ')}
                aria-pressed={isActive}
              >
                {filter.label}
              </button>
            )
          })}
          <span
            className="absolute bottom-0 left-0 h-px rounded-full bg-nocturne-amber-strong shadow-[0_0_12px_rgba(245,166,35,0.22)] transition-all duration-300 ease-out"
            style={underlineStyle}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

function formatCategory(category) {
  return category.replace('-', ' ')
}

function formatIssuedAt(issuedAt) {
  return issuedAt ? String(issuedAt).slice(0, 4) : 'In progress'
}

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

function CertificateCard({ certificate }) {
  const certificateUrl = certificate.credentialUrl || certificate.certificateUrl
  const hasCertificateUrl = !isPlaceholderUrl(certificateUrl)

  return (
    <Card className="group flex h-full flex-col p-6">
      <div className="flex-1">
        <p className="mb-3 font-label text-xs uppercase tracking-normal text-nocturne-muted">
          {formatCategory(certificate.category)} - {formatIssuedAt(certificate.issuedAt)}
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-nocturne-cream">
          {certificate.title}
        </h2>
        <p className="mb-8 leading-7 text-nocturne-muted">{certificate.provider}</p>
      </div>
      {hasCertificateUrl ? (
        <ArrowLink href={certificateUrl} className="mt-auto">
          View Certificate
        </ArrowLink>
      ) : (
        <p className="mt-auto font-label text-xs uppercase tracking-normal text-nocturne-muted">
          Certificate link coming soon
        </p>
      )}
    </Card>
  )
}

function CertificateGrid({ items }) {
  return (
    <section className="mx-auto mb-[120px] grid max-w-[1120px] gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((certificate, index) => (
        <RevealOnScroll
          key={`${certificate.title}-${certificate.provider}`}
          delay={(index % 3) * 75}
          className="h-full"
        >
          <CertificateCard certificate={certificate} />
        </RevealOnScroll>
      ))}
    </section>
  )
}

function LearningProgressSection() {
  return (
    <section className="mx-auto mb-[120px] max-w-[1120px]">
      <h2 className="mb-8 border-l-4 border-nocturne-amber pl-4 text-[32px] font-semibold leading-10 text-nocturne-cream">
        {certificatesPage.progressTitle}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {learningProgress.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 75} className="h-full">
            <Card className="h-full p-6">
              <h3 className="mb-3 text-2xl font-semibold text-nocturne-cream">{item.title}</h3>
              <p className="leading-7 text-nocturne-muted">{item.summary}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <section className="relative mx-auto max-w-[1120px] overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-card px-6 py-16 text-center">
      <div className="absolute inset-0 bg-nocturne-amber/5" />
      <div className="relative z-10">
        <h2 className="mb-6 text-[32px] font-semibold leading-10 text-nocturne-cream">
          {certificatesPage.cta.title}
        </h2>
        <Button as={Link} to={certificatesPage.cta.action.path} className="px-8 py-3">
          {certificatesPage.cta.action.label}
        </Button>
      </div>
    </section>
  )
}

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredCertificates = certificates.filter(
    (certificate) => activeFilter === 'all' || certificate.category === activeFilter,
  )

  return (
    <>
      <PageHero />
      {certificates.length ? (
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      ) : null}
      {filteredCertificates.length === 0 ? (
        <EmptyState message="No certificates yet. Verified achievements will appear here as I earn them." />
      ) : null}
      {filteredCertificates.length ? (
        <CertificateGrid items={filteredCertificates} />
      ) : null}
      <LearningProgressSection />
      <RevealOnScroll>
        <BottomCta />
      </RevealOnScroll>
    </>
  )
}
