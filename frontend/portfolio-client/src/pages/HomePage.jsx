import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  certificatePreview,
  featuredProjects,
  homePage,
  profile,
  techStackGroups,
} from '../data/mockPortfolioData'
import ArrowLink from '../components/ui/ArrowLink'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

function formatIssuedAt(issuedAt) {
  return issuedAt ? String(issuedAt).slice(0, 4) : 'In progress'
}

function SectionTitle({ title, action }) {
  return (
    <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">{title}</h2>
        <div className="mt-4 h-1 w-16 rounded bg-nocturne-amber" />
      </div>
      {action ? (
        <ArrowLink to={action.path}>{action.label}</ArrowLink>
      ) : null}
    </div>
  )
}

function HeroVisual({ profileData }) {
  const hasAvatar = !isPlaceholderUrl(profileData?.avatarUrl)
  const [avatarIndex, setAvatarIndex] = useState(0)
  const homeAvatarImages = [
    profileData?.avatarUrl || '/images/profile/chibi_joseph.png',
    '/images/profile/chibi_joseph_2.png',
    '/images/profile/chibi_joseph_3.png',
  ]

  function handleAvatarHover() {
    setAvatarIndex((currentIndex) => (currentIndex + 1) % homeAvatarImages.length)
  }

  return (
    <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
      {hasAvatar ? (
        <div
          className="relative z-10 w-full max-w-[23rem] lg:max-w-[25rem]"
          onMouseEnter={handleAvatarHover}
        >
          <div className="pointer-events-none absolute inset-6 -z-10 rounded-full bg-nocturne-amber/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-2 left-1/2 z-0 h-10 w-[68%] -translate-x-1/2 rounded-full bg-black/35 blur-2xl opacity-55" />
          {homeAvatarImages.map((avatarSrc, index) => (
            <img
              key={avatarSrc}
              src={avatarSrc}
              alt="Chibi illustration of Joseph working on a laptop"
              className={[
                'w-full object-contain transition-opacity duration-500 ease-in-out',
                index === 0 ? 'relative' : 'absolute inset-0',
                index === avatarIndex ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}
        </div>
      ) : null}

      <Card className="float-soft absolute right-0 top-8 z-20 w-56 bg-nocturne-card-muted p-4 backdrop-blur-[20px]">
        <div className="mb-3 flex items-center gap-2 border-b border-nocturne-border pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-error)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-nocturne-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-nocturne-muted" />
          <span className="ml-2 font-label text-[10px] text-nocturne-muted">terminal</span>
        </div>
        <p className="font-label text-sm text-nocturne-amber">~ npm run dev</p>
        <p className="mt-1 font-label text-xs text-nocturne-muted">Starting server...</p>
      </Card>

      <Card className="float-soft-delay absolute bottom-16 left-0 z-20 flex items-center gap-3 bg-nocturne-card-muted p-3 backdrop-blur-[20px]">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-bg font-label text-sm text-nocturne-amber">
          &lt;/&gt;
        </div>
        <div>
          <p className="font-label text-xs text-nocturne-cream">React UI</p>
          <p className="mt-1 font-label text-[10px] uppercase tracking-normal text-nocturne-muted">
            Component
          </p>
        </div>
      </Card>

      <Card className="float-soft-slow absolute right-8 top-1/2 z-20 hidden w-32 bg-nocturne-card-muted p-3 backdrop-blur-[20px] md:block">
        <div className="mb-2 h-2 rounded bg-nocturne-border" />
        <div className="mb-2 h-2 w-2/3 rounded bg-nocturne-amber/30" />
        <div className="h-2 w-5/6 rounded bg-nocturne-border" />
      </Card>
    </div>
  )
}

function HeroSection({ profileData }) {
  const { hero } = homePage
  const displayAvailability = profileData?.availability || hero.availability
  const displayHeadline = profileData?.headline || hero.headline
  const displayIntro = profileData?.shortBio || hero.intro

  return (
    <section className="grid min-h-[calc(100vh-10rem)] items-center gap-12 py-10 lg:grid-cols-2 lg:gap-6 lg:py-16">
      <div className="relative z-10">
        <HeroEyebrow className="mb-6">{displayAvailability}</HeroEyebrow>

        <h1 className="max-w-3xl text-[40px] font-bold leading-tight text-nocturne-cream md:text-[64px]">
          {displayHeadline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-nocturne-muted">{displayIntro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button as={Link} to={hero.primaryAction.path} className="px-8 py-4">
            {hero.primaryAction.label}
          </Button>
          <Button as={Link} to={hero.secondaryAction.path} variant="secondary" className="px-8 py-4">
            {hero.secondaryAction.label}
          </Button>
        </div>

        <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-nocturne-border pt-8">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="mb-1 text-2xl font-semibold text-nocturne-amber md:text-[32px]">
                {stat.value}
              </p>
              <p className="font-label text-[11px] uppercase tracking-normal text-nocturne-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <HeroVisual profileData={profileData} />
    </section>
  )
}

function ProjectCard({ project }) {
  const hasLiveUrl = !isPlaceholderUrl(project.liveUrl)
  const hasGithubUrl = !isPlaceholderUrl(project.githubUrl)

  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative h-56 overflow-hidden border-b border-nocturne-border bg-nocturne-panel">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--color-amber-soft),transparent_35%),linear-gradient(135deg,var(--color-surface-panel),var(--color-surface-card))]" />
        <div className="absolute inset-x-6 bottom-6 rounded-lg border border-nocturne-border bg-nocturne-bg/60 p-4 backdrop-blur-[20px] transition group-hover:border-nocturne-amber-border">
          <div className="mb-4 h-2 w-2/3 rounded bg-nocturne-border" />
          <div className="mb-3 h-2 rounded bg-nocturne-amber/30" />
          <div className="h-2 w-4/5 rounded bg-nocturne-border" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-nocturne-cream">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-nocturne-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-7 flex gap-5 border-t border-nocturne-border pt-5 font-label text-sm">
          {hasLiveUrl ? (
            <a href={project.liveUrl} className="text-nocturne-cream transition hover:text-nocturne-amber">
              Live Demo
            </a>
          ) : (
            <span className="cursor-not-allowed text-nocturne-muted/70" aria-disabled="true" title="Link coming soon">
              Live Demo
            </span>
          )}
          {hasGithubUrl ? (
            <a href={project.githubUrl} className="text-nocturne-muted transition hover:text-nocturne-cream">
              GitHub
            </a>
          ) : (
            <span className="cursor-not-allowed text-nocturne-muted/70" aria-disabled="true" title="Link coming soon">
              GitHub
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

function FeaturedProjectsSection({ projects }) {
  return (
    <section className="py-[120px]">
      <SectionTitle title={homePage.featuredProjectsTitle} action={{ label: 'View All Projects', path: '/projects' }} />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 75} className="h-full">
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function TechStackSection({ groups }) {
  return (
    <section className="py-[120px]">
      <SectionTitle title={homePage.techStackTitle} action={{ label: 'View Full Stack', path: '/tech-stack' }} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {groups.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 75} className="h-full">
            <Card className="h-full">
            <h3 className="text-xl font-semibold text-nocturne-cream">{group.category}</h3>
            <p className="mt-3 min-h-16 text-sm leading-6 text-nocturne-muted">{group.summary}</p>
            <div className="mt-6 flex flex-col gap-3">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-nocturne-border bg-nocturne-surface px-4 py-2 font-label text-sm text-nocturne-muted"
                >
                  {item}
                </div>
              ))}
            </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function AboutCertificatesSection({ profileData, certificateItems }) {
  return (
    <section className="grid gap-12 py-[120px] lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionTitle title={homePage.aboutTitle} />
        <div className="space-y-6 text-lg leading-8 text-nocturne-muted">
          <p>{profileData.shortBio}</p>
          <p>{profileData.longBio}</p>
        </div>
        <ArrowLink to="/about" className="mt-8">
          Read More About Me
        </ArrowLink>
      </div>

      <div>
        <SectionTitle title={homePage.certificatesTitle} />
        <div className="space-y-4">
          {certificateItems.map((certificate, index) => (
            <RevealOnScroll key={certificate.title} delay={index * 75}>
              <Card
                className="flex items-center justify-between gap-4 p-5 hover:border-nocturne-amber-border"
              >
                <div>
                  <h3 className="text-lg font-semibold text-nocturne-cream">{certificate.title}</h3>
                  <p className="mt-1 font-label text-xs text-nocturne-muted">
                    {certificate.provider} - {formatIssuedAt(certificate.issuedAt)}
                  </p>
                </div>
                <ArrowLink
                  href={certificate.credentialUrl}
                  disabled={isPlaceholderUrl(certificate.credentialUrl)}
                  title={isPlaceholderUrl(certificate.credentialUrl) ? 'Credential link coming soon' : undefined}
                  aria-label={`Open credential for ${certificate.title}`}
                >
                  Open
                </ArrowLink>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
        <ArrowLink to="/certificates" className="mt-8">
          View All Certificates
        </ArrowLink>
      </div>
    </section>
  )
}

function ContactCtaSection() {
  const { contactCta } = homePage

  return (
    <section className="py-[120px]">
      <RevealOnScroll>
        <Card className="relative mx-auto max-w-3xl overflow-hidden p-8 text-center md:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-nocturne-amber/5 blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-nocturne-muted/5 blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">
              {contactCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-nocturne-muted">{contactCta.message}</p>
            <Button as={Link} to={contactCta.action.path} className="mt-8 px-8 py-3">
              {contactCta.action.label}
            </Button>
          </div>
        </Card>
      </RevealOnScroll>
    </section>
  )
}

export default function HomePage() {
  const localFeaturedProjects = featuredProjects.filter((project) => project.isFeatured)
  const localCertificates = certificatePreview.slice(0, 3)

  return (
    <>
      <HeroSection profileData={profile} />
      <FeaturedProjectsSection projects={localFeaturedProjects} />
      <TechStackSection groups={techStackGroups} />
      <AboutCertificatesSection
        profileData={profile}
        certificateItems={localCertificates}
      />
      <ContactCtaSection />
    </>
  )
}
