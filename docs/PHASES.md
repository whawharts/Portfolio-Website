# Portfolio Build Phases

This project is built in **4 phases only**.

Phase order is strict:

1. Frontend
2. Backend
3. Database
4. Testing

Codex must not skip phases or work on future-phase tasks unless explicitly instructed.

---

## Global Phase Rules

- Every Codex task must state the current phase at the top.
- Codex must read `docs/PROJECT_RULES.md` and `docs/PHASES.md` before every task.
- Codex must read only the docs needed for the current task.
- Do not read all docs by default.
- Do not read long HTML design exports unless converting a specific page.
- Do not create files outside the allowed phase scope unless the task explicitly says so.
- Do not rename the root folders:
  - `frontend/`
  - `backend/`
  - `database/`
  - `docs/`
- Update `docs/DEV_LOG.md` after meaningful changes.

---

# Phase 1 — Frontend

## Goal

Build the complete React frontend UI using the Nocturne Portfolio design system.

The frontend should be visually complete and navigable before backend and database integration.

## Allowed Scope

Work mainly inside:

```txt
frontend/portfolio-client/
```

Docs allowed for this phase:

```txt
docs/PROJECT_RULES.md
docs/PHASES.md
docs/ARCHITECTURE.md
docs/DESIGN_SYSTEM.md
docs/FRONTEND_RULES.md
docs/CONTENT_MODEL.md
```

Only read files in `docs/design-exports/` when converting that exact page.

## Main Tasks

- Set up React Vite.
- Set up Tailwind CSS.
- Set up React Router.
- Create all routes:
  - `/`
  - `/projects`
  - `/tech-stack`
  - `/certificates`
  - `/about`
  - `/contact`
- Create page files:
  - `HomePage.jsx`
  - `ProjectsPage.jsx`
  - `TechStackPage.jsx`
  - `CertificatesPage.jsx`
  - `AboutPage.jsx`
  - `ContactPage.jsx`
- Create layout components:
  - `Navbar.jsx`
  - `Footer.jsx`
  - `PageShell.jsx`
- Create reusable UI components:
  - `Button.jsx`
  - `Card.jsx`
  - `Badge.jsx`
  - `SectionHeader.jsx`
  - `Input.jsx`
  - `Textarea.jsx`
- Create frontend mock data in:
  - `src/data/mockPortfolioData.js`
- Convert the uploaded page designs into clean React components.
- Keep all design consistent with `docs/DESIGN_SYSTEM.md`.

## Strict Rules

- Do not build the backend yet.
- Do not connect PostgreSQL yet.
- Do not add Prisma yet.
- Do not create database migrations.
- Do not place database logic in the frontend.
- Do not hardcode final portfolio content deeply inside page components.
- Use mock data from `src/data/` only.
- Keep the frontend “stupid”: UI, routing, API calls later, loading states later, error states later.
- No white backgrounds.
- No random new colors, fonts, spacing systems, or button styles.
- Resume button may use a placeholder path until the resume file is added.

## Phase 1 Complete When

- `npm run dev` works inside `frontend/portfolio-client/`.
- All routes open successfully:
  - `/`
  - `/projects`
  - `/tech-stack`
  - `/certificates`
  - `/about`
  - `/contact`
- Navbar links work.
- Footer appears on all pages.
- Resume button is consistent on all pages.
- No white background appears.
- No backend dependency exists.
- No database dependency exists.
- UI matches the Nocturne Portfolio direction.

---

# Phase 2 — Backend

## Goal

Create the Express backend API structure.

The backend should expose portfolio endpoints using temporary backend mock data. Database integration happens later in Phase 3.

## Allowed Scope

Work mainly inside:

```txt
backend/portfolio-api/
```

Frontend edits are allowed only for connecting API calls and adding loading/error states.

Docs allowed for this phase:

```txt
docs/PROJECT_RULES.md
docs/PHASES.md
docs/ARCHITECTURE.md
docs/BACKEND_RULES.md
docs/API_CONTRACTS.md
docs/CONTENT_MODEL.md
```

## Main Tasks

- Set up Node.js + Express.
- Set up CORS.
- Set up environment variables.
- Create backend folder structure:
  - `src/routes/`
  - `src/controllers/`
  - `src/services/`
  - `src/repositories/`
  - `src/validators/`
  - `src/middleware/`
  - `src/utils/`
- Create API endpoints:
  - `GET /api/health`
  - `GET /api/profile`
  - `GET /api/projects`
  - `GET /api/projects/featured`
  - `GET /api/tech-stack`
  - `GET /api/certificates`
  - `GET /api/resume`
  - `POST /api/contact`
- Use backend mock data first.
- Keep response shapes aligned with `docs/API_CONTRACTS.md`.
- Connect frontend pages to backend endpoints.
- Add frontend loading and error states where needed.

## Strict Rules

- Do not connect PostgreSQL yet.
- Do not add Prisma yet.
- Do not create database migrations.
- Do not write SQL queries yet.
- Backend owns validation, filtering, sorting, and response formatting.
- Frontend must not own final data rules.
- Contact form validation must happen on the backend.

## Phase 2 Complete When

- Backend runs with `npm run dev`.
- `GET /api/health` returns success.
- Frontend fetches data from backend.
- Projects, certificates, tech stack, profile, and resume data come from API.
- Contact form submits to the backend.
- Backend still uses mock repository data.
- No database dependency exists yet.
- API response shapes are stable.

---

# Phase 3 — Database

## Goal

Implement PostgreSQL with Prisma and replace backend mock data with real database queries.

## Allowed Scope

Work mainly inside:

```txt
backend/portfolio-api/
database/
```

Frontend edits are allowed only if required by unchanged API response data.

Docs allowed for this phase:

```txt
docs/PROJECT_RULES.md
docs/PHASES.md
docs/ARCHITECTURE.md
docs/DATABASE_SCHEMA.md
docs/POSTGRESQL_SETUP.md
docs/API_CONTRACTS.md
docs/CONTENT_MODEL.md
```

## Main Tasks

- Confirm PostgreSQL is installed and running.
- Create local database:

```sql
CREATE DATABASE portfolio_dev;
```

- Add Prisma to backend.
- Configure `.env` with `DATABASE_URL`.
- Create Prisma schema.
- Create models:
  - `Profile`
  - `Project`
  - `ProjectImage`
  - `TechStackItem`
  - `ProjectTechStack`
  - `Certificate`
  - `SocialLink`
  - `ResumeFile`
  - `ContactMessage`
- Create migrations.
- Create seed data.
- Replace mock repositories with Prisma repositories.
- Keep API response shapes the same as Phase 2.
- Save contact form submissions to PostgreSQL.

## Strict Rules

- Do not redesign the frontend during this phase.
- Do not break API contracts.
- Do not expose raw database fields if they are not part of the API contract.
- Backend still owns validation, filtering, sorting, and response formatting.
- Database only stores structured data.
- Prisma code must stay in backend/database access layers, not frontend.

## Phase 3 Complete When

- PostgreSQL is running.
- Prisma migration succeeds.
- Prisma seed succeeds.
- Backend fetches real data from PostgreSQL.
- Frontend works without UI redesign.
- Contact form saves messages to the database.
- API response shapes remain stable.
- No frontend page breaks after database integration.

---

# Phase 4 — Testing

## Goal

Test the full website from frontend to backend to database.

This phase is for verification, bug fixing, and small polish only.

## Allowed Scope

Work across:

```txt
frontend/
backend/
database/
docs/
```

Docs allowed for this phase:

```txt
docs/PROJECT_RULES.md
docs/PHASES.md
docs/ARCHITECTURE.md
docs/API_CONTRACTS.md
docs/DATABASE_SCHEMA.md
docs/DEV_LOG.md
```

## Main Tasks

- Test frontend routes.
- Test navbar links.
- Test footer links.
- Test resume download link.
- Test API endpoints.
- Test database queries.
- Test contact form.
- Test loading states.
- Test error states.
- Test empty states.
- Test responsive layout.
- Check basic accessibility.
- Check browser console errors.
- Check network errors.
- Check environment variable setup.
- Fix small bugs.
- Update `docs/DEV_LOG.md`.

## Strict Rules

- Do not redesign the website during testing.
- Do not add major new features.
- Do not change the architecture.
- Do not change API contracts unless there is a documented bug.
- Keep fixes small and documented.
- Preserve the Nocturne Portfolio design system.

## Phase 4 Complete When

- Frontend runs successfully.
- Backend runs successfully.
- PostgreSQL connection works.
- All API endpoints return expected data.
- Contact form saves to database.
- Resume button works.
- No white background appears.
- No major console errors.
- No broken routes.
- No broken navbar links.
- DEV_LOG is updated.

---

# Required Codex Task Header

Every Codex prompt must begin with this format:

```txt
Phase X — Phase Name

Read first:
- docs/PROJECT_RULES.md
- docs/PHASES.md
- [only the other docs needed for this task]

Task:
[exact task here]

Scope:
[allowed folders here]

Do not:
[phase-specific restrictions here]

After finishing:
- List changed files.
- Tell me how to run and verify.
- Update docs/DEV_LOG.md if meaningful changes were made.
```

---

# Current Build Order

```txt
Current Phase: Phase 1 — Frontend
Next Phase: Phase 2 — Backend
Then: Phase 3 — Database
Last: Phase 4 — Testing
```
