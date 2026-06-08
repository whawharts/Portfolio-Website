import Card from './Card'

export function LoadingState({ message = 'Loading content...' }) {
  return (
    <Card className="my-12 flex items-center gap-4 p-6">
      <span className="h-3 w-3 rounded-full bg-nocturne-amber shadow-nocturne-glow" />
      <p className="font-label text-sm text-nocturne-muted">{message}</p>
    </Card>
  )
}

export function ErrorState({ message = 'Unable to load content right now.' }) {
  return (
    <Card className="my-12 border-[var(--color-error)]/40 p-6">
      <p className="font-label text-sm text-[var(--color-error)]">{message}</p>
      <p className="mt-2 text-sm leading-6 text-nocturne-muted">
        Make sure the backend is running, then refresh this page.
      </p>
    </Card>
  )
}

export function EmptyState({ message = 'Nothing to show yet.' }) {
  return (
    <Card className="my-12 p-6">
      <p className="font-label text-sm text-nocturne-muted">{message}</p>
    </Card>
  )
}
