# Backend Rules

Backend path:

```txt
backend/portfolio-api/
```

## Tech
- Node.js
- Express
- Prisma
- PostgreSQL

## Folder structure
```txt
backend/portfolio-api/src/
├── app.js
├── server.js
├── config/
│   ├── env.js
│   └── cors.js
├── routes/
├── controllers/
├── services/
├── repositories/
├── validators/
├── middleware/
└── utils/
```

## Layer rules
Routes:
- Define URL and HTTP method only.
- Call controller.

Controllers:
- Read request params/body/query.
- Call service.
- Return response.
- No database calls.

Services:
- Own business rules.
- Call repositories.
- Shape output for frontend.

Repositories:
- Own Prisma queries.
- No request/response objects.

Validators:
- Validate body/query/params.
- Return useful messages.

## Response shape
All successful responses:
```json
{
  "success": true,
  "data": {},
  "message": "Optional message"
}
```

All errors:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Readable message"
  }
}
```

## Backend owns
- filtering
- sorting
- search
- featured project rules
- published/unpublished visibility
- contact form validation
- data formatting for frontend

## Contact form MVP
For MVP, store the message in PostgreSQL.
Email sending can be added later.

## Security basics
- Use CORS allowlist.
- Validate contact payload.
- Rate-limit contact endpoint later.
- Never expose `.env`.
- Never return internal stack traces in production.

## Before finishing backend task
- Route matches `API_CONTRACTS.md`.
- Validation exists for write endpoints.
- Prisma access stays in repositories.
- Error format is consistent.
