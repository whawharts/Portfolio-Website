# Architecture

## Goal
A portfolio website that practices real full-stack structure while staying beginner-readable.

## System
```txt
React/Vite Frontend
  -> calls Express REST API
    -> uses Prisma
      -> reads/writes PostgreSQL
```

## Root folders
```txt
portfolio-website/
├── frontend/
│   └── portfolio-client/
├── backend/
│   └── portfolio-api/
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema/
└── docs/
```

## Frontend responsibility
- Render pages and reusable components.
- Call backend using service files.
- Show loading, empty, success, and error states.
- Keep styling consistent with design tokens.

## Backend responsibility
- Serve profile, projects, tech stack, certificates, resume metadata, and contact endpoint.
- Validate requests.
- Filter, sort, and shape data.
- Hide database structure from frontend.

## Database responsibility
- Store portfolio content and contact messages.
- Enforce relationships and required fields.
- Keep seed data realistic and editable.

## Data flow example
```txt
ProjectsPage.jsx
  -> projectApi.getProjects({ category })
    -> GET /api/projects?category=frontend
      -> projects.controller
        -> projects.service
          -> projects.repository
            -> Prisma Project model
```

## Recommended local ports
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- PostgreSQL: `localhost:5432`

## Environment files
```txt
frontend/portfolio-client/.env
backend/portfolio-api/.env
```

Never commit real `.env` files. Commit `.env.example` only.
