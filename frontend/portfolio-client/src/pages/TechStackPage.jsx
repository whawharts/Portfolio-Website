import { Link } from 'react-router-dom'
import {
  coreToolkit,
  featuredProjects,
  techStackPage,
} from '../data/mockPortfolioData'
import Button from '../components/ui/Button'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import TechStackShowcase from '../components/TechStackShowcase'
import InteractiveSkillMap from '../components/InteractiveSkillMap'
import { EmptyState } from '../components/ui/PageState'

function SectionTitle({ title }) {
  return (
    <div className="mb-8">
      <h2 className="section-label-line text-[28px] font-semibold leading-9 text-nocturne-cream">
        {title}
      </h2>
    </div>
  )
}

function PageHero() {
  const { hero } = techStackPage

  return (
    <header className="mb-16 max-w-3xl pt-3">
      <HeroEyebrow className="mb-6 bg-nocturne-panel">{hero.eyebrow}</HeroEyebrow>
      <h1 className="text-[38px] font-bold leading-tight text-nocturne-cream md:text-[52px]">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </header>
  )
}

function CoreToolkitSection({ groups }) {
  return (
    <section className="mb-20">
      <SectionTitle title={techStackPage.toolkitTitle} />
      <TechStackShowcase groups={groups} />
    </section>
  )
}

function AppliedProjectsSection({ projects }) {
  return (
    <section className="mb-20">
      <SectionTitle title={techStackPage.practiceTitle} />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 75} className="h-full">
            <Link
              to="/projects"
              className="group block h-full rounded-lg border border-nocturne-border bg-nocturne-surface p-5 transition hover:border-nocturne-amber-border hover:bg-nocturne-card hover:shadow-nocturne-card"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-label text-sm text-nocturne-cream transition group-hover:text-nocturne-amber">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-nocturne-muted">{project.summary}</p>
                </div>
                <span className="font-label text-nocturne-border transition group-hover:text-nocturne-amber" aria-hidden="true">
                  -&gt;
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <section className="border-t border-nocturne-border py-12 text-center">
      <h2 className="mb-6 text-2xl font-semibold text-nocturne-cream">{techStackPage.cta.title}</h2>
      <Button as={Link} to={techStackPage.cta.action.path} className="px-8 py-4">
        {techStackPage.cta.action.label}
      </Button>
    </section>
  )
}

export default function TechStackPage() {
  const toolkitGroups = coreToolkit
  const appliedProjects = featuredProjects.filter((project) => project.isFeatured).slice(0, 3)

  return (
    <>
      <PageHero />
      {toolkitGroups.length ? (
        <CoreToolkitSection groups={toolkitGroups} />
      ) : (
        <EmptyState message="No tech stack items are available yet." />
      )}
      <RevealOnScroll>
        <InteractiveSkillMap />
      </RevealOnScroll>
      <AppliedProjectsSection projects={appliedProjects} />
      <RevealOnScroll>
        <BottomCta />
      </RevealOnScroll>
    </>
  )
}
