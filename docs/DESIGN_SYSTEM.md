# Design System

Source: uploaded Nocturne Portfolio design.

## Design identity
- Name: Nocturne Portfolio
- Mood: Night Park, cinematic, warm, focused, technical
- Style: minimalism + glassmorphism
- Background must feel dark espresso, not pure black and never white.

## Core colors
```txt
background-main: #0D0C0B
surface:         #141312
surface-card:    #1A1614
surface-panel:   #211F1E
border-subtle:   #2E2824
text-primary:    #F9F6F1
text-muted:      #A89F94
primary:         #FFC880
primary-strong:  #F5A623
glow-amber:      rgba(245, 166, 35, 0.15)
```

## Typography
```txt
Headings: Hanken Grotesk
Body:     Hanken Grotesk
Labels:   JetBrains Mono
Code:     JetBrains Mono
```

Use:
- Big hero title: 64px desktop, 40px mobile
- Section heading: 32px
- Card title: 24px
- Body: 16px to 18px
- Labels/chips: 12px to 14px monospace

## Spacing
```txt
base unit: 4px
page margin desktop: 80px
page margin mobile: 20px
gutter: 24px
section gap: 120px
max content width: 1440px
```

## Layout
- Desktop-first execution, but must remain responsive.
- Use large breathing room between sections.
- Use 12-column desktop grids when useful.
- Do not cram content.

## Shared components
Required shared components:
- `Navbar`
- `Footer`
- `PageShell`
- `SectionHeader`
- `Button`
- `Card`
- `TechChip`
- `FilterTabs`
- `EmptyState`

## Navbar
- Sticky/fixed top.
- Dark translucent background.
- Blur: `backdrop-filter: blur(20px)`.
- Thin dark border bottom.
- Active link uses amber text and underline/border.
- Resume button must be consistent on every page.

## Buttons
Primary:
- Amber background.
- Dark espresso text.
- Slight glow on hover.

Secondary:
- Transparent or dark surface.
- Warm border/text.
- Amber border/text on hover.

Do not create new button variants unless added here first.

## Cards
- Background: `surface-card`.
- Border: `border-subtle`.
- Radius: 8px to 12px.
- Hover: subtle amber glow and slightly brighter border.
- No heavy bright shadows.

## Forms
- Dark fields only.
- Bottom border or subtle full border.
- Focus state uses amber border/glow.
- Required errors use warm red from design tokens.

## Strict visual rules
- No white page background.
- No neon green/blue accents.
- No random fonts.
- No page-specific navbar styling.
- No oversized rounded-pill cards unless design requires it.
- Keep the warm amber accent rare and intentional.
