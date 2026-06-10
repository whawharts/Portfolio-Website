import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects, projectFilters, projectsPage } from '../data/mockPortfolioData'
import ArrowLink from '../components/ui/ArrowLink'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import { EmptyState } from '../components/ui/PageState'

const thumbnailStyles = {
  amber: 'from-nocturne-panel via-nocturne-card to-nocturne-bg',
  panel: 'from-nocturne-card via-nocturne-panel to-nocturne-bg',
  streetlight: 'from-nocturne-bg via-nocturne-card to-nocturne-panel',
  code: 'from-nocturne-surface via-nocturne-card to-nocturne-bg',
  warm: 'from-nocturne-panel via-nocturne-bg to-nocturne-card',
  database: 'from-nocturne-bg via-nocturne-panel to-nocturne-surface',
}

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

function ProjectsHero() {
  return (
    <header className="max-w-3xl pb-10 pt-3 md:pb-12">
      <HeroEyebrow className="mb-6">{projectsPage.eyebrow}</HeroEyebrow>
      <h1 className="text-[38px] font-bold leading-tight text-nocturne-amber md:text-[52px]">
        {projectsPage.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-nocturne-muted">{projectsPage.intro}</p>
    </header>
  )
}

function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.value

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={[
              'rounded-lg border px-4 py-2 font-label text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber',
              isActive
                ? 'border-nocturne-amber bg-nocturne-card text-nocturne-amber shadow-nocturne-glow'
                : 'border-nocturne-border bg-nocturne-card text-nocturne-muted hover:border-nocturne-amber-border hover:text-nocturne-cream',
            ].join(' ')}
            aria-pressed={isActive}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

function ProjectImagePlaceholder({ project }) {
  const gradient = thumbnailStyles[project.thumbnailTone] ?? thumbnailStyles.panel
  const hasThumbnail = !isPlaceholderUrl(project.thumbnailUrl)

  return (
    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${gradient}`}>
      {hasThumbnail ? (
        <img
          src={project.thumbnailUrl}
          alt={`${project.title} homepage preview`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-nocturne-bg/40 transition duration-300 group-hover:bg-nocturne-bg/10" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <span className="rounded-full border border-nocturne-amber-border bg-nocturne-bg/80 px-4 py-2 font-label text-xs uppercase tracking-[0.14em] text-nocturne-amber shadow-nocturne-glow backdrop-blur-[20px]">
            Coming Soon
          </span>
        </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  const hasLiveUrl = !isPlaceholderUrl(project.liveUrl)
  const hasGithubUrl = !isPlaceholderUrl(project.githubUrl)
  const hasCaseStudyUrl = !isPlaceholderUrl(project.caseStudyUrl)
  const hasInternalUrl = !isPlaceholderUrl(project.internalUrl)
  const hasActions = hasInternalUrl || hasLiveUrl || hasGithubUrl || hasCaseStudyUrl

  return (
    <article className="group flex h-full flex-col">
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <ProjectImagePlaceholder project={project} />
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-nocturne-cream transition group-hover:text-nocturne-amber md:text-[32px] md:leading-10">
            {project.title}
          </h2>
          <p className="mt-3 flex-1 leading-7 text-nocturne-muted">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} className="text-nocturne-amber">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-nocturne-border pt-4">
            {hasActions ? (
              <>
                {hasInternalUrl ? (
                  <Button as={Link} to={project.internalUrl} className="min-h-10 px-5 py-2 !text-black">
                    View Homepage
                  </Button>
                ) : null}
                {hasLiveUrl ? (
                  <Button as="a" href={project.liveUrl} className="min-h-10 px-5 py-2">
                    Live Demo
                  </Button>
                ) : null}
                {hasGithubUrl ? (
                  <Button
                    as="a"
                    href={project.githubUrl}
                    variant="secondary"
                    className="min-h-10 px-5 py-2"
                  >
                    GitHub
                  </Button>
                ) : null}
                {hasCaseStudyUrl ? (
                  <ArrowLink href={project.caseStudyUrl} className="ml-0 md:ml-auto">
                    Case Study
                  </ArrowLink>
                ) : null}
              </>
            ) : (
              <p className="font-label text-xs uppercase tracking-normal text-nocturne-muted">
                Details coming soon
              </p>
            )}
          </div>
        </div>
      </Card>
    </article>
  )
}

function ProjectsCta() {
  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-card p-7 text-center md:p-9">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-nocturne-amber/5 blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-nocturne-amber/5 blur-[80px]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-nocturne-amber-border bg-nocturne-bg font-label text-xl text-nocturne-amber shadow-nocturne-glow">
          &gt;_
        </div>
        <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">
          {projectsPage.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-nocturne-muted">
          {projectsPage.cta.message}
        </p>
        <Button as={Link} to={projectsPage.cta.action.path} className="mt-8 px-8 py-4">
          {projectsPage.cta.action.label}
        </Button>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const projects = featuredProjects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter,
  )

  return (
    <>
      <ProjectsHero />
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {projects.length === 0 ? (
        <EmptyState message="No projects match this filter yet." />
      ) : null}
      {projects.length ? (
        <section className="mb-20 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={(index % 2) * 75} className="h-full">
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </section>
      ) : null}
      <RevealOnScroll>
        <ProjectsCta />
      </RevealOnScroll>
    </>
  )
}
