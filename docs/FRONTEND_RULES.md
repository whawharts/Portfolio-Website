# Frontend Rules

Frontend path:

```txt
frontend/portfolio-client/
```

## Tech
- React
- Vite
- Tailwind CSS
- React Router
- Plain JavaScript first; use TypeScript later only if intentionally upgraded.

## Folder structure
```txt
frontend/portfolio-client/src/
├── app/
│   ├── App.jsx
│   └── router.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   ├── ProjectDetailPage.jsx
│   ├── TechStackPage.jsx
│   ├── CertificatesPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── components/
│   ├── layout/
│   ├── ui/
│   ├── projects/
│   ├── certificates/
│   └── tech-stack/
├── services/
│   ├── apiClient.js
│   ├── profileApi.js
│   ├── projectApi.js
│   ├── certificateApi.js
│   ├── techStackApi.js
│   └── contactApi.js
├── hooks/
├── styles/
│   └── index.css
└── utils/
```

## Frontend may do
- Render UI.
- Route pages.
- Call backend APIs.
- Display loading, empty, success, and error states.
- Basic UX validation before submitting forms.

## Frontend must not do
- Query PostgreSQL.
- Import Prisma.
- Own filtering/sorting rules beyond passing query params.
- Hardcode real portfolio content long-term.
- Duplicate API URL logic in components.

## API service rule
Components call service functions, never raw `fetch` directly.

Good:
```js
const projects = await projectApi.getProjects({ category });
```

Bad:
```js
fetch('http://localhost:3000/api/projects')
```

## Styling rule
- Use Tailwind classes based on `DESIGN_SYSTEM.md`.
- Put global tokens in Tailwind config or CSS variables.
- Shared components own repeated style patterns.
- Do not copy a full Stitch HTML page directly into React.

## Page states
Every API-driven page needs:
- loading state
- empty state
- error state
- success state

## Resume behavior
Resume button must download or open:

```txt
/public/resume/Joseph-Sotomil-Resume.pdf
```

Suggested link:
```jsx
<a href="/resume/Joseph-Sotomil-Resume.pdf" download>Resume</a>
```

## Before finishing a frontend task
- Navbar is unchanged and shared.
- No white backgrounds.
- Buttons match shared variants.
- Page still works on desktop and mobile widths.
- No console errors.
