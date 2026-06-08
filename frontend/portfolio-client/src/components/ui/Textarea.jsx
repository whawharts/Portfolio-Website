export default function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={[
        'min-h-36 w-full resize-y rounded-lg border border-nocturne-border bg-nocturne-surface px-4 py-3 text-nocturne-cream outline-none transition placeholder:text-nocturne-muted/60 focus:border-nocturne-amber focus:shadow-nocturne-focus',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
