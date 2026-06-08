export default function Card({ className = '', children, ...props }) {
  const classes = [
    'rounded-xl border border-nocturne-border bg-nocturne-card p-6 transition duration-200 hover:border-nocturne-amber-border hover:shadow-nocturne-card',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  )
}
