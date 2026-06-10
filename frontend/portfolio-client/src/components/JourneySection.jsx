import { useEffect, useRef, useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const journeyMilestones = [
  {
    year: '2022',
    title: 'Started as a BSCS Student',
    description:
      'My second life began when I started studying Bachelor of Science in Computer Science at AU Pasay and took my first serious steps into technology.',
    tags: ['AU Pasay', 'BSCS', 'Foundations'],
  },
  {
    year: '2023',
    title: 'Learning Through Failure',
    description:
      'Bad habits died hard. I spent much of the year trying to learn game development, but I struggled to turn that effort into something complete.',
    tags: ['Game Development', 'Self-Learning', 'Resilience'],
  },
  {
    year: '2024',
    title: 'Picking Myself Up',
    description:
      'I began rebuilding myself by learning everything I could, exploring software development, and becoming more intentional with my time and direction.',
    tags: ['Web Development', 'Programming', 'Growth'],
  },
  {
    year: '2025',
    title: 'Hard Reset and Mobile Development',
    description:
      'A disaster changed my life in an instant. While trying to begin again, I explored mobile development using Flutter and other frameworks.',
    tags: ['Flutter', 'Mobile Apps', 'Frameworks'],
  },
  {
    year: '2026',
    title: 'Internship and AI',
    description:
      'I am still recovering, but things are starting to get better. My internship introduced me to AI, and now I spend my days and nights learning, testing experiments, and building new things.',
    tags: ['Internship', 'AI Engineering', 'Experiments'],
    current: true,
  },
]

function MilestoneCard({ milestone, isActive = false }) {
  return (
    <article
      className={[
        'group relative overflow-hidden rounded-lg border bg-nocturne-card-muted p-5 transition duration-500',
        isActive
          ? '-translate-y-1 border-nocturne-amber-border shadow-[0_18px_48px_rgba(0,0,0,0.34),0_0_34px_rgba(245,166,35,0.2)]'
          : 'border-nocturne-border hover:-translate-y-1 hover:border-nocturne-amber-border hover:shadow-[0_16px_42px_rgba(0,0,0,0.3),0_0_26px_rgba(245,166,35,0.08)]',
      ].join(' ')}
    >
      <span
        className={[
          'pointer-events-none absolute inset-x-0 top-0 h-px transition duration-500',
          isActive
            ? 'bg-gradient-to-r from-transparent via-nocturne-amber to-transparent opacity-100'
            : 'opacity-0',
        ].join(' ')}
        aria-hidden="true"
      />
      <span
        className={[
          'pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-nocturne-amber/10 blur-[55px] transition duration-500',
          isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
        ].join(' ')}
        aria-hidden="true"
      />
      <div className="flex items-center justify-between gap-4">
        <p className="font-label text-[9px] uppercase tracking-[0.12em] text-nocturne-amber">
          Chapter {milestone.year}
        </p>
        {milestone.current ? (
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 font-label text-[8px] uppercase tracking-normal text-emerald-400">
            Current
          </span>
        ) : null}
      </div>
      <h3
        className={[
          'relative mt-3 text-lg font-semibold leading-6 transition',
          isActive ? 'text-nocturne-amber' : 'text-nocturne-cream group-hover:text-nocturne-amber',
        ].join(' ')}
      >
        {milestone.title}
      </h3>
      <p className="relative mt-3 text-sm leading-6 text-nocturne-muted">
        {milestone.description}
      </p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {milestone.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-nocturne-border bg-nocturne-bg/70 px-2 py-1 font-label text-[8px] uppercase tracking-normal text-nocturne-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function JourneySection() {
  const timelineRef = useRef(null)
  const milestoneRefs = useRef([])
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0)
  const [trackBounds, setTrackBounds] = useState({ start: 0, end: 0 })
  const [milestonePositions, setMilestonePositions] = useState([])

  useEffect(() => {
    let animationFrame = null

    function updateTimelineProgress() {
      const timeline = timelineRef.current

      if (!timeline) {
        return
      }

      const rect = timeline.getBoundingClientRect()
      const firstMilestone = milestoneRefs.current[0]
      const lastMilestone = milestoneRefs.current[journeyMilestones.length - 1]

      if (!firstMilestone || !lastMilestone) {
        return
      }

      const firstRect = firstMilestone.getBoundingClientRect()
      const lastRect = lastMilestone.getBoundingClientRect()
      const firstCenter = firstRect.top + firstRect.height / 2
      const lastCenter = lastRect.top + lastRect.height / 2
      const start = firstCenter - rect.top
      const end = lastCenter - rect.top
      const viewportAnchor = window.innerHeight * 0.55
      const positions = milestoneRefs.current.map((milestone) => {
        const milestoneRect = milestone.getBoundingClientRect()
        return milestoneRect.top + milestoneRect.height / 2 - rect.top
      })
      const activeIndex = positions.reduce((closestIndex, position, index) => {
        const absolutePosition = rect.top + position
        const closestPosition = rect.top + positions[closestIndex]

        return Math.abs(absolutePosition - viewportAnchor) <
          Math.abs(closestPosition - viewportAnchor)
          ? index
          : closestIndex
      }, 0)

      setActiveMilestoneIndex(activeIndex)
      setMilestonePositions((currentPositions) =>
        currentPositions.length !== positions.length ||
        positions.some(
          (position, index) =>
            currentPositions[index] === undefined ||
            Math.abs(position - currentPositions[index]) > 0.5,
        )
          ? positions
          : currentPositions,
      )
      setTrackBounds((currentBounds) =>
        Math.abs(currentBounds.start - start) > 0.5 || Math.abs(currentBounds.end - end) > 0.5
          ? { start, end }
          : currentBounds,
      )
    }

    function handleScroll() {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(() => {
        updateTimelineProgress()
        animationFrame = null
      })
    }

    updateTimelineProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <section className="border-t border-nocturne-border/70 py-14 md:py-18">
      <RevealOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-nocturne-amber">
            My Journey
          </p>
          <h2 className="section-label-line section-label-line-centered mt-3 text-3xl font-semibold leading-tight text-nocturne-cream md:text-4xl">
            The Journey
          </h2>
          <p className="mt-7 text-sm leading-6 text-nocturne-muted">
            Tracing the setbacks, lessons, and discoveries that continue to shape how I
            learn, think, and build.
          </p>
        </div>
      </RevealOnScroll>

      <div ref={timelineRef} className="relative mx-auto mt-12 max-w-5xl">
        <div
          className="absolute left-[0.45rem] w-px bg-nocturne-border md:left-1/2 md:-translate-x-1/2"
          style={{
            top: trackBounds.start,
            height: Math.max(trackBounds.end - trackBounds.start, 0),
          }}
          aria-hidden="true"
        />
        <div
          className="journey-progress-line pointer-events-none absolute left-[0.45rem] z-[1] w-px bg-gradient-to-b from-emerald-300/35 via-emerald-400 to-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.35)] md:left-1/2 md:-translate-x-1/2"
          style={{
            top: trackBounds.start,
            height: Math.max(
              (milestonePositions[activeMilestoneIndex] ?? trackBounds.start) -
                trackBounds.start,
              0,
            ),
          }}
          aria-hidden="true"
        />
        <div
          className="journey-traveler pointer-events-none absolute left-[0.45rem] z-20 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
          style={{
            top: milestonePositions[activeMilestoneIndex] ?? trackBounds.start,
          }}
          aria-hidden="true"
        >
          <span className="absolute inset-[-0.7rem] rounded-full bg-emerald-400/10 blur-md" />
          <span className="absolute inset-[-0.45rem] animate-ping rounded-full border border-emerald-400/35 motion-reduce:animate-none" />
          <span className="absolute inset-[-0.25rem] rounded-full border border-emerald-300/50 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
          <span className="relative block h-3 w-3 rounded-full border-2 border-nocturne-bg bg-emerald-400 shadow-[0_0_8px_#34d399,0_0_22px_rgba(52,211,153,0.9)]" />
        </div>

        <div className="space-y-9 md:space-y-6">
          {journeyMilestones.map((milestone, index) => {
            const cardOnLeft = index % 2 === 0

            return (
              <RevealOnScroll key={milestone.year} delay={index * 70}>
                <div className="relative grid grid-cols-[1.25rem_1fr] gap-4 md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:items-center md:gap-6">
                  <div className="hidden md:col-start-1 md:block">
                    {cardOnLeft ? (
                      <MilestoneCard
                        milestone={milestone}
                        isActive={activeMilestoneIndex === index}
                      />
                    ) : (
                      <p className="text-right text-4xl font-bold text-nocturne-amber/85">
                        {milestone.year}
                      </p>
                    )}
                  </div>

                  <div
                    ref={(element) => {
                      milestoneRefs.current[index] = element
                    }}
                    className="relative z-10 col-start-1 row-start-1 flex h-[0.95rem] w-[0.95rem] items-center justify-center rounded-full border border-nocturne-amber bg-nocturne-bg shadow-[0_0_15px_rgba(245,166,35,0.22)] md:col-start-2 md:mx-auto"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-nocturne-amber" />
                  </div>

                  <div className="col-start-2 row-start-1 md:col-start-3 md:block">
                    <p className="mb-3 text-3xl font-bold text-nocturne-amber/85 md:hidden">
                      {milestone.year}
                    </p>
                    {cardOnLeft ? (
                      <p className="hidden text-left text-4xl font-bold text-nocturne-amber/85 md:block">
                        {milestone.year}
                      </p>
                    ) : (
                      <div className="hidden md:block">
                        <MilestoneCard
                          milestone={milestone}
                          isActive={activeMilestoneIndex === index}
                        />
                      </div>
                    )}
                    <div className="md:hidden">
                      <MilestoneCard
                        milestone={milestone}
                        isActive={activeMilestoneIndex === index}
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
