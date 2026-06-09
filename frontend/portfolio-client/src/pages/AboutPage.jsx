import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub } from 'react-icons/si'
import {
  aboutPage,
  developerValues,
  profile,
} from '../data/mockPortfolioData'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import RevealOnScroll from '../components/RevealOnScroll'

const socialIcons = {
  facebook: SiFacebook,
  github: SiGithub,
  linkedin: FaLinkedin,
}

function SectionTitle({ title, centered = false }) {
  return (
    <div className={['mb-12', centered ? 'text-center' : ''].join(' ')}>
      <h2
        className={[
          'section-label-line text-[32px] font-semibold leading-10 text-nocturne-cream',
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
  const aboutAvatarUrl = '/images/profile/2.png'
  const hasAvatar = !isPlaceholderUrl(aboutAvatarUrl)

  return (
    <div className="relative flex min-h-[360px] items-center justify-center">
      {hasAvatar ? (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.18)_0%,rgba(245,166,35,0.07)_38%,transparent_72%)] blur-2xl"
            aria-hidden="true"
          />
          <img
            src={aboutAvatarUrl}
            alt={`${profileData.name || 'Profile'} portrait`}
            className="relative z-10 w-full max-w-sm object-contain"
          />
        </>
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
        <p className="text-2xl font-semibold leading-9 text-nocturne-cream">
          My name is John Joseph Sotomil.
        </p>
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
        <div className="flex flex-wrap gap-3 pt-2">
          {profileData.socialLinks.map((social) => {
            const SocialIcon = socialIcons[social.platform]

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-card-muted text-nocturne-muted transition duration-300 hover:-translate-y-1 hover:border-nocturne-amber-border hover:text-nocturne-amber hover:shadow-nocturne-glow"
                aria-label={`Visit my ${social.platform} profile`}
                title={social.platform}
              >
                {SocialIcon ? (
                  <SocialIcon
                    className="text-lg transition duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                ) : (
                  social.label
                )}
              </a>
            )
          })}
        </div>
      </div>
      <AvatarFrame profileData={profileData} />
    </section>
  )
}

function FocusSection() {
  return (
    <section>
      <SectionTitle title="My Goal" />
      <RevealOnScroll>
        <Card className="relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-nocturne-amber/10 blur-[80px]" />
          <p className="relative z-10 max-w-4xl text-xl leading-9 text-nocturne-muted md:text-2xl md:leading-10">
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
  return (
    <div className="flex flex-col gap-[120px]">
      <PageHero />
      <StorySection profileData={profile} />
      <FocusSection />
      <ValuesSection />
      <BottomCta />
    </div>
  )
}
