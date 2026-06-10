import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAutoAwesome } from 'react-icons/md'
import { SiClaude, SiGooglegemini, SiOpenai } from 'react-icons/si'
import { VscCode, VscTerminal } from 'react-icons/vsc'
import {
  certificatePreview,
  coreToolkit,
  featuredProjects,
  homePage,
  profile,
  resume,
} from '../data/mockPortfolioData'
import ArrowLink from '../components/ui/ArrowLink'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import TechStackShowcase from '../components/TechStackShowcase'
import BiographySection from '../components/BiographySection'
import JourneySection from '../components/JourneySection'

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

function formatIssuedAt(issuedAt) {
  return issuedAt ? String(issuedAt).slice(0, 4) : 'In progress'
}

function SectionTitle({ title, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="section-label-line text-[28px] font-semibold leading-9 text-nocturne-cream">
          {title}
        </h2>
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
  const avatarStates = [
    {
      assistant: 'Claude and Claude Code',
      src: profileData?.avatarUrl || '/images/profile/1.png',
      tools: [
        {
          name: 'Claude',
          label: 'AI assistant',
          Icon: SiClaude,
          color: '#d97757',
          position: 'left-[8%] top-[18%] sm:left-[10%]',
          animation: 'float-soft',
        },
        {
          name: 'Claude Code',
          label: 'Coding agent',
          Icon: VscTerminal,
          color: '#e89572',
          position: 'bottom-[16%] right-[14%] sm:right-[9%]',
          animation: 'float-soft-delay',
        },
      ],
    },
    {
      assistant: 'ChatGPT and Codex',
      src: '/images/profile/2.png',
      tools: [
        {
          name: 'ChatGPT',
          label: 'AI assistant',
          Icon: SiOpenai,
          color: '#10a37f',
          position: 'right-[14%] top-[16%] sm:right-[9%]',
          animation: 'float-soft-delay',
        },
        {
          name: 'Codex',
          label: 'Coding agent',
          Icon: VscCode,
          color: '#ffc880',
          position: 'bottom-[15%] left-[8%] sm:left-[10%]',
          animation: 'float-soft-slow',
        },
      ],
    },
    {
      assistant: 'Gemini and Stitch AI',
      src: '/images/profile/3.png',
      tools: [
        {
          name: 'Gemini',
          label: 'AI assistant',
          Icon: SiGooglegemini,
          color: '#8e75ff',
          position: 'left-[7%] top-[30%] sm:left-[9%]',
          animation: 'float-soft-slow',
        },
        {
          name: 'Stitch AI',
          label: 'UI generator',
          Icon: MdAutoAwesome,
          color: '#4f9cf9',
          position: 'right-[14%] top-[38%] sm:right-[10%]',
          animation: 'float-soft',
        },
      ],
    },
  ]
  const activeAvatar = avatarStates[avatarIndex]

  function cycleAvatar() {
    setAvatarIndex((currentIndex) => (currentIndex + 1) % avatarStates.length)
  }

  function handleAvatarKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      cycleAvatar()
    }
  }

  return (
    <div className="relative flex min-h-[290px] items-center justify-center sm:min-h-[360px] lg:min-h-[470px]">
      {hasAvatar ? (
        <div
          className="relative z-10 w-full max-w-[17rem] cursor-pointer sm:max-w-[20rem] lg:max-w-[22rem]"
          onMouseEnter={cycleAvatar}
          onClick={cycleAvatar}
          onKeyDown={handleAvatarKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`Showing ${activeAvatar.assistant} character image. Hover or activate to show the next image.`}
        >
          <div className="pointer-events-none absolute inset-6 -z-10 rounded-full bg-nocturne-amber/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-2 left-1/2 z-0 h-10 w-[68%] -translate-x-1/2 rounded-full bg-black/35 blur-2xl opacity-55" />
          <img
            key={activeAvatar.assistant}
            src={activeAvatar.src}
            alt={`Joseph representing ${activeAvatar.assistant}`}
            decoding="async"
            fetchPriority={avatarIndex === 0 ? 'high' : 'auto'}
            className="ai-tool-enter relative w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[22%] bg-gradient-to-b from-transparent via-nocturne-bg/20 to-nocturne-bg/90"
            aria-hidden="true"
          />
        </div>
      ) : null}

      {activeAvatar.tools.map(({ name, label, Icon, color, position, animation }) => {
        return (
          <div
            key={`${avatarIndex}-${name}`}
            className={`ai-tool-enter absolute ${position} z-20`}
          >
            <Card
              className={`${animation} flex items-center gap-2.5 rounded-lg bg-nocturne-card-muted p-2.5 backdrop-blur-[20px]`}
              style={{
                borderColor: `${color}99`,
                boxShadow: `0 0 22px ${color}20`,
              }}
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-nocturne-border bg-nocturne-bg text-base transition duration-300"
                style={{
                  color,
                  boxShadow: `inset 0 0 14px ${color}28, 0 0 10px ${color}30`,
                }}
              >
                <Icon aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <p className="font-label text-[11px] text-nocturne-cream">{name}</p>
                <p
                  className="mt-0.5 font-label text-[8px] uppercase tracking-normal text-nocturne-muted"
                  style={{ color }}
                >
                  {label}
                </p>
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

function HeroSection({ profileData }) {
  const { hero } = homePage
  const displayAvailability = profileData?.availability || hero.availability
  const practicedTechCount = new Set(
    coreToolkit.flatMap((group) => group.items.map((item) => item.name)),
  ).size
  const stats = [
    { value: featuredProjects.length, label: 'Projects Built' },
    { value: practicedTechCount, label: 'Tech Practiced' },
    { value: hero.currentFocus, label: 'Current Focus' },
  ]

  return (
    <section className="flex flex-col justify-center gap-5 py-4 lg:min-h-[calc(100vh-8rem)] lg:py-5">
      <div className="grid items-center gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
        <HeroVisual profileData={profileData} />

        <div className="relative z-10 min-w-0 lg:pr-6">
          <HeroEyebrow
            className="hero-availability mb-5"
            textClassName="text-emerald-400"
          >
            {displayAvailability}
          </HeroEyebrow>

          <p className="text-base font-semibold tracking-wide text-nocturne-muted md:text-lg">
            Hey There,
          </p>
          <h1 className="mt-3 max-w-3xl text-[42px] font-bold leading-[0.98] tracking-[-0.04em] text-nocturne-cream sm:text-[54px] md:text-[62px]">
            I&apos;m John Joseph
            <span className="block">Sotomil</span>
          </h1>

          <h2 className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-nocturne-amber md:text-sm">
            Computer Science Student
          </h2>
          <p className="mt-4 max-w-lg text-base font-medium leading-7 text-nocturne-muted">
            I build thoughtful, responsive web experiences and mobile applications with AI.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href={resume.downloadUrl}
              download={resume.fileName}
              className="min-h-10 px-6 py-2.5 !text-black"
            >
              Resume
            </Button>
            <Link
              to="/contact"
              className="font-label text-xs text-nocturne-cream underline decoration-nocturne-amber/60 underline-offset-4 transition hover:text-nocturne-amber"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-0 border-y border-nocturne-border/70 sm:grid-cols-2 lg:grid-cols-4">
        <div className="grid grid-cols-2 sm:contents lg:contents">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                'flex min-w-0 items-center gap-3 border-nocturne-border px-5 py-4',
                index < 2 ? 'border-b sm:border-b-0' : '',
                index !== stats.length - 1 ? 'border-r' : '',
              ].join(' ')}
            >
              <p className="shrink-0 text-xl font-semibold leading-tight text-nocturne-amber md:text-2xl">
                {stat.value}
              </p>
              <p className="font-label text-[9px] uppercase leading-4 tracking-normal text-nocturne-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex min-w-0 items-center border-t border-nocturne-border px-5 py-4 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0">
          <div>
            <p className="font-label text-[9px] uppercase tracking-normal text-nocturne-muted">
              Availability
            </p>
            <p className="mt-1 text-sm font-medium text-nocturne-cream">{displayAvailability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const hasLiveUrl = !isPlaceholderUrl(project.liveUrl)
  const hasGithubUrl = !isPlaceholderUrl(project.githubUrl)
  const hasThumbnail = !isPlaceholderUrl(project.thumbnailUrl)
  const hasInternalUrl = !isPlaceholderUrl(project.internalUrl)

  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative h-56 overflow-hidden border-b border-nocturne-border bg-nocturne-panel">
        {hasThumbnail ? (
          <img
            src={project.thumbnailUrl}
            alt={`${project.title} homepage preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--color-amber-soft),transparent_35%),linear-gradient(135deg,var(--color-surface-panel),var(--color-surface-card))]" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <span className="rounded-full border border-nocturne-amber-border bg-nocturne-bg/80 px-4 py-2 font-label text-xs uppercase tracking-[0.14em] text-nocturne-amber shadow-nocturne-glow backdrop-blur-[20px]">
                Coming Soon
              </span>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-2xl font-semibold text-nocturne-cream">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-nocturne-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-7 flex gap-5 border-t border-nocturne-border pt-5 font-label text-sm">
          {hasInternalUrl ? (
            <Link to={project.internalUrl} className="text-nocturne-cream transition hover:text-nocturne-amber">
              View Homepage
            </Link>
          ) : null}
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
    <section className="py-16 md:py-20">
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
    <section className="py-16 md:py-20">
      <SectionTitle title={homePage.techStackTitle} action={{ label: 'View Full Stack', path: '/tech-stack' }} />
      <TechStackShowcase groups={groups} compact />
    </section>
  )
}

function AboutCertificatesSection({ profileData, certificateItems }) {
  return (
    <section className="grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-12">
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
        {certificateItems.length ? (
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
        ) : (
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-nocturne-cream">No certificates yet</h3>
            <p className="mt-2 leading-7 text-nocturne-muted">
              I will add verified certificates here as I complete them.
            </p>
          </Card>
        )}
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
    <section className="py-16 md:py-20">
      <RevealOnScroll>
        <Card className="relative mx-auto max-w-3xl overflow-hidden p-7 text-center md:p-9">
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
      <BiographySection />
      <JourneySection />
      <FeaturedProjectsSection projects={localFeaturedProjects} />
      <TechStackSection groups={coreToolkit} />
      <AboutCertificatesSection
        profileData={profile}
        certificateItems={localCertificates}
      />
      <ContactCtaSection />
    </>
  )
}
