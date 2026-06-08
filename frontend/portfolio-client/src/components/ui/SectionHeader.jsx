export default function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <header className={['max-w-3xl', className].filter(Boolean).join(' ')}>
      {eyebrow ? (
        <p className="mb-4 font-label text-xs uppercase tracking-normal text-nocturne-amber">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-[40px] font-semibold leading-tight text-nocturne-cream md:text-[64px]">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-base leading-8 text-nocturne-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
