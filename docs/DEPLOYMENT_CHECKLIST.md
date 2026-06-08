# Deployment Checklist

Use this checklist when moving the portfolio from local development to hosted production.

## Suitable Platforms

Frontend:
- Vercel
- Netlify
- Cloudflare Pages

Backend:
- Render
- Railway
- Fly.io
- DigitalOcean App Platform

PostgreSQL:
- Neon
- Supabase
- Railway PostgreSQL
- Render PostgreSQL
- Prisma Postgres

Recommended beginner pairing:
- Frontend on Vercel or Netlify
- Backend on Render or Railway
- PostgreSQL on Neon, Supabase, Railway, or the same backend platform

## Deployment Order

1. Create the hosted PostgreSQL database.
2. Copy the production `DATABASE_URL`.
3. Deploy the backend service with production environment variables.
4. Run Prisma production migrations against the hosted database.
5. Run the Prisma seed once for initial portfolio content.
6. Verify backend API endpoints from the deployed backend URL.
7. Deploy the frontend with `VITE_API_BASE_URL` pointing to the deployed backend API.
8. Update backend CORS allowed origins with the deployed frontend URL.
9. Verify frontend routes, resume download, images, contact form, and API-backed content.
10. Run Lighthouse and browser console checks on the deployed frontend.

## Frontend Requirements

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

Frontend root for hosting:

```txt
frontend/portfolio-client
```

Required production environment variable:

```env
VITE_API_BASE_URL=https://your-backend-domain.example/api
```

Notes:
- The frontend code has a local fallback of `http://localhost:3000/api`, but production must set `VITE_API_BASE_URL`.
- Public files inside `frontend/portfolio-client/public/` are served from the site root.
- `robots.txt` must remain at `frontend/portfolio-client/public/robots.txt`.
- The resume file must be placed at `frontend/portfolio-client/public/resume/Joseph-Sotomil-Resume.pdf`.
- Profile avatar images must remain in `frontend/portfolio-client/public/images/profile/`.

## Backend Requirements

Start command:

```bash
npm run start
```

Backend root for hosting:

```txt
backend/portfolio-api
```

Required production environment variables:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
FRONTEND_URL=https://your-frontend-domain.example
FRONTEND_URLS=https://your-frontend-domain.example,https://your-preview-domain.example
```

Notes:
- `PORT` may be injected automatically by the host. Keep the app using `process.env.PORT`.
- `FRONTEND_URLS` is comma-separated and is preferred for production.
- `FRONTEND_URL` remains supported for local development and single-origin deployments.
- CORS allows requests with no origin for server-to-server checks and allows only origins listed in `FRONTEND_URLS`.

## PostgreSQL Requirements

Use a hosted PostgreSQL database for production. The backend must receive the provider's connection string through `DATABASE_URL`.

Production database setup:

```bash
cd backend/portfolio-api
npm install
npm run prisma:generate
npm run prisma:deploy
npm run db:seed
```

Use `prisma:deploy` in production, not `prisma:migrate`. The `prisma:migrate` script uses `prisma migrate dev` and is for local development only.

After seeding, verify:

```bash
npm run prisma:studio
```

or check the API:

```txt
GET /api/profile
GET /api/projects
GET /api/tech-stack
GET /api/certificates
GET /api/resume
```

## Seed Data Rules

Seed file:

```txt
backend/portfolio-api/prisma/seed.js
```

Before production:
- Replace placeholder profile text with real profile content.
- Replace placeholder projects with real projects.
- Replace placeholder certificates with real certificates.
- Use real `liveUrl`, `githubUrl`, `caseStudyUrl`, and `credentialUrl` values only when they exist.
- Use `null` for unavailable links. Do not use `#`.
- Keep stale projects unpublished and stale certificates hidden by rerunning the seed.

Current behavior:
- Projects in the seed stay public with `isPublished: true`.
- Projects no longer present in the seed are marked `isPublished: false` and `isFeatured: false`.
- Certificates no longer present in the seed are marked `isVisible: false`.

## Contact Form Production Behavior

Current behavior:
- `POST /api/contact` validates input on the backend.
- Valid messages are saved to the PostgreSQL `contact_messages` table.
- No email notification is sent yet.
- No spam protection, captcha, or rate limiting is configured yet.

Before public launch, consider:
- Add rate limiting at the backend or hosting platform level.
- Add spam protection if the site receives unwanted submissions.
- Decide whether contact messages should trigger an email notification later.

Local QA note:
- Local QA created contact messages using `qa@example.com`.
- These local rows do not affect production unless the local database is copied to production.
- If needed, remove them in Prisma Studio from the `ContactMessage` table before using a copied database.

## Assets

Resume path expected by the API and frontend:

```txt
/resume/Joseph-Sotomil-Resume.pdf
```

Local file location:

```txt
frontend/portfolio-client/public/resume/Joseph-Sotomil-Resume.pdf
```

Profile image paths expected by the frontend:

```txt
/images/profile/chibi_joseph.png
/images/profile/chibi_joseph_2.png
/images/profile/chibi_joseph_3.png
```

Local file location:

```txt
frontend/portfolio-client/public/images/profile/
```

Robots file:

```txt
frontend/portfolio-client/public/robots.txt
```

Expected production URL:

```txt
https://your-frontend-domain.example/robots.txt
```

## Local-Only Assumptions To Replace

- Frontend `.env.example` points to `http://localhost:3000/api`; production must set `VITE_API_BASE_URL`.
- Backend `.env.example` points to local PostgreSQL; production must set hosted `DATABASE_URL`.
- Backend CORS defaults to `http://localhost:5173`; production must set `FRONTEND_URLS`.
- Floating contact panel currently keeps contact links in local component constants until a shared profile context is added.
- Contact form stores messages only in the database; it does not send email notifications.

## Final Verification

Backend:

```txt
GET /api/health
GET /api/profile
GET /api/projects
GET /api/projects/featured
GET /api/tech-stack
GET /api/certificates
GET /api/resume
POST /api/contact
```

Frontend:

```txt
/
/projects
/tech-stack
/certificates
/about
/contact
```

Check:
- Navbar active states and hover underline.
- Resume button downloads or opens the PDF.
- Public images load.
- Project and certificate cards do not show fake links.
- Certificate tabs filter correctly.
- Contact form saves a message.
- No white background appears.
- No horizontal scroll appears.
- Browser console has no production errors.
- Lighthouse SEO, Accessibility, Best Practices, and Performance pass at acceptable levels.

## Secrets

Never commit:
- `.env`
- database passwords
- production connection strings
- private tokens

Commit only:
- `.env.example`
- deployment documentation
- code and public assets that are safe to publish
