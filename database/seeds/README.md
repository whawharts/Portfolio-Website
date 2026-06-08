# Database Seeds

Seed execution for this phase is wired through:

```bash
cd backend/portfolio-api
npm run db:seed
```

The active seed script lives in `backend/portfolio-api/prisma/seed.js` so Prisma can run it directly with the backend schema and generated client.
