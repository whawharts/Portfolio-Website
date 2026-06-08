import { Link } from 'react-router-dom'

export default function ArrowLink({ to, href, children, className = '', disabled = false, ...props }) {
  const classes = [
    'group inline-flex w-fit items-center gap-2 font-label text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber',
    disabled
      ? 'cursor-not-allowed text-nocturne-muted/70'
      : 'text-nocturne-amber hover:text-nocturne-cream',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      <span className={disabled ? '' : 'transition group-hover:translate-x-1'} aria-hidden="true">
        -&gt;
      </span>
    </>
  )

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" {...props}>
        {content}
      </span>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  )
}
