import { Link } from 'react-router-dom'
import {
  aboutPage,
  developerValues,
} from '../data/mockPortfolioData'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import BiographySection from '../components/BiographySection'
import JourneySection from '../components/JourneySection'

function SectionTitle({ title, centered = false }) {
  return (
    <div className={['mb-8', centered ? 'text-center' : ''].join(' ')}>
      <h2
        className={[
          'section-label-line text-[28px] font-semibold leading-9 text-nocturne-cream',
          centered ? 'section-label-line-centered' : '',
        ].join(' ')}
      >
        {title}
      </h2>
    </div>
  )
}

function PageHero() {
  const { hero } = aboutPage

  return (
    <section className="mt-4 flex max-w-4xl flex-col items-start gap-4 md:mt-8">
      <HeroEyebrow className="mb-1" textClassName="text-xs uppercase tracking-normal text-nocturne-amber">
        {hero.eyebrow}
      </HeroEyebrow>
      <h1 className="text-[38px] font-bold leading-tight text-nocturne-cream md:text-[52px]">
        {hero.title}
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </section>
  )
}

function FocusSection() {
  return (
    <section>
      <SectionTitle title="My Goal" />
      <RevealOnScroll>
        <Card className="relative overflow-hidden p-6 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-nocturne-amber/10 blur-[80px]" />
          <p className="relative z-10 max-w-4xl text-lg leading-8 text-nocturne-muted md:text-xl md:leading-9">
            To be able to create apps and systems that were once only ideas, while continuing
            to improve my skills and thinking ability.
          </p>
        </Card>
      </RevealOnScroll>
    </section>
  )
}

function ValuesSection() {
  return (
    <section>
      <SectionTitle title={aboutPage.valuesTitle} centered />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {developerValues.map((value, index) => (
          <RevealOnScroll key={value} delay={(index % 5) * 50}>
            <div
              className="flex items-center gap-2 rounded-lg border border-nocturne-border bg-nocturne-panel px-4 py-3 text-sm text-nocturne-cream transition hover:bg-nocturne-card"
            >
              <span className="block h-2 w-2 rounded-full bg-nocturne-amber" />
              {value}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <RevealOnScroll>
      <Card className="flex flex-col items-center gap-5 p-7 text-center md:p-9">
        <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">{aboutPage.cta.title}</h2>
        <p className="max-w-xl text-lg leading-8 text-nocturne-muted">{aboutPage.cta.message}</p>
        <Button as={Link} to={aboutPage.cta.action.path} className="px-8 py-4">
          {aboutPage.cta.action.label}
        </Button>
      </Card>
    </RevealOnScroll>
  )
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <PageHero />
      <BiographySection />
      <JourneySection />
      <FocusSection />
      <ValuesSection />
      <BottomCta />
    </div>
  )
}
