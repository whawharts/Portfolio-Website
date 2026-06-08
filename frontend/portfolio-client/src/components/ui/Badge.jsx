export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md border border-nocturne-border bg-nocturne-surface px-3 py-1 font-label text-xs uppercase tracking-normal text-nocturne-muted',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
