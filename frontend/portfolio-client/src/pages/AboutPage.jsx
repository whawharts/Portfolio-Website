import { Link } from 'react-router-dom'
import {
  aboutPage,
  currentFocus,
  currentlyLearning,
  developerValues,
  profile,
  workProcess,
} from '../data/mockPortfolioData'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'
import { ErrorState, LoadingState } from '../components/ui/PageState'
import { useApiResource } from '../hooks/useApiResource'
import { profileApi } from '../services/profileApi'

function SectionTitle({ title, centered = false }) {
  return (
    <div className={['mb-12 flex items-center gap-4', centered ? 'justify-center' : ''].join(' ')}>
      <h2 className="text-[32px] font-semibold leading-10 text-nocturne-cream">{title}</h2>
      {!centered ? (
        <span className="h-px flex-1 bg-gradient-to-r from-nocturne-border to-transparent" />
      ) : null}
    </div>
  )
}

function PageHero() {
  const { hero } = aboutPage

  return (
    <section className="mt-8 flex max-w-4xl flex-col items-start gap-6 md:mt-16">
      <HeroEyebrow className="mb-1" textClassName="text-xs uppercase tracking-normal text-nocturne-amber">
        {hero.eyebrow}
      </HeroEyebrow>
      <h1 className="text-[40px] font-bold leading-tight text-nocturne-cream md:text-[64px]">
        {hero.title}
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </section>
  )
}

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

function AvatarFrame({ profileData }) {
  const hasAvatar = !isPlaceholderUrl(profileData?.avatarUrl)

  return (
    <div className="flex min-h-[360px] items-center justify-center">
      {hasAvatar ? (
        <img
          src={profileData.avatarUrl}
          alt={`${profileData.name || 'Profile'} avatar`}
          className="w-full max-w-sm object-contain"
        />
      ) : null}
    </div>
  )
}

function StorySection({ profileData }) {
  const storyParagraphs = [profileData.shortBio, profileData.longBio].filter(Boolean)

  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="mb-2 h-1 w-12 rounded-full bg-nocturne-amber/20" />
        {storyParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-nocturne-muted">
            {paragraph}
          </p>
        ))}
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-label uppercase tracking-normal text-nocturne-amber">Location</dt>
            <dd className="mt-2 text-nocturne-muted">{profileData.location}</dd>
          </div>
          <div>
            <dt className="font-label uppercase tracking-normal text-nocturne-amber">Availability</dt>
            <dd className="mt-2 text-nocturne-muted">{profileData.availability}</dd>
          </div>
        </dl>
      </div>
      <AvatarFrame profileData={profileData} />
    </section>
  )
}

function FocusSection() {
  return (
    <section>
      <SectionTitle title={aboutPage.focusTitle} />
      <div className="grid gap-6 md:grid-cols-3">
        {currentFocus.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 75} className="h-full">
            <Card className="group flex h-full flex-col gap-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-nocturne-border bg-nocturne-panel font-label text-sm text-nocturne-amber transition group-hover:bg-nocturne-amber-soft">
                {item.title.slice(0, 2)}
              </div>
              <h3 className="text-2xl font-semibold text-nocturne-cream">{item.title}</h3>
              <p className="leading-7 text-nocturne-muted">{item.summary}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section>
      <SectionTitle title={aboutPage.workTitle} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workProcess.map((item, index) => (
          <RevealOnScroll key={item.step} delay={index * 75} className="h-full">
            <Card className="group relative flex min-h-40 flex-col justify-end overflow-hidden p-6 pr-20">
              <span className="absolute right-5 top-5 rounded border border-nocturne-amber-border bg-nocturne-amber-soft px-2.5 py-1 font-label text-sm text-nocturne-amber">
                {item.step}
              </span>
              <h3 className="relative z-10 text-2xl font-semibold leading-8 text-nocturne-cream">
                {item.title}
              </h3>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
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
              className="flex items-center gap-2 rounded-xl border border-nocturne-border bg-nocturne-panel px-5 py-4 text-nocturne-cream transition hover:bg-nocturne-card"
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

function LearningSection() {
  return (
    <RevealOnScroll>
      <Card className="p-8 md:p-12">
        <h2 className="mb-8 text-2xl font-semibold text-nocturne-cream">{aboutPage.learningTitle}</h2>
        <div className="flex flex-wrap gap-3">
          {currentlyLearning.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Card>
    </RevealOnScroll>
  )
}

function BottomCta() {
  return (
    <RevealOnScroll>
      <Card className="flex flex-col items-center gap-6 p-8 text-center md:p-12">
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
  const { data: profileData, error, isLoading } = useApiResource(() => profileApi.getProfile())

  return (
    <div className="flex flex-col gap-[120px]">
      <PageHero />
      {isLoading ? <LoadingState message="Loading profile data from the API..." /> : null}
      {error ? <ErrorState message={error.message} /> : null}
      <StorySection profileData={profileData || profile} />
      <FocusSection />
      <WorkSection />
      <ValuesSection />
      <LearningSection />
      <BottomCta />
    </div>
  )
}
