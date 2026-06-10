import { useEffect, useRef, useState } from 'react'
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'
import { MdCloudUpload, MdHub, MdWeb } from 'react-icons/md'
import { TbApi, TbDatabase, TbServer, TbTools } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

const nodeIcons = {
  core: MdHub,
  frontend: MdWeb,
  backend: TbServer,
  database: TbDatabase,
  deployment: MdCloudUpload,
  tools: TbTools,
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  flutter: SiFlutter,
  node: SiNodedotjs,
  express: SiExpress,
  rest: TbApi,
  supabase: SiSupabase,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  vercel: SiVercel,
  railway: SiRailway,
  git: SiGit,
  github: SiGithub,
  vscode: VscCode,
}

const nodeColors = {
  core: '#ffc880',
  frontend: '#ffc880',
  backend: '#ffc880',
  database: '#ffc880',
  deployment: '#ffc880',
  tools: '#ffc880',
  html: '#e34f26',
  css: '#1572b6',
  javascript: '#f7df1e',
  react: '#61dafb',
  tailwind: '#06b6d4',
  flutter: '#54c5f8',
  node: '#5fa04e',
  express: '#f5f5f5',
  rest: '#00c7b7',
  supabase: '#3ecf8e',
  postgresql: '#4169e1',
  firebase: '#ffca28',
  vercel: '#f5f5f5',
  railway: '#a855f7',
  git: '#f05032',
  github: '#f5f5f5',
  vscode: '#23a8f2',
}

const familyMotion = {
  core: { x: 0, y: -0.65, duration: 6.8 },
  frontend: { x: -0.55, y: -0.45, duration: 6.2 },
  backend: { x: 0.55, y: -0.4, duration: 6.5 },
  database: { x: 0.5, y: 0.45, duration: 6.9 },
  deployment: { x: 0.25, y: 0.55, duration: 7.2 },
  tools: { x: -0.5, y: 0.4, duration: 6.7 },
}

const skillNodes = [
  {
    id: 'core',
    name: 'Core Toolkit',
    kind: 'core',
    description:
      'The full set of technologies I use to plan, build, style, connect, and deploy projects.',
    desktop: { x: 50, y: 49 },
    mobile: { x: 50, y: 7 },
  },
  {
    id: 'frontend',
    name: 'Frontend',
    kind: 'category',
    parent: 'core',
    description:
      'The visible interface layer: structure, styling, state, and responsive interaction.',
    desktop: { x: 20, y: 22 },
    mobile: { x: 50, y: 17 },
  },
  {
    id: 'backend',
    name: 'Backend',
    kind: 'category',
    parent: 'core',
    description:
      'The server layer for routes, validation, API structure, and application logic.',
    desktop: { x: 80, y: 21 },
    mobile: { x: 50, y: 41 },
  },
  {
    id: 'database',
    name: 'Database',
    kind: 'category',
    parent: 'core',
    description:
      'The data layer for storing, organizing, and retrieving application information.',
    desktop: { x: 84, y: 60 },
    mobile: { x: 50, y: 58 },
  },
  {
    id: 'deployment',
    name: 'Deployment',
    kind: 'category',
    parent: 'core',
    description: 'The publishing layer that makes the website accessible online.',
    desktop: { x: 64, y: 85 },
    mobile: { x: 28, y: 75 },
  },
  {
    id: 'tools',
    name: 'Tools',
    kind: 'category',
    parent: 'core',
    description: 'The workflow tools I use to write, manage, and ship code.',
    desktop: { x: 31, y: 84 },
    mobile: { x: 73, y: 75 },
  },
  {
    id: 'html',
    name: 'HTML',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used for semantic page structure and accessible markup.',
    desktop: { x: 5, y: 8 },
    mobile: { x: 18, y: 26 },
  },
  {
    id: 'css',
    name: 'CSS',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used for styling, layouts, responsiveness, and visual polish.',
    desktop: { x: 16, y: 5 },
    mobile: { x: 50, y: 26 },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used for interactivity, logic, and dynamic behavior.',
    desktop: { x: 29, y: 8 },
    mobile: { x: 82, y: 26 },
  },
  {
    id: 'react',
    name: 'React',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used to build reusable components and interactive frontend interfaces.',
    desktop: { x: 5, y: 35 },
    mobile: { x: 18, y: 34 },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used for fast, consistent, responsive styling.',
    desktop: { x: 17, y: 39 },
    mobile: { x: 50, y: 34 },
  },
  {
    id: 'flutter',
    name: 'Flutter',
    kind: 'tool',
    parent: 'frontend',
    description: 'Used for mobile app development and cross-platform UI.',
    desktop: { x: 31, y: 34 },
    mobile: { x: 82, y: 34 },
  },
  {
    id: 'node',
    name: 'Node.js',
    kind: 'tool',
    parent: 'backend',
    description: 'Used as the JavaScript runtime for backend development.',
    desktop: { x: 69, y: 7 },
    mobile: { x: 18, y: 49 },
  },
  {
    id: 'express',
    name: 'Express',
    kind: 'tool',
    parent: 'backend',
    description: 'Used to structure backend routes, middleware, and REST endpoints.',
    desktop: { x: 83, y: 5 },
    mobile: { x: 50, y: 49 },
  },
  {
    id: 'rest',
    name: 'REST API',
    kind: 'tool',
    parent: 'backend',
    description: 'Used to connect frontend interfaces with backend services.',
    desktop: { x: 95, y: 30 },
    mobile: { x: 82, y: 49 },
  },
  {
    id: 'supabase',
    name: 'Supabase',
    kind: 'tool',
    parent: 'database',
    description:
      'Used for backend services, database features, and project data management.',
    desktop: { x: 94, y: 52 },
    mobile: { x: 34, y: 66 },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    kind: 'tool',
    parent: 'database',
    description: 'Used for relational data modeling and structured storage.',
    desktop: { x: 92, y: 75 },
    mobile: { x: 68, y: 66 },
  },
  {
    id: 'firebase',
    name: 'Firebase',
    kind: 'tool',
    parent: 'database',
    description:
      'Used for hosted backend services, authentication, and application data features.',
    desktop: { x: 78, y: 73 },
    mobile: { x: 84, y: 66 },
  },
  {
    id: 'vercel',
    name: 'Vercel',
    kind: 'tool',
    parent: 'deployment',
    description: 'Used to deploy and host frontend projects.',
    desktop: { x: 58, y: 97 },
    mobile: { x: 18, y: 86 },
  },
  {
    id: 'railway',
    name: 'Railway',
    kind: 'tool',
    parent: 'deployment',
    description: 'Used to deploy and host application services and backend projects.',
    desktop: { x: 72, y: 97 },
    mobile: { x: 38, y: 86 },
  },
  {
    id: 'git',
    name: 'Git',
    kind: 'tool',
    parent: 'tools',
    description: 'Used for version control and tracking project changes.',
    desktop: { x: 17, y: 96 },
    mobile: { x: 53, y: 86 },
  },
  {
    id: 'github',
    name: 'GitHub',
    kind: 'tool',
    parent: 'tools',
    description: 'Used for repository hosting, collaboration, and project backup.',
    desktop: { x: 31, y: 97 },
    mobile: { x: 72, y: 86 },
  },
  {
    id: 'vscode',
    name: 'VS Code',
    kind: 'tool',
    parent: 'tools',
    description: 'Used as the main coding environment.',
    desktop: { x: 45, y: 94 },
    mobile: { x: 90, y: 86 },
  },
]

const nodeById = Object.fromEntries(skillNodes.map((node) => [node.id, node]))
const connections = skillNodes
  .filter((node) => node.parent)
  .map((node) => ({ from: node.parent, to: node.id }))

function getNodeMotion(node) {
  const familyId = node.kind === 'tool' ? node.parent : node.id
  const family = familyMotion[familyId] || familyMotion.core
  const siblingIndex = node.parent
    ? skillNodes.filter((candidate) => candidate.parent === node.parent).findIndex(
        (candidate) => candidate.id === node.id,
      )
    : 0
  const delay = node.kind === 'tool' ? -(siblingIndex + 1) * 0.1 : 0

  return {
    ...family,
    cssX: family.x * 7,
    cssY: family.y * 7,
    delay,
  }
}

function AnimatedCoordinate({ attributeName, value, delta, duration, delay }) {
  return (
    <animate
      attributeName={attributeName}
      values={`${value};${value + delta};${value}`}
      dur={`${duration}s`}
      begin={`${delay}s`}
      repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.5;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
    />
  )
}

function ConnectionLayer({ layout, activeNodeId, positions, motionEnabled }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id={`skill-map-glow-${layout}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {connections.map((connection) => {
        const fromPosition = positions[connection.from][layout]
        const toPosition = positions[connection.to][layout]
        const fromMotion = getNodeMotion(nodeById[connection.from])
        const toMotion = getNodeMotion(nodeById[connection.to])
        const isActive =
          activeNodeId === connection.from || activeNodeId === connection.to

        return (
          <line
            key={`${layout}-${connection.from}-${connection.to}`}
            x1={fromPosition.x}
            y1={fromPosition.y}
            x2={toPosition.x}
            y2={toPosition.y}
            className={isActive ? 'skill-map-line is-active' : 'skill-map-line'}
            filter={isActive ? `url(#skill-map-glow-${layout})` : undefined}
            vectorEffect="non-scaling-stroke"
          >
            {motionEnabled ? (
              <>
                <AnimatedCoordinate
                  attributeName="x1"
                  value={fromPosition.x}
                  delta={fromMotion.x}
                  duration={fromMotion.duration}
                  delay={fromMotion.delay}
                />
                <AnimatedCoordinate
                  attributeName="y1"
                  value={fromPosition.y}
                  delta={fromMotion.y}
                  duration={fromMotion.duration}
                  delay={fromMotion.delay}
                />
                <AnimatedCoordinate
                  attributeName="x2"
                  value={toPosition.x}
                  delta={toMotion.x}
                  duration={toMotion.duration}
                  delay={toMotion.delay}
                />
                <AnimatedCoordinate
                  attributeName="y2"
                  value={toPosition.y}
                  delta={toMotion.y}
                  duration={toMotion.duration}
                  delay={toMotion.delay}
                />
              </>
            ) : null}
          </line>
        )
      })}
    </svg>
  )
}

function SkillNode({
  node,
  position,
  isActive,
  onSelect,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}) {
  const Icon = nodeIcons[node.id]
  const motion = getNodeMotion(node)
  const nodeClasses = {
    core: 'h-16 w-16 border-nocturne-amber bg-nocturne-card text-nocturne-cream',
    category:
      'h-14 w-14 border-nocturne-amber-border bg-nocturne-card/95 text-nocturne-cream',
    tool: 'h-12 w-12 border-nocturne-border bg-nocturne-bg/95 text-nocturne-muted',
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(node.id)}
      onPointerDown={(event) => onPointerDown(event, node.id)}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-pressed={isActive}
      aria-label={`${node.name}. Drag to move or tap to view details.`}
      title={node.name}
      className={[
        'skill-map-node absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none select-none items-center justify-center rounded-full border transition-[border-color,box-shadow,color,scale] duration-300 active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nocturne-amber',
        nodeClasses[node.kind],
        isActive
          ? 'is-active scale-110 text-nocturne-amber'
          : 'hover:scale-110 hover:border-nocturne-amber-border hover:text-nocturne-cream',
      ].join(' ')}
      style={{
        '--skill-map-mobile-x': `${position.mobile.x}%`,
        '--skill-map-mobile-y': `${position.mobile.y}%`,
        '--skill-map-desktop-x': `${position.desktop.x}%`,
        '--skill-map-desktop-y': `${position.desktop.y}%`,
        '--skill-map-motion-x': `${motion.cssX}px`,
        '--skill-map-motion-y': `${motion.cssY}px`,
        '--skill-map-float-delay': `${motion.delay}s`,
        '--skill-map-float-duration': `${motion.duration}s`,
      }}
    >
      {Icon ? (
        <Icon
          className={[
            'shrink-0',
            node.kind === 'core'
              ? 'text-2xl'
              : node.kind === 'category'
                ? 'text-xl'
                : 'text-lg',
          ].join(' ')}
          style={{ color: nodeColors[node.id] }}
          aria-hidden="true"
        />
      ) : null}
    </button>
  )
}

export default function InteractiveSkillMap() {
  const [activeNodeId, setActiveNodeId] = useState('core')
  const [positions, setPositions] = useState(() =>
    Object.fromEntries(
      skillNodes.map((node) => [
        node.id,
        {
          desktop: { ...node.desktop },
          mobile: { ...node.mobile },
        },
      ]),
    ),
  )
  const positionsRef = useRef(positions)
  const canvasRef = useRef(null)
  const dragRef = useRef(null)
  const followFrameRef = useRef(null)
  const suppressClickRef = useRef(false)
  const motionEnabled =
    typeof window === 'undefined' ||
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const activeNode = nodeById[activeNodeId]
  const ActiveNodeIcon = nodeIcons[activeNodeId]
  const connectedNodes = skillNodes.filter(
    (node) => node.parent === activeNodeId || node.id === activeNode.parent,
  )

  useEffect(
    () => () => {
      if (followFrameRef.current) {
        cancelAnimationFrame(followFrameRef.current)
      }
    },
    [],
  )

  function selectNode(nodeId) {
    if (suppressClickRef.current) {
      suppressClickRef.current = false
      return
    }

    setActiveNodeId(nodeId)
  }

  function getNodeFamily(nodeId, depth = 0) {
    const family = [{ id: nodeId, depth }]
    const children = skillNodes.filter((node) => node.parent === nodeId)

    children.forEach((child) => {
      family.push(...getNodeFamily(child.id, depth + 1))
    })

    return family
  }

  function animateFamilyFollow() {
    const drag = dragRef.current

    if (!drag) {
      followFrameRef.current = null
      return
    }

    const currentPositions = positionsRef.current
    const nextPositions = { ...currentPositions }
    let settled = true

    Object.entries(drag.familyPositions).forEach(
      ([familyId, { position: startPosition, depth }]) => {
        const target = {
          x: startPosition.x + drag.deltaX,
          y: startPosition.y + drag.deltaY,
        }
        const current = currentPositions[familyId][drag.layout]
        const followStrength =
          depth === 0 ? 1 : depth === 1 ? 0.34 : 0.24
        const differenceX = target.x - current.x
        const differenceY = target.y - current.y

        if (Math.abs(differenceX) > 0.03 || Math.abs(differenceY) > 0.03) {
          settled = false
        }

        nextPositions[familyId] = {
          ...currentPositions[familyId],
          [drag.layout]: {
            x: depth === 0 ? target.x : current.x + differenceX * followStrength,
            y: depth === 0 ? target.y : current.y + differenceY * followStrength,
          },
        }
      },
    )

    positionsRef.current = nextPositions
    setPositions(nextPositions)

    if (drag.released && settled) {
      dragRef.current = null
      followFrameRef.current = null
      return
    }

    followFrameRef.current = requestAnimationFrame(animateFamilyFollow)
  }

  function startFamilyFollow() {
    if (!followFrameRef.current) {
      followFrameRef.current = requestAnimationFrame(animateFamilyFollow)
    }
  }

  function handlePointerDown(event, nodeId) {
    const layout = window.innerWidth >= 1024 ? 'desktop' : 'mobile'
    const familyNodes = getNodeFamily(nodeId)

    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      id: nodeId,
      layout,
      familyPositions: Object.fromEntries(
        familyNodes.map(({ id: familyId, depth }) => [
          familyId,
          {
            depth,
            position: { ...positionsRef.current[familyId][layout] },
          },
        ]),
      ),
      deltaX: 0,
      deltaY: 0,
      released: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    }
    suppressClickRef.current = false
    setActiveNodeId(nodeId)
  }

  function handlePointerMove(event) {
    const drag = dragRef.current
    const canvas = canvasRef.current

    if (!drag || drag.pointerId !== event.pointerId || !canvas) {
      return
    }

    if (
      Math.abs(event.clientX - drag.startX) > 3 ||
      Math.abs(event.clientY - drag.startY) > 3
    ) {
      drag.moved = true
    }

    if (!drag.moved) {
      return
    }

    const rect = canvas.getBoundingClientRect()
    const requestedX = ((event.clientX - drag.startX) / rect.width) * 100
    const requestedY = ((event.clientY - drag.startY) / rect.height) * 100
    const familyStartPositions = Object.values(drag.familyPositions).map(
      ({ position }) => position,
    )
    const minX = Math.min(...familyStartPositions.map((position) => position.x))
    const maxX = Math.max(...familyStartPositions.map((position) => position.x))
    const minY = Math.min(...familyStartPositions.map((position) => position.y))
    const maxY = Math.max(...familyStartPositions.map((position) => position.y))

    drag.deltaX = Math.min(Math.max(requestedX, 7 - minX), 93 - maxX)
    drag.deltaY = Math.min(Math.max(requestedY, 4 - minY), 96 - maxY)
    startFamilyFollow()
  }

  function handlePointerUp(event) {
    const drag = dragRef.current

    if (!drag || drag.pointerId !== event.pointerId) {
      return
    }

    suppressClickRef.current = drag.moved

    if (drag.moved) {
      drag.released = true
      startFamilyFollow()
    } else {
      dragRef.current = null
    }
  }

  return (
    <section className="mb-20 border-t border-nocturne-border pt-16">
      <div className="max-w-3xl">
        <h2 className="section-label-line text-[28px] font-semibold leading-9 text-nocturne-cream">
          Interactive Skill Map
        </h2>
        <p className="mt-6 text-base leading-7 text-nocturne-muted">
          Beyond listing the tools I use, this map shows how my frontend, backend, database,
          deployment, and workflow tools connect when I build projects.
        </p>
        <p className="mt-3 font-label text-[10px] leading-5 text-nocturne-amber">
          Drag nodes to rearrange the map, or tap one to explore its role in my workflow.
        </p>
      </div>

      <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(17rem,0.7fr)]">
        <div className="relative overflow-hidden rounded-xl border border-nocturne-border bg-nocturne-card-muted p-2 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-4">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(245,166,35,0.09),transparent_35%)]"
            aria-hidden="true"
          />
          <div
            ref={canvasRef}
            className="interactive-skill-map-canvas relative min-h-[44rem] w-full overflow-hidden lg:aspect-[16/10] lg:min-h-0"
          >
            <div className="skill-map-mobile-connections">
              <ConnectionLayer
                layout="mobile"
                activeNodeId={activeNodeId}
                positions={positions}
                motionEnabled={motionEnabled}
              />
            </div>
            <div className="skill-map-desktop-connections">
              <ConnectionLayer
                layout="desktop"
                activeNodeId={activeNodeId}
                positions={positions}
                motionEnabled={motionEnabled}
              />
            </div>
            {skillNodes.map((node) => (
              <SkillNode
                key={node.id}
                node={node}
                position={positions[node.id]}
                isActive={node.id === activeNodeId}
                onSelect={selectNode}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              />
            ))}
          </div>
        </div>

        <aside
          className="relative overflow-hidden rounded-xl border border-nocturne-amber-border bg-nocturne-card p-5 shadow-nocturne-glow sm:p-6 lg:sticky lg:top-24"
          aria-live="polite"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-nocturne-amber/10 blur-[60px]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-label text-[9px] uppercase tracking-[0.14em] text-nocturne-amber">
              Selected {activeNode.kind}
            </p>
            <div className="mt-3 flex items-center gap-3">
              {ActiveNodeIcon ? (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-nocturne-border bg-nocturne-bg">
                  <ActiveNodeIcon
                    className="text-xl"
                    style={{ color: nodeColors[activeNodeId] }}
                    aria-hidden="true"
                  />
                </span>
              ) : null}
              <h3 className="text-2xl font-semibold text-nocturne-cream">
                {activeNode.name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-nocturne-muted">
              {activeNode.description}
            </p>

            {connectedNodes.length ? (
              <div className="mt-6 border-t border-nocturne-border pt-5">
                <p className="font-label text-[9px] uppercase tracking-[0.12em] text-nocturne-muted">
                  Connected to
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {connectedNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className="min-h-9 touch-manipulation rounded-lg border border-nocturne-border bg-nocturne-bg px-3 font-label text-[9px] text-nocturne-muted transition hover:border-nocturne-amber-border hover:text-nocturne-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber"
                    >
                      {node.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </section>
  )
}
