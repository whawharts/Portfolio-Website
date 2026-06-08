export default function Select({ className = '', children, ...props }) {
  return (
    <select
      className={[
        'w-full rounded-lg border border-nocturne-border bg-nocturne-surface px-4 py-3 text-nocturne-cream outline-none transition focus:border-nocturne-amber focus:shadow-nocturne-focus',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </select>
  )
}
