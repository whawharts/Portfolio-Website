import { Link } from 'react-router-dom'
import {
  activeLearningFocus,
  coreToolkit,
  featuredProjects,
  techStackPage,
  workflowSteps,
} from '../data/mockPortfolioData'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import { EmptyState } from '../components/ui/PageState'

function SectionTitle({ title }) {
  return (
    <div className="mb-8 inline-block border-b border-nocturne-border pb-4">
      <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">{title}</h2>
    </div>
  )
}

function PageHero() {
  const { hero } = techStackPage

  return (
    <header className="mb-[120px] max-w-3xl pt-6">
      <HeroEyebrow className="mb-6 bg-nocturne-panel">{hero.eyebrow}</HeroEyebrow>
      <h1 className="text-[40px] font-bold leading-tight text-nocturne-cream md:text-[64px]">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </header>
  )
}

function ToolkitItem({ item }) {
  return (
    <span className="rounded-lg border border-nocturne-border bg-nocturne-bg/45 px-3.5 py-2 font-label text-sm text-nocturne-cream transition hover:border-nocturne-amber-border hover:bg-nocturne-amber-soft hover:shadow-[0_0_18px_rgba(245,166,35,0.16)]">
      {item.name}
    </span>
  )
}

function ToolkitCard({ group }) {
  return (
    <Card className="group relative overflow-hidden bg-nocturne-card-muted p-0">
      <div className="absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-nocturne-amber/60 to-transparent" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-nocturne-amber/5 blur-2xl transition group-hover:bg-nocturne-amber/10" />
      <div className="relative z-10 grid gap-7 p-6 md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-bg/70 font-label text-sm text-nocturne-amber shadow-[inset_0_0_18px_rgba(245,166,35,0.06)]">
              {group.category.slice(0, 2)}
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-normal text-nocturne-amber">
                Core toolkit
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-nocturne-cream">
                {group.category}
              </h3>
            </div>
          </div>
          <p className="leading-7 text-nocturne-muted">{group.summary}</p>
        </div>
        <div className="rounded-xl border border-nocturne-border bg-nocturne-surface/55 p-4 md:p-5">
          <div className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <ToolkitItem key={`${group.category}-${item.name}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

function normalizeToolkitGroups(groups) {
  return groups.map((group) => {
    const fallback = coreToolkit.find(
      (item) => item.category.toLowerCase() === group.category.toLowerCase(),
    )

    return {
      category: fallback?.category || group.category,
      summary: fallback?.summary || 'Tools currently used in the portfolio workflow.',
      items: group.items.map((item) => ({
        name: item.name,
      })),
    }
  })
}

function CoreToolkitSection({ groups }) {
  return (
    <section className="mb-[120px]">
      <SectionTitle title={techStackPage.toolkitTitle} />
      <div className="flex flex-col gap-6">
        {groups.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 75}>
            <ToolkitCard group={group} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function LearningFocusSection() {
  return (
    <section className="mb-[120px]">
      <SectionTitle title={techStackPage.learningTitle} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {activeLearningFocus.map((focus, index) => (
          <RevealOnScroll key={focus.title} delay={index * 75} className="h-full">
            <Card className="h-full bg-nocturne-surface p-6 hover:-translate-y-1">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-nocturne-amber-border bg-nocturne-card font-label text-nocturne-amber">
                ..
              </div>
              <h3 className="mb-3 text-lg font-semibold text-nocturne-cream">{focus.title}</h3>
              <p className="text-sm leading-6 text-nocturne-muted">{focus.summary}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section className="mb-[120px]">
      <SectionTitle title={techStackPage.workflowTitle} />
      <RevealOnScroll>
        <Card className="relative p-6 md:p-10">
          <div className="absolute left-12 right-12 top-1/2 z-0 hidden h-px -translate-y-1/2 bg-nocturne-border lg:block" />
          <div className="relative z-10 grid gap-8 md:grid-cols-5">
            {workflowSteps.map((step) => (
              <div key={step.step} className="group flex flex-col items-start md:items-center md:text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-nocturne-border bg-nocturne-card transition group-hover:border-nocturne-amber group-hover:shadow-nocturne-glow">
                  <span className="font-label text-sm text-nocturne-muted transition group-hover:text-nocturne-amber">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 font-label text-sm text-nocturne-cream">{step.title}</h3>
                <p className="text-xs leading-5 text-nocturne-muted">{step.summary}</p>
              </div>
            ))}
          </div>
        </Card>
      </RevealOnScroll>
    </section>
  )
}

function AppliedProjectsSection({ projects }) {
  return (
    <section className="mb-[120px]">
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
    <section className="border-t border-nocturne-border py-16 text-center">
      <h2 className="mb-6 text-2xl font-semibold text-nocturne-cream">{techStackPage.cta.title}</h2>
      <Button as={Link} to={techStackPage.cta.action.path} className="px-8 py-4">
        {techStackPage.cta.action.label}
      </Button>
    </section>
  )
}

export default function TechStackPage() {
  const toolkitGroups = normalizeToolkitGroups(coreToolkit)
  const appliedProjects = featuredProjects.filter((project) => project.isFeatured).slice(0, 3)

  return (
    <>
      <PageHero />
      {toolkitGroups.length ? (
        <CoreToolkitSection groups={toolkitGroups} />
      ) : (
        <EmptyState message="No tech stack items are available yet." />
      )}
      <LearningFocusSection />
      <WorkflowSection />
      <AppliedProjectsSection projects={appliedProjects} />
      <RevealOnScroll>
        <BottomCta />
      </RevealOnScroll>
    </>
  )
}
