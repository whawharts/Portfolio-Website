const variants = {
  primary:
    'border-transparent bg-nocturne-amber-strong text-[#291800] shadow-[0_0_28px_rgba(245,166,35,0.25)] hover:bg-[#ffb23a] hover:shadow-[0_0_34px_rgba(245,166,35,0.35)]',
  secondary:
    'border-nocturne-border bg-nocturne-card-muted text-nocturne-amber hover:border-nocturne-amber hover:bg-nocturne-amber-soft',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = [
    'inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nocturne-amber',
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
