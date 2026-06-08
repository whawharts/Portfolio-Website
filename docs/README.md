# Portfolio Docs Index

Purpose: keep Codex focused. Do not feed every file for every task.

## Stack
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma
- Docs: Markdown source of truth

## Root folder rule
Only these root folders are allowed:

```txt
frontend/
backend/
database/
docs/
```

## What Codex should read per task
- Any task: `PROJECT_RULES.md`
- UI/page/component task: `DESIGN_SYSTEM.md` + `FRONTEND_RULES.md`
- Backend/API task: `BACKEND_RULES.md` + `API_CONTRACTS.md` + `CONTENT_MODEL.md`
- Database task: `DATABASE_SCHEMA.md` + `POSTGRESQL_SETUP.md`
- Planning/refactor task: `ARCHITECTURE.md`
- After meaningful work: update `DEV_LOG.md`

## Do not waste tokens
- Do not read exported HTML every time.
- Use exported HTML only when rebuilding a specific page visually.
- Use `DESIGN_SYSTEM.md` as the daily design source.
- Use `API_CONTRACTS.md` before changing frontend API calls or backend routes.

## Current design references
Keep uploaded Stitch exports as references, not production code:

```txt
docs/design-exports/homepage.html
docs/design-exports/projects_page.html
docs/design-exports/techstack_page.html
docs/design-exports/certificats_page.html
docs/design-exports/about_page.html
docs/design-exports/contact_page.html
docs/design-exports/DESIGN.md
```

## Build order
1. Create folders and install tools.
2. Convert design system into Tailwind tokens.
3. Build reusable frontend components.
4. Build static pages using temporary mock API data.
5. Add backend Express API.
6. Add PostgreSQL + Prisma.
7. Replace mock data with API calls.
8. Polish, test, deploy.
