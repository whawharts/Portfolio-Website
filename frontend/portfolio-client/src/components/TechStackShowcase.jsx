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
import { MdAutoAwesome, MdHub, MdOutlineSecurity } from 'react-icons/md'
import { TbApi, TbDatabase, TbPointer, TbRelationManyToMany, TbSql } from 'react-icons/tb'
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
  Middleware: MdHub,
  'Auth Basics': MdOutlineSecurity,
  SQL: TbSql,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  'Data Modeling': TbRelationManyToMany,
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
  Middleware: '#a78bfa',
  'Auth Basics': '#e06f5f',
  SQL: '#4479a1',
  PostgreSQL: '#4169e1',
  Prisma: '#8b9cf7',
  'Data Modeling': '#f59e0b',
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
      className="group/skill relative flex min-h-24 flex-col items-center justify-center overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-bg/65 px-3 py-4 text-center transition duration-300 ease-out hover:-translate-y-1 hover:border-nocturne-amber-border hover:bg-nocturne-card hover:shadow-[0_12px_32px_rgba(0,0,0,0.34),0_0_24px_rgba(245,166,35,0.12)]"
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
        className="tech-skill-icon relative z-10 text-[30px] transition duration-300 group-hover/skill:scale-110"
        aria-hidden="true"
      />
      <span className="relative z-10 mt-3 font-label text-[11px] text-nocturne-muted transition group-hover/skill:text-nocturne-cream">
        {skill.name}
      </span>
    </div>
  )
}

function SkillGroup({ group, compact = false }) {
  return (
    <article className="group/category relative overflow-hidden rounded-2xl border border-nocturne-border bg-nocturne-card-muted p-5 transition duration-500 hover:border-nocturne-amber-border hover:shadow-[0_24px_70px_rgba(0,0,0,0.28),0_0_38px_rgba(245,166,35,0.08)] md:p-7">
      <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-nocturne-amber/0 blur-[70px] transition duration-500 group-hover/category:bg-nocturne-amber/10" />
      <div className="relative z-10 mb-6 flex items-start gap-3">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-nocturne-amber shadow-[0_0_12px_rgba(245,166,35,0.38)]" />
        <div>
          <h3 className="font-label text-sm font-semibold uppercase tracking-[0.12em] text-nocturne-cream">
            {group.category}
          </h3>
          {!compact ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-nocturne-muted">{group.summary}</p>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
        {group.items.map((skill) => (
          <SkillTile key={`${group.category}-${skill.name}`} skill={skill} />
        ))}
      </div>
    </article>
  )
}

export default function TechStackShowcase({ groups, compact = false }) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, index) => (
        <RevealOnScroll key={group.category} delay={(index % 3) * 50}>
          <SkillGroup group={group} compact={compact} />
        </RevealOnScroll>
      ))}
    </div>
  )
}
