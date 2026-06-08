import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectFilters, projectsPage } from '../data/mockPortfolioData'
import ArrowLink from '../components/ui/ArrowLink'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import { EmptyState, ErrorState, LoadingState } from '../components/ui/PageState'
import { useApiResource } from '../hooks/useApiResource'
import { projectsApi } from '../services/projectsApi'

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
    <header className="max-w-3xl pb-14 pt-6 md:pb-16">
      <HeroEyebrow className="mb-6">{projectsPage.eyebrow}</HeroEyebrow>
      <h1 className="text-[40px] font-bold leading-tight text-nocturne-amber md:text-[64px]">
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

  return (
    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-nocturne-bg/40 transition duration-300 group-hover:bg-nocturne-bg/10" />
      <div className="absolute inset-x-6 top-8 rounded-lg border border-nocturne-border bg-nocturne-bg/70 p-4 backdrop-blur-[20px] transition duration-500 group-hover:scale-[1.03] group-hover:border-nocturne-amber-border">
        <div className="mb-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-error)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-nocturne-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-nocturne-muted" />
        </div>
        <div className="mb-3 h-2 w-3/4 rounded bg-nocturne-border" />
        <div className="mb-3 h-2 rounded bg-nocturne-amber/30" />
        <div className="h-2 w-2/3 rounded bg-nocturne-border" />
      </div>
      <div className="absolute bottom-6 left-6 rounded border border-nocturne-border bg-nocturne-card-muted px-3 py-1 font-label text-xs uppercase tracking-normal text-nocturne-muted">
        {project.category}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const hasLiveUrl = !isPlaceholderUrl(project.liveUrl)
  const hasGithubUrl = !isPlaceholderUrl(project.githubUrl)
  const hasCaseStudyUrl = !isPlaceholderUrl(project.caseStudyUrl)
  const hasActions = hasLiveUrl || hasGithubUrl || hasCaseStudyUrl

  return (
    <article className="group flex h-full flex-col">
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <ProjectImagePlaceholder project={project} />
        <div className="flex flex-1 flex-col p-6 md:p-8">
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
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-nocturne-border pt-6">
            {hasActions ? (
              <>
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
    <section className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-card p-8 text-center md:p-12">
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
  const loadProjects = useCallback(
    () => projectsApi.getProjects(activeFilter === 'all' ? undefined : { category: activeFilter }),
    [activeFilter],
  )
  const { data: projects, error, isLoading } = useApiResource(loadProjects, [loadProjects])

  return (
    <>
      <ProjectsHero />
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {isLoading ? <LoadingState message="Loading projects from the API..." /> : null}
      {error ? <ErrorState message={error.message} /> : null}
      {!isLoading && !error && projects?.length === 0 ? (
        <EmptyState message="No projects match this filter yet." />
      ) : null}
      {!isLoading && !error && projects?.length ? (
        <section className="mb-[120px] grid gap-8 md:grid-cols-2">
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
