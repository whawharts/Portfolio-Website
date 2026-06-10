import { useState } from 'react'
import {
  SiCss,
  SiClaude,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiGooglegemini,
} from 'react-icons/si'
import { MdAutoAwesome, MdOutlineSecurity } from 'react-icons/md'
import { TbApi, TbDatabase, TbPointer, TbSql } from 'react-icons/tb'
import { VscCode, VscTerminal } from 'react-icons/vsc'
import RevealOnScroll from './RevealOnScroll'

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  Flutter: SiFlutter,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'REST APIs': TbApi,
  'Auth Basics': MdOutlineSecurity,
  SQL: TbSql,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  'Git / GitHub': SiGithub,
  'VS Code': VscCode,
  Figma: SiFigma,
  Vercel: SiVercel,
  Vite: SiVite,
  Claude: SiClaude,
  'Claude Code': VscTerminal,
  ChatGPT: SiOpenai,
  Codex: VscCode,
  Gemini: SiGooglegemini,
  'Stitch AI': MdAutoAwesome,
  Cursor: TbPointer,
}

const skillColors = {
  HTML: '#e34f26',
  CSS: '#1572b6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'Tailwind CSS': '#06b6d4',
  Flutter: '#54c5f8',
  'Node.js': '#5fa04e',
  Express: '#f5f5f5',
  'REST APIs': '#00c7b7',
  'Auth Basics': '#e06f5f',
  SQL: '#4479a1',
  PostgreSQL: '#4169e1',
  Prisma: '#8b9cf7',
  Supabase: '#3ecf8e',
  Firebase: '#ffca28',
  Git: '#f05032',
  GitHub: '#f5f5f5',
  'Git / GitHub': '#f5f5f5',
  'VS Code': '#23a8f2',
  Figma: '#f24e1e',
  Vercel: '#f5f5f5',
  Vite: '#8b5cf6',
  Claude: '#d97757',
  'Claude Code': '#e89572',
  ChatGPT: '#10a37f',
  Codex: '#ffc880',
  Gemini: '#8e75ff',
  'Stitch AI': '#4f9cf9',
  Cursor: '#f5f5f5',
}

const fallbackIcon = TbDatabase

function SkillTile({ skill }) {
  const Icon = skillIcons[skill.name] || fallbackIcon
  const skillColor = skillColors[skill.name] || '#ffc880'

  return (
    <div
      className="group/skill relative flex min-h-20 flex-col items-center justify-center overflow-hidden rounded-lg border border-nocturne-border bg-nocturne-bg/65 px-2.5 py-3 text-center transition duration-300 ease-out hover:-translate-y-1 hover:border-nocturne-amber-border hover:bg-nocturne-card hover:shadow-[0_12px_32px_rgba(0,0,0,0.34),0_0_24px_rgba(245,166,35,0.12)]"
      style={{ '--skill-color': skillColor }}
    >
      <div
        className="absolute inset-x-3 top-0 h-px origin-center scale-x-0 transition-transform duration-300 group-hover/skill:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${skillColor}, transparent)`,
        }}
      />
      <div className="tech-skill-bloom absolute -top-8 h-16 w-16 rounded-full opacity-0 blur-2xl transition duration-300 group-hover/skill:opacity-100" />
      <Icon
        className="tech-skill-icon relative z-10 text-[26px] transition duration-300 group-hover/skill:scale-110"
        aria-hidden="true"
      />
      <span className="relative z-10 mt-2 font-label text-[10px] text-nocturne-muted transition group-hover/skill:text-nocturne-cream">
        {skill.name}
      </span>
    </div>
  )
}

function SkillGroup({ group, compact = false, isActive, onActivate, onDeactivate }) {
  const hasMoreSkills = group.items.length > 4

  return (
    <article
      className={[
        'tech-category-card group/category relative flex flex-col overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-card-muted p-4 transition duration-500 hover:border-nocturne-amber-border hover:shadow-[0_24px_70px_rgba(0,0,0,0.28),0_0_38px_rgba(245,166,35,0.08)] focus-visible:border-nocturne-amber-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nocturne-amber',
        isActive ? 'is-active' : '',
      ].join(' ')}
      tabIndex={hasMoreSkills ? 0 : undefined}
      onMouseEnter={hasMoreSkills ? onActivate : undefined}
      onMouseLeave={hasMoreSkills ? onDeactivate : undefined}
      onFocus={hasMoreSkills ? onActivate : undefined}
      onBlur={hasMoreSkills ? onDeactivate : undefined}
      aria-label={
        hasMoreSkills
          ? `${group.category}: hover or focus to reveal ${group.items.length - 4} more technologies`
          : undefined
      }
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-nocturne-amber/0 blur-[70px] transition duration-500 group-hover/category:bg-nocturne-amber/10" />
      <div className="relative z-10 mb-4 flex min-h-7 items-start gap-2.5">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-nocturne-amber shadow-[0_0_12px_rgba(245,166,35,0.38)]" />
        <div className="min-w-0">
          <h3 className="font-label text-xs font-semibold uppercase tracking-[0.1em] text-nocturne-cream">
            {group.category}
          </h3>
          {!compact ? (
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-nocturne-muted">{group.summary}</p>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2.5">
        {group.items.map((skill, index) => (
          <div
            key={`${group.category}-${skill.name}`}
            className={index >= 4 ? 'tech-extra-skill' : ''}
          >
            <SkillTile skill={skill} />
          </div>
        ))}
      </div>

      {hasMoreSkills ? (
        <p className="tech-hover-hint relative z-10 mt-auto border-t border-nocturne-border pt-4 text-center font-label text-[9px] uppercase tracking-[0.1em] text-nocturne-muted">
          Hover to reveal {group.items.length - 4} more
        </p>
      ) : (
        <div className="mt-auto pt-4" aria-hidden="true" />
      )}
    </article>
  )
}

export default function TechStackShowcase({ groups, compact = false }) {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {groups.map((group, index) => (
        <RevealOnScroll key={group.category} delay={(index % 5) * 50}>
          <SkillGroup
            group={group}
            compact={compact}
            isActive={activeCategory === group.category}
            onActivate={() => setActiveCategory(group.category)}
            onDeactivate={() =>
              setActiveCategory((currentCategory) =>
                currentCategory === group.category ? null : currentCategory,
              )
            }
          />
        </RevealOnScroll>
      ))}
    </div>
  )
}
