# PostgreSQL Setup

Use PostgreSQL locally first. It is better for learning than jumping straight to cloud hosting.

## Do you need to download something?
Yes, for local development on Windows, install PostgreSQL. The official Windows installer includes:
- PostgreSQL server
- pgAdmin GUI
- StackBuilder

You also need Node.js for the backend and Prisma packages inside the project.

## Recommended beginner setup
```txt
Local PostgreSQL + pgAdmin + Prisma + Express backend
```

Do not use Docker yet unless you already understand it.

## Step 1: Install PostgreSQL
During installation:
- Keep port: `5432`
- Remember the password for user `postgres`
- Install pgAdmin when offered

## Step 2: Create database
Using pgAdmin or psql, create:

```sql
CREATE DATABASE portfolio_dev;
```

## Step 3: Backend .env
Create:

```txt
backend/portfolio-api/.env
```

Add:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/portfolio_dev?schema=public"
PORT=3000
FRONTEND_URL="http://localhost:5173"
```

Replace `YOUR_PASSWORD` with the PostgreSQL password you created.

## Step 4: Install backend packages
Inside `backend/portfolio-api`:

```bash
npm init -y
npm install express cors dotenv @prisma/client
npm install -D prisma nodemon
npx prisma init --datasource-provider postgresql
```

## Step 5: Add schema
Paste the draft schema from `DATABASE_SCHEMA.md` into:

```txt
backend/portfolio-api/prisma/schema.prisma
```

## Step 6: Create migration
```bash
npx prisma migrate dev --name init_portfolio_schema
npx prisma generate
```

## Step 7: Inspect data
```bash
npx prisma studio
```

## When to use hosted PostgreSQL instead
Use hosted PostgreSQL later when deploying.
Good options:
- Supabase
- Neon
- Prisma Postgres
- Railway

For now, local PostgreSQL is enough.

## Common mistakes
- Forgetting PostgreSQL password.
- Wrong port.
- Committing `.env`.
- Creating database tables manually and also using Prisma migrations randomly.
- Letting frontend connect directly to PostgreSQL.
