export default function HeroEyebrow({ children, className = '', textClassName = '' }) {
  return (
    <div
      className={[
        'inline-flex w-max items-center gap-2 rounded-full border border-nocturne-border bg-nocturne-card px-4 py-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="h-2 w-2 rounded-full bg-nocturne-amber-strong shadow-[0_0_10px_rgba(245,166,35,0.35)] animate-pulse" />
      <span
        className={[
          'font-label text-sm text-nocturne-muted',
          textClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </span>
    </div>
  )
}
