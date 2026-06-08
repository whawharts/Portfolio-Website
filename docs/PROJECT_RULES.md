# Project Rules

These rules override convenience.

## Architecture
- Keep only four root folders: `frontend`, `backend`, `database`, `docs`.
- Frontend is stupid: UI, routing, API calls, loading states, error states, basic UX validation only.
- Backend owns data shaping, validation, filtering, sorting, business logic, and database access.
- Database owns schema, migrations, seeds, relationships, indexes, and constraints.
- Docs own project decisions and must be updated when decisions change.

## Forbidden
- No direct database access from frontend.
- No hardcoded portfolio content inside page components, except temporary mock data during early build.
- No random white backgrounds.
- No duplicate navbar/button styles per page.
- No business logic inside React components.
- No secrets in Git.
- No new root folders outside the four approved folders.

## Required behavior
- Use the Nocturne Portfolio design system.
- Resume button must stay visually consistent across all pages.
- Navbar must be shared, not rebuilt per page.
- API responses must use the shared response shape in `API_CONTRACTS.md`.
- After any meaningful code change, update `DEV_LOG.md`.

## Definition of done
A task is done only when:
- The change stays inside the correct root folder.
- The design still follows `DESIGN_SYSTEM.md`.
- API/database changes match docs.
- The app runs without obvious console errors.
- `DEV_LOG.md` has a short entry.
