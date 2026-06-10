import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub } from 'react-icons/si'
import { contactPage, profile } from '../data/mockPortfolioData'
import RevealOnScroll from '../components/RevealOnScroll'
import ArrowLink from '../components/ui/ArrowLink'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroEyebrow from '../components/ui/HeroEyebrow'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Textarea from '../components/ui/Textarea'

function isPlaceholderUrl(url) {
  return !url || url === '#'
}

const socialIcons = {
  facebook: SiFacebook,
  github: SiGithub,
  linkedin: FaLinkedin,
}

function PageHero() {
  const { hero } = contactPage
  const parts = hero.title.split(hero.highlightedWord)

  return (
    <section className="max-w-3xl">
      <HeroEyebrow className="mb-6" textClassName="text-xs uppercase tracking-normal">
        {hero.eyebrow}
      </HeroEyebrow>
      <h1 className="text-[38px] font-bold leading-tight text-nocturne-cream md:text-[52px]">
        {parts[0]}
        <span className="text-nocturne-amber italic">{hero.highlightedWord}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-nocturne-muted">{hero.intro}</p>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-label text-sm text-nocturne-muted">{label}</span>
      {children}
    </label>
  )
}

function ContactForm() {
  const [statusMessage, setStatusMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    setStatusMessage('')
    setFieldErrors([])

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      projectType: String(formData.get('projectType') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    }

    const errors = []

    if (payload.name.length < 2) {
      errors.push({ field: 'name', message: 'Please enter your name.' })
    }

    if (!payload.email.includes('@')) {
      errors.push({ field: 'email', message: 'Please enter a valid email address.' })
    }

    if (!payload.projectType) {
      errors.push({ field: 'projectType', message: 'Please choose a project type.' })
    }

    if (payload.message.length < 10) {
      errors.push({ field: 'message', message: 'Please share a few more details.' })
    }

    if (errors.length) {
      setFieldErrors(errors)
      setStatusMessage('Please check the highlighted fields.')
      return
    }

    event.currentTarget.reset()
    setStatusMessage(contactPage.form.successMessage)
  }

  return (
    <Card className="p-5 md:p-6">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Name">
            <Input name="name" required />
          </Field>
          <Field label="Email">
            <Input type="email" name="email" required />
          </Field>
        </div>
        <Field label="Project Type">
          <Select name="projectType">
            {contactPage.form.projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-nocturne-card text-nocturne-cream">
                {type.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Message">
          <Textarea name="message" rows={5} required className="resize-none" />
        </Field>
        <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center">
          <Button type="submit" className="w-full px-8 py-3 md:w-auto">
            Send Message
          </Button>
          {statusMessage ? (
            <p className="text-sm leading-6 text-nocturne-muted" role="status">
              {statusMessage}
            </p>
          ) : null}
        </div>
        {fieldErrors.length ? (
          <ul className="space-y-2 border-l-2 border-[var(--color-error)]/50 pl-4">
            {fieldErrors.map((error) => (
              <li key={`${error.field}-${error.message}`} className="text-sm text-[var(--color-error)]">
                {error.message}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </Card>
  )
}

function ContactInfo({ profileData }) {
  return (
    <aside className="flex flex-col gap-6">
      <Card className="flex flex-col gap-4 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-nocturne-border bg-nocturne-panel font-label text-nocturne-muted">
          @
        </div>
        <div>
          <h2 className="mb-1 text-2xl font-semibold text-nocturne-cream">{profileData.email}</h2>
          <ArrowLink href={`mailto:${profileData.email}`}>Send Email</ArrowLink>
        </div>
      </Card>

      <div className="px-2">
        <h3 className="mb-4 font-label text-xs uppercase tracking-normal text-nocturne-muted">
          Availability
        </h3>
        <p className="border-l-2 border-nocturne-amber/30 py-1 pl-4 leading-7 text-nocturne-cream">
          {contactPage.info.availability}
        </p>
      </div>

      <div className="px-2">
        <h3 className="mb-4 font-label text-xs uppercase tracking-normal text-nocturne-muted">
          Social
        </h3>
        <div className="flex gap-4">
          {(profileData.socialLinks || contactPage.socialLinks).map((social) => {
            const isPlaceholder = isPlaceholderUrl(social.url)
            const SocialIcon = socialIcons[social.platform]
            const classes = [
              'group flex h-12 w-12 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-card text-nocturne-muted transition duration-300',
              isPlaceholder
                ? 'cursor-not-allowed opacity-70'
                : 'hover:-translate-y-1 hover:border-nocturne-amber-border hover:text-nocturne-amber hover:shadow-nocturne-glow',
            ].join(' ')
            const icon = SocialIcon ? (
              <SocialIcon
                className="text-xl transition duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            ) : (
              <span className="font-label text-sm">{social.label}</span>
            )

            return isPlaceholder ? (
              <span
                key={social.platform}
                className={classes}
                aria-disabled="true"
                title={`${social.platform} link coming soon`}
              >
                {icon}
              </span>
            ) : (
              <a
                key={social.platform}
                href={social.url}
                className={classes}
                aria-label={social.platform}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>

      <p className="mt-auto px-2 italic leading-7 text-nocturne-muted">{contactPage.info.note}</p>
    </aside>
  )
}

function ServicesSection() {
  return (
    <section className="border-t border-nocturne-border/50 pt-9">
      <h2 className="section-label-line mb-8 text-[28px] font-semibold leading-9 text-nocturne-cream">
        {contactPage.servicesTitle}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contactPage.services.map((service, index) => (
          <RevealOnScroll key={service.title} delay={index * 75} className="h-full">
            <Card className="group flex h-full flex-col gap-4 p-6 hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-panel font-label text-sm text-nocturne-muted transition group-hover:border-nocturne-amber-border group-hover:text-nocturne-amber">
                {service.mark}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-nocturne-cream">{service.title}</h3>
                <p className="leading-7 text-nocturne-muted">{service.summary}</p>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <Card className="relative flex flex-col items-start justify-between gap-6 overflow-hidden p-7 md:flex-row md:items-center md:p-9">
      <div className="absolute inset-0 bg-gradient-to-r from-nocturne-amber/5 to-transparent" />
      <div className="relative z-10 max-w-xl">
        <h2 className="mb-4 text-[32px] font-semibold leading-10 text-nocturne-cream">
          {contactPage.cta.title}
        </h2>
        <p className="text-lg leading-8 text-nocturne-muted">{contactPage.cta.message}</p>
      </div>
      <Button as={Link} to={contactPage.cta.action.path} variant="secondary" className="relative z-10 shrink-0 px-8 py-3">
        {contactPage.cta.action.label}
      </Button>
    </Card>
  )
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <PageHero />
      <section className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <RevealOnScroll className="lg:col-span-7">
          <ContactForm />
        </RevealOnScroll>
        <RevealOnScroll delay={75} className="lg:col-span-5">
          <ContactInfo profileData={profile} />
        </RevealOnScroll>
      </section>
      <ServicesSection />
      <RevealOnScroll>
        <BottomCta />
      </RevealOnScroll>
    </div>
  )
}
