import { coreToolkit, featuredProjects, profile } from '../data/mockPortfolioData'
import RevealOnScroll from './RevealOnScroll'

export default function BiographySection() {
  const practicedTechCount = new Set(
    coreToolkit.flatMap((group) => group.items.map((item) => item.name)),
  ).size
  const metrics = [
    { value: featuredProjects.length, label: 'Projects Built' },
    { value: practicedTechCount, label: 'Technologies Practiced' },
    { value: 'AI', label: 'Engineering Focus' },
  ]

  return (
    <section className="border-y border-nocturne-border/70 py-14 md:py-18">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr_0.55fr] lg:gap-12">
        <RevealOnScroll>
          <div className="max-w-xl">
            <p className="section-label-line font-label text-xs font-semibold uppercase tracking-[0.12em] text-nocturne-amber">
              Biography
            </p>
            <h2 className="mt-8 text-2xl font-semibold leading-tight text-nocturne-cream">
              My name is John Joseph Sotomil.
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-nocturne-muted">
              <p>
                I am a Computer Science student who builds thoughtful, responsive web
                experiences and mobile applications with AI.
              </p>
              <p>{profile.longBio}</p>
              <p>
                My goal is to turn ideas into working apps and systems while continuously
                improving my skills and thinking ability.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="relative mx-auto w-full max-w-[19rem]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.2)_0%,rgba(245,166,35,0.08)_42%,transparent_72%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-xl border border-nocturne-amber-border bg-nocturne-panel p-2 shadow-[8px_8px_0_rgba(245,166,35,0.16)]">
              <div className="relative overflow-hidden rounded-lg bg-nocturne-bg">
                <img
                  src="/images/profile/2.png"
                  alt="John Joseph Sotomil portrait"
                  className="aspect-[4/5] w-full object-contain object-bottom"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-b from-transparent to-nocturne-bg/85"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-4 border-t border-nocturne-border pt-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {metrics.map((metric, index) => (
            <RevealOnScroll key={metric.label} delay={120 + index * 60}>
              <div className="text-center lg:py-4">
                <p className="text-3xl font-bold leading-none text-nocturne-cream md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-label text-[9px] uppercase leading-4 tracking-normal text-nocturne-muted md:text-[10px]">
                  {metric.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
