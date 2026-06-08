# Database Schema

Database: PostgreSQL
ORM: Prisma

## Tables
```txt
profiles
social_links
projects
project_images
tech_stack_items
project_tech_stack
certificates
resume_files
contact_messages
```

## Prisma schema draft
Use this as the starting model in `backend/portfolio-api/prisma/schema.prisma`.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Profile {
  id           String       @id @default(cuid())
  name         String
  slug         String       @unique
  title        String
  headline     String
  shortBio     String
  longBio      String?
  location     String?
  availability String?
  email        String?
  avatarUrl    String?
  resumeUrl    String?
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt
  socialLinks  SocialLink[]
}

model SocialLink {
  id        String   @id @default(cuid())
  profileId String
  platform  String
  label     String
  url       String
  sortOrder Int      @default(0)
  isVisible Boolean  @default(true)
  profile   Profile  @relation(fields: [profileId], references: [id], onDelete: Cascade)

  @@index([profileId])
}

model Project {
  id            String             @id @default(cuid())
  title         String
  slug          String             @unique
  summary       String
  description   String?
  category      String
  status        String             @default("in_progress")
  isFeatured    Boolean            @default(false)
  thumbnailUrl  String?
  liveUrl       String?
  githubUrl     String?
  caseStudyUrl  String?
  startedAt     DateTime?
  completedAt   DateTime?
  sortOrder     Int                @default(0)
  isPublished   Boolean            @default(false)
  createdAt     DateTime           @default(now())
  updatedAt     DateTime           @updatedAt
  images        ProjectImage[]
  techStack     ProjectTechStack[]

  @@index([category])
  @@index([isFeatured])
  @@index([isPublished])
}

model ProjectImage {
  id        String  @id @default(cuid())
  projectId String
  url       String
  alt       String
  sortOrder Int     @default(0)
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)

  @@index([projectId])
}

model TechStackItem {
  id          String             @id @default(cuid())
  name        String             @unique
  category    String
  level       String
  summary     String?
  sortOrder   Int                @default(0)
  isVisible   Boolean            @default(true)
  projects    ProjectTechStack[]

  @@index([category])
}

model ProjectTechStack {
  projectId       String
  techStackItemId String
  project         Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)
  techStackItem   TechStackItem @relation(fields: [techStackItemId], references: [id], onDelete: Cascade)

  @@id([projectId, techStackItemId])
}

model Certificate {
  id            String    @id @default(cuid())
  title         String
  provider      String
  category      String
  issuedAt      DateTime?
  credentialUrl String?
  imageUrl      String?
  summary       String?
  sortOrder     Int       @default(0)
  isVisible     Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([category])
  @@index([isVisible])
}

model ResumeFile {
  id          String   @id @default(cuid())
  label       String
  fileName    String
  downloadUrl String
  version     String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
}

model ContactMessage {
  id          String   @id @default(cuid())
  name        String
  email       String
  projectType String
  message     String
  status      String   @default("new")
  createdAt   DateTime @default(now())

  @@index([status])
  @@index([createdAt])
}
```

## Migration commands
Run inside `backend/portfolio-api`:

```bash
npx prisma migrate dev --name init_portfolio_schema
npx prisma generate
```

## Seed rule
Put seed scripts in:

```txt
database/seeds/
```

Then wire them to Prisma later if needed.
