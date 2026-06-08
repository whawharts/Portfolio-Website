# Dev Log

Update this after every meaningful code change.

## Template

```md
## YYYY-MM-DD - Phase/Task Name

Changed:
- frontend/...
- backend/...
- database/...
- docs/...

What changed:
- ...

Verification:
- npm run dev: passed/failed/not run
- npm test: passed/failed/not run
- prisma migrate: passed/failed/not run
- browser check: passed/failed/not run

Notes:
- ...

Scope check:
- Stayed within requested scope: yes/no
```

## Entries

## 2026-06-08 - Phase 4 Frontend-Only Vercel Conversion

Changed:
- frontend/portfolio-client/src/data/mockPortfolioData.js
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- frontend/portfolio-client/src/pages/ContactPage.jsx
- frontend/portfolio-client/src/components/layout/Navbar.jsx
- frontend/portfolio-client/src/services/
- frontend/portfolio-client/src/hooks/useApiResource.js
- frontend/portfolio-client/.env.example
- frontend/portfolio-client/README.md
- docs/DEV_LOG.md

What changed:
- Converted the React portfolio to frontend-only static data for Vercel deployment.
- Removed runtime frontend fetch usage, API client services, and the API resource hook.
- Updated API-driven pages, Navbar resume loading, and contact submission to use local static data only.
- Added static profile avatar, social links, and resume metadata to `mockPortfolioData.js`.
- Replaced the default Vite README with frontend-only Vercel deployment notes.

Verification:
- npm run lint: passed
- npm run build: passed
- npm run dev: passed at `http://127.0.0.1:5174`
- frontend route checks without backend: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- public asset checks: passed for the local resume PDF and all three profile images
- localhost:3000/API request check: passed; no application API, `VITE_API_BASE_URL`, localhost backend, or Render backend references remain in frontend source or the production bundle
- contact form check: passed by source verification; submission uses local validation and local success state only

Notes:
- Real `.env` files were not opened or modified.
- The in-app browser connection was unavailable because of a Windows sandbox refresh error, so route/assets were verified over HTTP and runtime dependency checks used source and production-bundle scans.
- No backend replacement, Supabase client, database schema change, backend deletion, frontend redesign, or deployment secret change was made.

Scope check:
- Stayed within requested scope: yes

## 2026-06-08 - Phase 4 Environment Cleanup and Documentation Alignment

Changed:
- docs/API_CONTRACTS.md
- docs/DEV_LOG.md

What changed:
- Updated the documented shared API error response to match the actual backend response shape: `{ success, message, errors }`.
- Confirmed frontend and backend environment examples list expected variable names only.
- Checked Git structure and found a nested Git repository at `backend/portfolio-api/.git`.

Verification:
- frontend .env example check: passed; expected `VITE_API_BASE_URL` is documented
- backend .env example check: passed; expected `PORT`, `FRONTEND_URL`, `FRONTEND_URLS`, `NODE_ENV`, and `DATABASE_URL` are documented
- backend response helper check: passed; `formatError` returns `{ success, message, errors }`
- backend error middleware check: passed; JSON parse and server errors return `{ success, message, errors }`
- nested Git check: found `backend/portfolio-api/.git`

Notes:
- Real `.env` files were not opened or modified.
- No backend API behavior, frontend design, database schema, admin dashboard work, or Git folder deletion was performed.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Pre-Deployment Recovery Audit

Changed:
- backend/portfolio-api/package.json
- backend/portfolio-api/src/repositories/mockData.js
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Added the missing `prisma:validate` npm script so the documented backend validation command works.
- Replaced legacy `#` placeholder links in backend and frontend mock fallback data with `null`.
- Confirmed required frontend components, pages, public assets, backend routes, Prisma schema, migrations, seed behavior, and deployment docs are present.

Verification:
- frontend install: passed with `npm.cmd install`
- backend install: passed with `npm.cmd install`
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- prisma validate: passed with `npm.cmd run prisma:validate`
- prisma generate: passed with `npm.cmd run prisma:generate`
- db seed: passed with `npm.cmd run db:seed`
- backend syntax checks: passed with `node --check` across `src/**/*.js`
- frontend route smoke checks: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- public asset smoke checks: passed for `robots.txt`, profile avatar images, and resume PDF
- backend API smoke checks: passed for health, profile, projects, featured projects, tech stack, certificates, and resume
- contact form persistence: passed with a QA recovery contact message saved to PostgreSQL

Notes:
- Active API responses expose zero fake `#` project/certificate action URLs.
- Reseeding leaves 4 public projects, 2 hidden stale projects, 4 visible certificates, and 2 hidden stale certificates in the local database.
- Browser DevTools console and visual horizontal-scroll checks were not directly run from an interactive browser in this terminal audit.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Deployment Prep: Checklist and Production Config

Changed:
- backend/portfolio-api/package.json
- backend/portfolio-api/.env.example
- backend/portfolio-api/src/config/env.js
- backend/portfolio-api/src/config/cors.js
- docs/DEPLOYMENT_CHECKLIST.md
- docs/DEV_LOG.md

What changed:
- Added a deployment checklist covering frontend hosting, backend hosting, PostgreSQL hosting, environment variables, production Prisma migration/seed flow, CORS, assets, resume serving, robots.txt, contact form behavior, and local-only assumptions.
- Added `prisma:deploy` for production migration deployment.
- Added `FRONTEND_URLS` support so production CORS can allow multiple frontend origins while preserving the existing local `FRONTEND_URL` fallback.
- Made blocked CORS origins return a clean 403-style API error instead of a generic 500.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- prisma validate: passed with `npx.cmd prisma validate`
- backend syntax checks: passed with `node --check` across `src/**/*.js`
- backend local API smoke check: passed for health, projects, and certificates
- public API link check: confirmed project and certificate API responses do not expose `#` action URLs

Notes:
- Local QA contact messages using `qa@example.com` are documented in the deployment checklist instead of being removed from the local database.
- Production must set `VITE_API_BASE_URL`, `DATABASE_URL`, and `FRONTEND_URLS`; real `.env` files remain ignored.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Final QA and Deployment Readiness

Changed:
- backend/portfolio-api/prisma/seed.js
- docs/DEV_LOG.md

What changed:
- Made the Prisma seed file authoritative for public project and certificate content by hiding stale projects/certificates that are no longer present in the seed data.
- Replaced placeholder `#` project and certificate URLs in the seed with `null` so unavailable card actions stay cleanly non-clickable.
- Normalized the seeded Kaladkarin project category to the existing public `app` category.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- prisma validate: passed with `npx.cmd prisma validate`
- backend syntax checks: passed with `node --check` across `src/**/*.js`
- backend API smoke checks: passed for health, profile, projects, featured projects, tech stack, certificates, resume, project slug, contact validation, contact success, and unknown route handling
- frontend route smoke checks: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- public asset checks: passed for `robots.txt`, profile avatar images, and resume PDF

Notes:
- Browser DevTools console and Lighthouse UI audits were not run from this terminal session; static SEO metadata, robots.txt, builds, route responses, assets, and API behavior were verified.
- Two QA contact submissions using `qa@example.com` were created while verifying PostgreSQL contact persistence.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 SEO: Lighthouse Cleanup

Changed:
- frontend/portfolio-client/index.html
- frontend/portfolio-client/public/robots.txt
- docs/DEV_LOG.md

What changed:
- Updated the default Vite document title to `Joseph Sotomil | Portfolio`.
- Added a portfolio meta description, author metadata, Open Graph metadata, and a Twitter summary card tag.
- Added a valid plain-text `robots.txt` file served from the Vite public root.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- `GET /robots.txt`: returned 200 as `text/plain` with `User-agent: *` and `Allow: /`
- `GET /`: returned title `Joseph Sotomil | Portfolio` and the expected meta description

Notes:
- No React page components, backend, database, Prisma, API contract, routes, navbar, footer, animations, avatar behavior, scroll progress rail, or floating contact panel changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Small UI Polish: Floating Contact Panel

Changed:
- frontend/portfolio-client/src/components/FloatingSocialButton.jsx
- docs/DEV_LOG.md

What changed:
- Redesigned the floating social widget into a compact floating contact panel.
- Closed state now uses a circular amber chat button with subtle glow and a low-opacity ping ring.
- Open state now shows a Nocturne-styled contact card with avatar, name, availability status, message, and contact actions.
- Kept delayed-follow scrolling, click toggle, Escape close, and outside-click close behavior.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- Contact links are configured locally from existing seed values for now. Email, Facebook, LinkedIn, and GitHub use real values; Call Me is a muted non-clickable coming-soon row because no phone value exists. No PageShell, backend, database, Prisma, API contract, route, navbar, footer, Home avatar, scroll progress rail, certificate tabs, or project/certificate card changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Small UI Polish: Hero Eyebrow Dot

Changed:
- frontend/portfolio-client/src/components/ui/HeroEyebrow.jsx
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- frontend/portfolio-client/src/pages/ContactPage.jsx
- docs/DEV_LOG.md

What changed:
- Added a shared HeroEyebrow component for page hero labels.
- Added the missing dot before the Certificates hero label.
- Standardized all hero label dots to a small warm orange amber dot with subtle glow and gentle pulse.
- Kept hero label text, headings, routes, and page layouts unchanged.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- No backend, database, Prisma, API contract, route, navbar, footer, Home avatar, scroll progress rail, floating social button, or certificate tab underline changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Testing: Broken Card Link Cleanup

Changed:
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- docs/DEV_LOG.md

What changed:
- Project cards now show Live Demo, GitHub, and Case Study actions only when each URL is real.
- Project cards with no real action URLs show a muted non-clickable "Details coming soon" note.
- Certificate cards now show View Certificate only when `credentialUrl` or `certificateUrl` is real.
- Certificate cards without a real certificate URL show a muted non-clickable "Certificate link coming soon" note.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, and `/certificates` returned 200 with backend and frontend running

Notes:
- No backend, database, Prisma, API contract, route, project detail page, certificate detail page, card redesign, navbar, footer, scroll progress rail, floating social button, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Small UI Polish: Certificate Filter Underline

Changed:
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- docs/DEV_LOG.md

What changed:
- Replaced the per-tab static certificate filter underline with one shared moving underline.
- The underline measures the active tab width and offset, then transitions to the selected category.
- Kept certificate filtering behavior, card rendering, and API calls unchanged.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- No backend, database, Prisma, API contract, route, certificate data, certificate card layout, navbar, footer, scroll progress rail, floating social button, page animation, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Small UI Polish: Floating Social Button Follow

Changed:
- frontend/portfolio-client/src/components/FloatingSocialButton.jsx
- docs/DEV_LOG.md

What changed:
- Added a subtle delayed-follow effect to the floating social widget while scrolling.
- The fixed lower-right anchor stays in place, while an inner wrapper shifts slightly on the Y axis and eases back after scrolling stops.
- Kept the open/close menu, Escape close, outside-click close, and social link behavior unchanged.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- The movement is clamped to a small offset and disabled for reduced-motion preferences. No PageShell, backend, database, Prisma, API contract, route, navbar, footer, scroll progress rail, page animation, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-28 - Phase 4 Small UI Polish: Floating Social Button

Changed:
- frontend/portfolio-client/src/components/FloatingSocialButton.jsx
- frontend/portfolio-client/src/components/layout/PageShell.jsx
- docs/DEV_LOG.md

What changed:
- Added a shared lower-right floating social/contact button across all portfolio pages.
- Added a small accessible menu for Facebook, LinkedIn, and GitHub links.
- Added click-to-toggle, Escape-to-close, and outside-click close behavior.
- Kept the widget compact so it does not conflict with the right-side scroll progress rail or mobile top progress line.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- Social links are configured in the frontend widget for now, using the real URLs already present in the project seed data. A TODO remains to wire them to shared profile API data once global profile state exists. No backend, database, Prisma, API contract, route, navbar, footer, scroll progress rail, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Scroll Progress Rail

Changed:
- frontend/portfolio-client/src/components/ScrollToTopRail.jsx
- docs/DEV_LOG.md

What changed:
- Updated the shared scroll-to-top indicator to also show scroll progress.
- Desktop/tablet rail now uses a subtle vertical track with an amber fill that grows from top to bottom.
- Mobile rail now uses a subtle horizontal track with an amber fill that grows from left to right.
- Kept the existing visibility threshold and scroll-to-top click/tap behavior.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- No PageShell, backend, database, Prisma, API contract, route, navbar, footer, page animation, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Scroll To Top Rail

Changed:
- frontend/portfolio-client/src/components/ScrollToTopRail.jsx
- frontend/portfolio-client/src/components/layout/PageShell.jsx
- docs/DEV_LOG.md

What changed:
- Added a shared scroll-to-top indicator mounted once in PageShell so it works across all portfolio routes.
- Added a desktop/tablet right-side vertical amber rail that appears after scrolling past 250px.
- Added a mobile-only thin horizontal amber line near the top of the viewport.
- The indicator scrolls to the top smoothly, or instantly when reduced motion is preferred.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- No backend, database, Prisma, API contract, route, navbar layout, footer layout, page-entry animation, card reveal animation, or Home avatar behavior changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Navbar Hover Underline

Changed:
- frontend/portfolio-client/src/components/layout/Navbar.jsx
- docs/DEV_LOG.md

What changed:
- Replaced the desktop nav hover underline from border styling with an absolutely positioned transform underline.
- Added a subtle amber text glow on nav-option hover without changing the Resume button styling.
- Kept active route text amber and active route underline visible when not hovered.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running

Notes:
- No backend, database, Prisma, API contract, route, page animation, avatar hover, navbar layout, or mobile menu redesign changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Page Entry and Scroll Reveal

Changed:
- frontend/portfolio-client/src/components/RevealOnScroll.jsx
- frontend/portfolio-client/src/components/layout/PageShell.jsx
- frontend/portfolio-client/src/styles/design-tokens.css
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- frontend/portfolio-client/src/pages/ContactPage.jsx
- docs/DEV_LOG.md

What changed:
- Added a reusable IntersectionObserver-based scroll reveal wrapper for card and CTA sections.
- Added a route-level page entry animation through PageShell so page content softly fades and rises into place.
- Applied subtle staggered reveals to project, tech stack, certificate, about, contact, and home preview cards.
- Kept the Home avatar hover behavior unchanged.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route smoke check: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running
- browser check: not run because the in-app browser target was unavailable in this session

Notes:
- Reduced-motion users skip the page-entry animation and reveal transitions. No backend, database, Prisma, API contract, route, content, or color changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Home Avatar Ground Shadow

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- docs/DEV_LOG.md

What changed:
- Added a subtle dark blurred oval beneath the Home hero avatar image stack.
- Kept the existing amber glow behind the avatar and the one-step hover image behavior.
- Added the grounding shadow without adding any card, border, panel, frame, or rectangular background.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image checks: all three chibi image paths returned 200 as `image/png`

Notes:
- About page behavior was not changed. No backend, database, API shape, image paths, hover logic, navbar, footer, routing, or hero text changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Home Avatar Glow

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- docs/DEV_LOG.md

What changed:
- Added a subtle amber radial glow behind the Home hero avatar image stack.
- Increased the Home avatar stack from `max-w-sm` to responsive `max-w-[23rem] lg:max-w-[25rem]`, roughly a 10-15% desktop size increase.
- Kept the existing one-step hover image behavior and crossfade transition.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image checks: all three chibi image paths returned 200 as `image/png`

Notes:
- About page behavior was not changed. No backend, database, API shape, image paths, card/panel/frame styling, navbar, footer, routing, or hero text changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Home Avatar Crossfade

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- docs/DEV_LOG.md

What changed:
- Added a smooth crossfade to the Home avatar image change while preserving the one-step-per-hover behavior.
- Rendered the three chibi images in a minimal stacked image container with opacity transitions.
- Kept the first/default image as the layout anchor so switching images does not shift the hero layout.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image checks: all three chibi image paths returned 200 as `image/png`

Notes:
- About page behavior was not changed. No backend, database, API shape, image paths, card/panel styling, navbar, footer, routing, or hero text changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Home Avatar Step Hover

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- docs/DEV_LOG.md

What changed:
- Replaced the continuous Home avatar hover cycle with a one-step hover behavior.
- Removed `setInterval`, hover tracking state, interval cleanup, and mouse-leave reset logic.
- The Home avatar now advances to the next chibi image once per mouse entry and keeps that image after the cursor leaves.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image checks: all three chibi image paths returned 200 as `image/png`

Notes:
- About page behavior was not changed. No backend, database, API shape, image path, image card/panel, navbar, footer, routing, or hero layout changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Home Avatar Hover

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- docs/DEV_LOG.md

What changed:
- Added homepage-only hover cycling for the API-driven chibi/avatar image.
- The Home avatar cycles through `/images/profile/chibi_joseph.png`, `/images/profile/chibi_joseph_2.png`, and `/images/profile/chibi_joseph_3.png` every 750ms while hovered.
- The avatar resets to the default API image when hover ends, and the interval is cleared on cleanup.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image checks: all three chibi image paths returned 200 as `image/png`
- browser hover check: not run because the in-app browser was unavailable in this session

Notes:
- About page behavior was not changed. No backend, database, API shape, avatar path, image card/panel, navbar, footer, or layout redesign changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Small UI Polish: Avatar Containers

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- docs/DEV_LOG.md

What changed:
- Removed the Home hero's large decorative avatar panel, radial image background, bordered image frame, and image shadows.
- Removed the About page avatar `Card`, decorative background layers, inner bordered panel, image shadow, and card padding.
- Kept the actual API-driven avatar image visible with minimal layout-only wrappers.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend dev route checks: `/` and `/about` returned 200 with backend and frontend running
- direct image check: `/images/profile/chibi_joseph.png` returned 200 as `image/png`

Notes:
- No backend, database, API logic, navbar, footer, routing, global color, or image path changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Seed Display Fix

Changed:
- backend/portfolio-api/src/repositories/profile.repository.js
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- docs/DEV_LOG.md

What changed:
- Updated profile lookup to prefer the most recently updated Profile row from PostgreSQL.
- Updated the Home hero to use API profile availability, headline, short bio, and avatar image when present.
- Updated the About story/avatar section to use API profile short bio, long bio, and avatar image when present.
- Kept existing styled avatar placeholders as fallbacks when `avatarUrl` is missing.

Verification:
- backend syntax check: passed with `node --check` across backend JS files
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- `GET /api/profile`: returned updated seed values with `avatarUrl: /images/profile/chibi_joseph.png` and `resumeUrl: /resume/Joseph-Sotomil-Resume.pdf`
- direct image check: `http://localhost:5173/images/profile/chibi_joseph.png` returned 200 as `image/png`
- route checks: `/` and `/about` returned 200 with backend and frontend running

Notes:
- No UI redesign, endpoint path changes, API response format changes, Prisma schema changes, hardcoded React content, or admin dashboard work was added.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Content Prep

Changed:
- backend/portfolio-api/prisma/seed.js
- frontend/portfolio-client/public/resume/.gitkeep
- docs/DEV_LOG.md

What changed:
- Moved editable placeholder portfolio content directly into clearly labeled seed sections for profile, tech stack, projects, certificates, social links, and resume metadata.
- Added comments showing where real content should be replaced while keeping content database-driven.
- Confirmed the placeholder resume download path is `/resume/Joseph-Sotomil-Resume.pdf`.
- Added the public resume folder placeholder so `frontend/portfolio-client/public/resume/` is ready for the real PDF.

Verification:
- seed syntax check: passed with `node --check prisma/seed.js`
- prisma validate: passed with `npx.cmd prisma validate`
- frontend build: passed with `npm.cmd run build`
- db seed: passed with `npm.cmd run db:seed`

Notes:
- No UI redesign, API contract changes, endpoint changes, admin dashboard, or Prisma schema changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Manual Visual Fixes: Core Toolkit Polish

Changed:
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- docs/DEV_LOG.md

What changed:
- Polished the Tech Stack Core Toolkit rows with a darker inset chip panel, subtle amber accent rail, calmer icon tile, and softer hover treatment.
- Simplified Core Toolkit chips to show tech names only and removed visible status labels from that section.
- Kept API data handling intact; status fields can still exist in returned data but are not rendered in the Core Toolkit UI.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route check: `/tech-stack` returned 200 with backend and frontend running
- browser visual check: not run because the in-app browser was unavailable in this session

Notes:
- No backend, database, API contract, data fetching behavior, white background, or primary button styling changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Manual Visual Fixes: Toolkit Rows and Hero Motion

Changed:
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/styles/design-tokens.css
- docs/DEV_LOG.md

What changed:
- Replaced the Tech Stack Core Toolkit bento grid with clean full-width row cards for each toolkit category.
- Added subtle reduced-motion-safe floating animation utilities for Home hero decorative cards.
- Applied staggered floating motion to the terminal card, React UI card, and small right-side mini-card around the hero avatar placeholder.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route checks: `/` and `/tech-stack` returned 200 with backend and frontend running
- browser visual check: not run because the in-app browser was unavailable in this session

Notes:
- No backend, database, API contract, data fetching, major feature, white background, or primary button styling changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Manual Visual Fixes

Changed:
- frontend/portfolio-client/src/components/ui/Button.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- docs/DEV_LOG.md

What changed:
- Standardized primary buttons on the stronger Nocturne amber (`#F5A623`) with deep espresso text and a warmer amber hover glow.
- Reworked the About page "How I Work" cards so step numbers sit inside the card with proper top-right padding instead of negative positioning.
- Gave the work cards consistent minimum height, title alignment, and responsive two-column-to-four-column behavior.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- frontend route checks: `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact` returned 200 with backend and frontend running
- browser visual check: not run because the in-app browser was unavailable in this session

Notes:
- No backend, database, API contract, data fetching, or full-site redesign changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 4 Testing Pass

Changed:
- backend/portfolio-api/src/middleware/errorHandler.js
- frontend/portfolio-client/.gitignore
- docs/DEV_LOG.md

What changed:
- Ran a full frontend, backend, API, and database verification pass after PostgreSQL/Prisma integration.
- Hardened backend error handling so unexpected errors use the clean public error shape and malformed JSON returns field-level body errors.
- Added frontend `.env` to `.gitignore` so local Vite API settings are not accidentally tracked.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- backend syntax check: passed with `node --check` across backend JS files
- prisma validate: passed with `npx.cmd prisma validate`
- API smoke checks: passed for health, profile, projects, featured projects, project slug, tech stack, certificates, resume, contact POST, validation errors, unknown route, and malformed JSON
- database check: passed by reading Prisma table counts and confirming contact POST increased `ContactMessage`
- frontend route checks: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- No frontend redesign, backend architecture change, admin dashboard, or API path changes were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 3.2 Prisma Repository Swap

Changed:
- backend/portfolio-api/src/config/env.js
- backend/portfolio-api/src/config/prisma.js
- backend/portfolio-api/src/repositories/profile.repository.js
- backend/portfolio-api/src/repositories/projects.repository.js
- backend/portfolio-api/src/repositories/techStack.repository.js
- backend/portfolio-api/src/repositories/certificates.repository.js
- backend/portfolio-api/src/repositories/resume.repository.js
- backend/portfolio-api/src/repositories/contact.repository.js
- backend/portfolio-api/src/services/profile.service.js
- backend/portfolio-api/src/services/projects.service.js
- backend/portfolio-api/src/services/techStack.service.js
- backend/portfolio-api/src/services/certificates.service.js
- backend/portfolio-api/src/services/resume.service.js
- backend/portfolio-api/src/services/contact.service.js
- backend/portfolio-api/src/controllers/profile.controller.js
- backend/portfolio-api/src/controllers/projects.controller.js
- backend/portfolio-api/src/controllers/techStack.controller.js
- backend/portfolio-api/src/controllers/certificates.controller.js
- backend/portfolio-api/src/controllers/resume.controller.js
- backend/portfolio-api/src/controllers/contact.controller.js
- docs/DEV_LOG.md

What changed:
- Replaced mock repository reads/writes with Prisma-backed repository access for profile, projects, tech stack, certificates, resume, and contact messages.
- Kept route/controller/service/repository layering intact while converting affected services and controllers to async.
- Preserved existing public API response shapes and endpoint paths.
- Contact submissions now save to PostgreSQL `ContactMessage` records.
- Project responses now include database-backed tech stack names and image metadata while preserving the existing frontend-compatible fields.

Verification:
- backend syntax check: passed with `node --check` across backend source and Prisma files
- database count check: passed for profiles, projects, tech stack items, certificates, resume files, and contact messages
- API smoke check: passed for health, profile, projects, featured projects, project by slug, tech stack, certificates, resume, valid contact, and invalid contact validation
- contact persistence check: passed with `ContactMessage` count increasing after POST
- frontend route compatibility: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`

Notes:
- Mock data files were retained as requested. No frontend redesign, public endpoint changes, admin dashboard, or major new features were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 3.1 Prisma Seed Config Fix

Changed:
- backend/portfolio-api/prisma.config.js
- docs/DEV_LOG.md

What changed:
- Added Prisma 7 `migrations.path` and `migrations.seed` configuration.
- Wired Prisma seed execution to the existing JavaScript seed file at `prisma/seed.js`.

Verification:
- prisma validate: passed with `npx.cmd prisma validate`
- config syntax check: passed with `node --check prisma.config.js`

Notes:
- No migration, seed execution, schema model changes, mock repository replacement, Prisma repository connection, or frontend edits were made.

Scope check:
- Stayed within requested scope: yes

## 2026-05-27 - Phase 3.1 Prisma Database Foundation

Changed:
- backend/portfolio-api/package.json
- backend/portfolio-api/package-lock.json
- backend/portfolio-api/.env.example
- backend/portfolio-api/prisma.config.js
- backend/portfolio-api/prisma/schema.prisma
- backend/portfolio-api/prisma/seed.js
- backend/portfolio-api/src/config/prisma.js
- database/seeds/README.md
- docs/DEV_LOG.md

What changed:
- Added Prisma and PostgreSQL driver adapter dependencies to the existing Express backend.
- Added Prisma schema models for Profile, SocialLink, Project, ProjectImage, TechStackItem, ProjectTechStack, Certificate, ResumeFile, and ContactMessage.
- Added an admin-ready relationship structure for project images and project-to-tech-stack joins.
- Added a shared Prisma client module and Prisma 7 config that uses the existing `DATABASE_URL`.
- Added seed scaffolding based on the current backend mock data without replacing mock repositories yet.

Verification:
- prisma format: passed
- prisma generate: passed with `npm.cmd run prisma:generate`
- prisma validate: passed
- Prisma connection check: passed with `prisma.$connect()`
- syntax check: passed with `node --check` across backend source and Prisma seed/config files
- migration: not run; scaffold-only task
- seed: not run; requires migration first

Notes:
- No frontend redesign, public endpoint path changes, mock repository replacement, admin dashboard, or manual SQL queries were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 2.3 Backend/API Contract Polish

Changed:
- backend/portfolio-api/src/controllers/projects.controller.js
- backend/portfolio-api/src/controllers/certificates.controller.js
- backend/portfolio-api/src/routes/projects.routes.js
- backend/portfolio-api/src/services/projects.service.js
- backend/portfolio-api/src/services/resume.service.js
- backend/portfolio-api/src/repositories/projects.repository.js
- backend/portfolio-api/src/validators/query.validator.js
- backend/portfolio-api/src/middleware/errorHandler.js
- docs/DEV_LOG.md

What changed:
- Added the documented `GET /api/projects/:slug` route while keeping `/api/projects/featured` stable.
- Added backend query validation for project and certificate filters with field-level error responses.
- Tightened error handling so API errors consistently return `{ success, message, errors }` without internal code leakage.
- Adjusted resume metadata output to match the public API contract.

Verification:
- backend syntax check: passed with `node --check` across backend source files
- backend API contract smoke check: passed for success responses, 404, invalid project query, invalid certificate query, invalid contact payload, and valid contact submission
- frontend compatibility smoke check: passed for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- frontend lint/build: not run because no frontend files changed

Notes:
- Backend still uses mock repositories and temporary in-memory contact storage only. No PostgreSQL, Prisma, database migrations, SQL queries, admin dashboard, or frontend redesign was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 2.2 Frontend API Connection

Changed:
- frontend/portfolio-client/.env.example
- frontend/portfolio-client/src/services/
- frontend/portfolio-client/src/hooks/useApiResource.js
- frontend/portfolio-client/src/components/ui/PageState.jsx
- frontend/portfolio-client/src/components/layout/Navbar.jsx
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/pages/AboutPage.jsx
- frontend/portfolio-client/src/pages/ContactPage.jsx
- docs/DEV_LOG.md

What changed:
- Added a frontend API service layer using `VITE_API_BASE_URL`, defaulting to `http://localhost:3000/api`.
- Connected Home, Projects, Tech Stack, Certificates, About, Navbar resume metadata, and Contact form flows to the Phase 2 Express mock API.
- Added simple Nocturne-styled loading, empty, and error states for API-driven pages.
- Replaced the Contact page local-only submit with real `POST /api/contact` submission and backend validation error display.

Verification:
- frontend lint: passed with `npm.cmd run lint`
- frontend build: passed with `npm.cmd run build`
- backend syntax check: passed with `node --check` across backend source files
- backend + frontend smoke check: passed with all API endpoints and frontend routes returning 200
- contact submission: passed with backend returning a success response and temporary in-memory message id
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- Backend mock repositories remain the data source. No PostgreSQL, Prisma, database migrations, SQL queries, admin dashboard, or frontend redesign was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 2.1 Backend Foundation

Changed:
- backend/portfolio-api/package.json
- backend/portfolio-api/package-lock.json
- backend/portfolio-api/.env.example
- backend/portfolio-api/.gitignore
- backend/portfolio-api/src/
- docs/DEV_LOG.md

What changed:
- Created the Node.js Express backend foundation with route, controller, service, repository, validator, middleware, config, and utility layers.
- Added backend mock data for profile, projects, tech stack, certificates, resume metadata, and temporary in-memory contact messages.
- Added public API endpoints for health, profile, projects, featured projects, tech stack, certificates, resume, and contact submission.
- Added backend-owned contact validation and consistent success/error response helpers.

Verification:
- npm install: passed with `NODE_OPTIONS=--use-system-ca`
- npm run dev: passed with route checks for `/api/health`, `/api/profile`, `/api/projects`, `/api/projects/featured`, `/api/tech-stack`, `/api/certificates`, and `/api/resume`
- npm run start: passed with `/api/health` returning `{ "success": true, "data": { "status": "ok" } }`
- syntax check: passed with `node --check` across backend source files
- contact validation: passed with invalid payload returning 400 and four field errors

Notes:
- Backend uses mock repositories only. No PostgreSQL, Prisma, database migrations, SQL queries, frontend API wiring, or frontend UI changes were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.8 Frontend Polish Pass

Changed:
- frontend/portfolio-client/src/components/layout/Navbar.jsx
- frontend/portfolio-client/src/components/layout/Footer.jsx
- frontend/portfolio-client/src/components/layout/PageShell.jsx
- frontend/portfolio-client/src/components/ui/ArrowLink.jsx
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/pages/ContactPage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- frontend/portfolio-client/src/assets/
- docs/DEV_LOG.md

What changed:
- Polished shared spacing for the navbar, footer, and page shell so completed Phase 1 pages feel more consistent.
- Added a shared `ArrowLink` primitive and reused it for small CTA/action links across completed pages.
- Made placeholder project, certificate, and social URLs render as disabled coming-soon controls instead of navigating to `#`.
- Removed obsolete Vite starter assets and unused placeholder mock exports.

Verification:
- npm run dev: passed with route checks for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, Prisma, or API assumption changes were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.7 Contact Page Conversion

Changed:
- frontend/portfolio-client/src/pages/ContactPage.jsx
- frontend/portfolio-client/src/components/ui/Select.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the Contact page into the Nocturne contact layout using `contact_page.html` as visual reference.
- Added local-only contact form handling, project type select, contact info stack, social links, service cards, and bottom CTA.
- Expanded mock contact/profile service data for page content and form options.

Verification:
- npm run dev: passed with `/contact` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run

Notes:
- Form submission only prevents default and shows a local preview message. No backend connection was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.6 About Page Conversion

Changed:
- frontend/portfolio-client/src/pages/AboutPage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the About page into the Nocturne about layout using `about_page.html` as visual reference.
- Added data-driven hero, story, avatar placeholder, current focus, work process, values, currently learning, and bottom CTA sections.
- Expanded mock profile/about data with page copy, values, learning items, and workflow content.

Verification:
- npm run dev: passed with `/about` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, Prisma, or external export images were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.5 Certificates Page Conversion

Changed:
- frontend/portfolio-client/src/pages/CertificatesPage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the Certificates page into the Nocturne certificates layout using `certificats_page.html` as visual reference.
- Added frontend-only certificate filters, responsive certificate cards, learning-in-progress cards, and bottom CTA.
- Expanded mock certificate data with categories, years, providers, and credential links.

Verification:
- npm run dev: passed with `/certificates` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, Prisma, or external export images were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.4 Tech Stack Page Conversion

Changed:
- frontend/portfolio-client/src/pages/TechStackPage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the Tech Stack page into the Nocturne tech stack layout using `techstack_page.html` as visual reference.
- Added data-driven core toolkit bento cards, active learning cards, workflow steps, applied project links, and bottom CTA.
- Expanded mock tech stack data with tool statuses and learning/workflow content.

Verification:
- npm run dev: passed with `/tech-stack` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, Prisma, or external export images were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.3 Projects Page Conversion

Changed:
- frontend/portfolio-client/src/pages/ProjectsPage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the Projects page into the Nocturne projects layout using `projects_page.html` as visual reference.
- Added frontend-only project filters, responsive project cards, styled image placeholders, action links, and bottom CTA.
- Expanded mock project data with descriptions, categories, tech stacks, and optional case study links.

Verification:
- npm run dev: passed with `/projects` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, Prisma, or external export images were added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1.2 Homepage Conversion

Changed:
- frontend/portfolio-client/src/pages/HomePage.jsx
- frontend/portfolio-client/src/data/mockPortfolioData.js
- docs/DEV_LOG.md

What changed:
- Converted the Home page into the Nocturne Portfolio homepage structure using `homepage.html` as visual reference.
- Added mock homepage, featured project, tech stack, and certificate preview data.
- Built responsive hero, featured projects, tech stack preview, about/certificates preview, and contact CTA sections without external export images.

Verification:
- npm run dev: passed with `/` route returning 200
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- Frontend remains mock-data only. No backend, database, PostgreSQL, or Prisma work was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1 Styling Fix

Changed:
- frontend/portfolio-client/src/index.css
- frontend/portfolio-client/src/styles/design-tokens.css
- frontend/portfolio-client/src/components/layout/
- frontend/portfolio-client/src/components/ui/
- frontend/portfolio-client/src/pages/
- docs/DEV_LOG.md

What changed:
- Added Tailwind v4 theme tokens for the Nocturne color, font, border, and glow system.
- Loaded the Hanken Grotesk and JetBrains Mono fonts and enforced the dark espresso background on `html`, `body`, `#root`, and `PageShell`.
- Reworked shared layout and UI components to use named Nocturne token utilities instead of scattered arbitrary styling.

Verification:
- npm run dev: passed with route checks for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- Tailwind is configured through `@tailwindcss/vite`; no old `tailwind.config.js` dependency was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update

## 2026-05-27 - Phase 1 Frontend Foundation

Changed:
- frontend/portfolio-client/vite.config.js
- frontend/portfolio-client/src/
- docs/DEV_LOG.md

What changed:
- Added the React Router route foundation for `/`, `/projects`, `/tech-stack`, `/certificates`, `/about`, and `/contact`.
- Added shared Nocturne layout and UI components, design tokens, mock portfolio data, and placeholder pages.
- Enabled Tailwind CSS through `@tailwindcss/vite` and removed the Vite starter screen.

Verification:
- npm run dev: passed with `npm.cmd run dev -- --host 127.0.0.1`
- npm run lint: passed with `npm.cmd run lint`
- npm run build: passed with `npm.cmd run build`
- browser check: not run because the in-app browser was unavailable in this session

Notes:
- Frontend uses mock data only. No backend, database, PostgreSQL, or Prisma integration was added.

Scope check:
- Stayed within requested scope: yes, except for this required DEV_LOG update
