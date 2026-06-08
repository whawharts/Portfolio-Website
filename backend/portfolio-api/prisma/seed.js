import { prisma } from '../src/config/prisma.js'

// CONTENT ENTRY GUIDE
// Replace the placeholder values in the sections below when you are ready to
// enter real portfolio content. Use null for links that are not ready yet,
// and keep local resume downloads under frontend/portfolio-client/public/resume/.

// 1. PROFILE
// Replace this with your real name, title, bio, location, email, and social links.
const profile = {
  name: 'Joseph Sotomil',
  slug: 'joseph-sotomil',
  title: 'Programmer',
  headline: 'Building clean web applications.',
  shortBio:
    'I build thoughtful, responsive web experiences with a calm interface style and practical frontend structure.',
  longBio:
    'I enjoy turning ideas into focused web interfaces that feel clear, useful, and maintainable. This portfolio is being built in phases with React, Tailwind CSS, backend APIs, and a PostgreSQL data model.',
  location: 'Philippines',
  availability: 'Available for selected web projects',
  email: 'Josephsotomil2000@gmail.com',
  avatarUrl: '/images/profile/chibi_joseph.png',
  resumeUrl: '/resume/Joseph-Sotomil-Resume.pdf',
  socialLinks: [
    { platform: 'github', label: 'GH', url: 'https://github.com/whawharts', sortOrder: 1, isVisible: true },
    { platform: 'linkedin', label: 'IN', url: 'https://www.linkedin.com/in/joseph-sotomil-7b63173b5/', sortOrder: 2, isVisible: true },
    { platform: 'facebook', label: 'FB', url: 'https://www.facebook.com/whawharts/', sortOrder: 3, isVisible: true },
  ],
}

// 2. TECH STACK
// Replace, add, or reorder skills here. Valid categories are:
// frontend, backend, database, tools, design
// Valid levels are: learning, practicing, used_in_projects, daily_driver
const techStack = [
  {
    category: 'frontend',
    items: [
      { name: 'HTML', level: 'used_in_projects', summary: 'Semantic page structure.', sortOrder: 1, isVisible: true },
      { name: 'CSS', level: 'used_in_projects', summary: 'Responsive visual systems.', sortOrder: 2, isVisible: true },
      { name: 'JavaScript', level: 'used_in_projects', summary: 'Browser behavior and app logic.', sortOrder: 3, isVisible: true },
      { name: 'React', level: 'used_in_projects', summary: 'Component-driven interfaces.', sortOrder: 4, isVisible: true },
      { name: 'Tailwind CSS', level: 'used_in_projects', summary: 'Utility-first styling.', sortOrder: 5, isVisible: true },
    ],
  },
  {
    category: 'backend',
    items: [
      { name: 'Node.js', level: 'used_in_projects', summary: 'JavaScript server runtime.', sortOrder: 1, isVisible: true },
      { name: 'Express', level: 'used_in_projects', summary: 'REST API routing and middleware.', sortOrder: 2, isVisible: true },
      { name: 'REST APIs', level: 'used_in_projects', summary: 'Request and response structure.', sortOrder: 3, isVisible: true },
    ],
  },
  {
    category: 'database',
    items: [
      { name: 'SQL', level: 'used_in_projects', summary: 'Relational query fundamentals.', sortOrder: 1, isVisible: true },
      { name: 'PostgreSQL', level: 'used_in_projects', summary: 'Persistent portfolio data.', sortOrder: 2, isVisible: true },
      { name: 'Firebase', level: 'used_in_projects', summary: 'Thinking in entities and relationships.', sortOrder: 3, isVisible: true },
    ],
  },
  {
    category: 'tools',
    items: [
      { name: 'Git', level: 'used_in_projects', summary: 'Version control workflow.', sortOrder: 1, isVisible: true },
      { name: 'GitHub', level: 'used_in_projects', summary: 'Repository and collaboration practice.', sortOrder: 2, isVisible: true },
      { name: 'VS Code', level: 'daily_driver', summary: 'Daily development editor.', sortOrder: 3, isVisible: true },
      { name: 'Figma', level: 'used_in_projects', summary: 'Design reference and handoff.', sortOrder: 4, isVisible: true },
    ],
  },
]

// 3. PROJECTS
// Replace these placeholders with real projects. Keep slugs unique and use
// techStack names that exist in the TECH STACK section above.
const projects = [
  {
    title: 'Padayon App',
    slug: 'padayon-app',
    summary:
      'A productivity app concept for planning tasks, tracking progress, and keeping work moving with less friction.',
    description:
      'A focused productivity app concept for weekly progression, helping users stay focused, and showing that progress is possible.',
    category: 'app',
    status: 'in_progress',
    isFeatured: true,
    thumbnailUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    startedAt: '2025-01-01',
    completedAt: null,
    sortOrder: 1,
    isPublished: true,
    techStack: ['Flutter', 'Node.js', 'SQLite'],
  },
  {
    title: 'Nocturne Portfolio Website',
    slug: 'nocturne-portfolio-website',
    summary:
      'A dark espresso portfolio theme built with reusable React components and a warm minimalist design direction.',
    description:
      'A portfolio system built in phases with shared React components, warm design tokens, and a cinematic dark interface to show my preference.',
    category: 'frontend',
    status: 'in_progress',
    isFeatured: true,
    thumbnailUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    startedAt: '2025-02-01',
    completedAt: null,
    sortOrder: 2,
    isPublished: true,
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Kaladkarin App',
    slug: 'kaladkarin-app',
    summary:
      'Kaladkarin is an app focus on daily commuters helping them everyday and analyzes their travel patterns to provide insights and suggestions for a smoother journey.',
    description:
      'A practice project for designing and developing a travel planning application for daily commuters.',
    category: 'app',
    status: 'planned',
    isFeatured: true,
    thumbnailUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    startedAt: '2025-03-01',
    completedAt: null,
    sortOrder: 3,
    isPublished: true,
    techStack: ['ReactNative', 'Node.js', 'postgreSQL'],
  },
  {
    title: 'Emergency contact app',
    slug: 'emergency-contact-app',
    summary:
      'A mobile app that helps travelers quickly access and share emergency contact information, providing peace of mind during their journeys.',
    description:
      'A practice one-page mobile app concept for travelers to quickly access and share emergency contact information, providing peace of mind during their journeys.',
    category: 'practice',
    status: 'planned',
    isFeatured: true,
    thumbnailUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    startedAt: '2025-04-01',
    completedAt: null,
    sortOrder: 4,
    isPublished: true,
    techStack: ['React'],
  },
]

// 4. CERTIFICATES
// Replace providers, dates, credential URLs, and summaries with your real records.
// Use null while a certificate URL is not ready.
const certificates = [
  {
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    category: 'frontend',
    issuedAt: '2024-01-01',
    credentialUrl: null,
    imageUrl: null,
    summary: 'Responsive layout and web fundamentals.',
    sortOrder: 1,
    isVisible: true,
  },
  {
    title: 'JavaScript Fundamentals',
    provider: 'Practice Certificate',
    category: 'frontend',
    issuedAt: '2024-04-01',
    credentialUrl: null,
    imageUrl: null,
    summary: 'Core JavaScript practice and problem solving.',
    sortOrder: 2,
    isVisible: true,
  },
  {
    title: 'Backend Fundamentals',
    provider: 'Placeholder Provider',
    category: 'backend',
    issuedAt: '2025-01-01',
    credentialUrl: null,
    imageUrl: null,
    summary: 'Server structure and API foundations.',
    sortOrder: 3,
    isVisible: true,
  },
  {
    title: 'SQL Fundamentals',
    provider: 'Placeholder Provider',
    category: 'database',
    issuedAt: '2025-02-01',
    credentialUrl: null,
    imageUrl: null,
    summary: 'Database basics and relational thinking.',
    sortOrder: 4,
    isVisible: true,
  },
]

// 5. RESUME
// Place the real file at:
// frontend/portfolio-client/public/resume/Joseph-Sotomil-Resume.pdf
const resume = {
  label: 'Resume',
  fileName: 'Joseph-Sotomil-Resume.pdf',
  downloadUrl: '/resume/Joseph-Sotomil-Resume.pdf',
  version: 'placeholder',
  isActive: true,
}

async function seedProfile() {
  const savedProfile = await prisma.profile.upsert({
    where: { slug: profile.slug },
    update: {
      name: profile.name,
      title: profile.title,
      headline: profile.headline,
      shortBio: profile.shortBio,
      longBio: profile.longBio,
      location: profile.location,
      availability: profile.availability,
      email: profile.email,
      avatarUrl: profile.avatarUrl,
      resumeUrl: profile.resumeUrl,
    },
    create: {
      name: profile.name,
      slug: profile.slug,
      title: profile.title,
      headline: profile.headline,
      shortBio: profile.shortBio,
      longBio: profile.longBio,
      location: profile.location,
      availability: profile.availability,
      email: profile.email,
      avatarUrl: profile.avatarUrl,
      resumeUrl: profile.resumeUrl,
    },
  })

  for (const socialLink of profile.socialLinks) {
    await prisma.socialLink.upsert({
      where: {
        profileId_platform: {
          profileId: savedProfile.id,
          platform: socialLink.platform,
        },
      },
      update: socialLink,
      create: {
        profileId: savedProfile.id,
        ...socialLink,
      },
    })
  }
}

async function seedTechStack() {
  const allItems = techStack.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      category: group.category,
    })),
  )

  for (const item of allItems) {
    await prisma.techStackItem.upsert({
      where: { name: item.name },
      update: item,
      create: item,
    })
  }
}

async function seedProjects() {
  const currentProjectSlugs = projects.map((project) => project.slug)

  // The seed file is the public content source; stale rows are hidden instead
  // of deleted so old records do not leak into the live API after reseeding.
  await prisma.project.updateMany({
    where: {
      slug: {
        notIn: currentProjectSlugs,
      },
    },
    data: {
      isFeatured: false,
      isPublished: false,
    },
  })

  for (const project of projects) {
    const { techStack: projectTechStack, ...projectData } = project
    const savedProject = await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        ...projectData,
        startedAt: project.startedAt ? new Date(project.startedAt) : null,
        completedAt: project.completedAt ? new Date(project.completedAt) : null,
      },
      create: {
        ...projectData,
        startedAt: project.startedAt ? new Date(project.startedAt) : null,
        completedAt: project.completedAt ? new Date(project.completedAt) : null,
      },
    })

    for (const [index, techName] of projectTechStack.entries()) {
      const techStackItem = await prisma.techStackItem.findUnique({
        where: { name: techName },
      })

      if (techStackItem) {
        await prisma.projectTechStack.upsert({
          where: {
            projectId_techStackItemId: {
              projectId: savedProject.id,
              techStackItemId: techStackItem.id,
            },
          },
          update: { sortOrder: index },
          create: {
            projectId: savedProject.id,
            techStackItemId: techStackItem.id,
            sortOrder: index,
          },
        })
      }
    }
  }
}

async function seedCertificates() {
  const currentCertificateKeys = new Set(
    certificates.map((certificate) => `${certificate.title}::${certificate.provider}`),
  )

  const existingCertificates = await prisma.certificate.findMany({
    select: {
      id: true,
      title: true,
      provider: true,
    },
  })

  const staleCertificateIds = existingCertificates
    .filter((certificate) => !currentCertificateKeys.has(`${certificate.title}::${certificate.provider}`))
    .map((certificate) => certificate.id)

  if (staleCertificateIds.length > 0) {
    await prisma.certificate.updateMany({
      where: {
        id: {
          in: staleCertificateIds,
        },
      },
      data: {
        isVisible: false,
      },
    })
  }

  for (const certificate of certificates) {
    await prisma.certificate.upsert({
      where: {
        title_provider: {
          title: certificate.title,
          provider: certificate.provider,
        },
      },
      update: {
        ...certificate,
        issuedAt: certificate.issuedAt ? new Date(certificate.issuedAt) : null,
      },
      create: {
        ...certificate,
        issuedAt: certificate.issuedAt ? new Date(certificate.issuedAt) : null,
      },
    })
  }
}

async function seedResume() {
  await prisma.resumeFile.upsert({
    where: {
      fileName_version: {
        fileName: resume.fileName,
        version: resume.version,
      },
    },
    update: resume,
    create: {
      ...resume,
    },
  })
}

async function main() {
  await seedProfile()
  await seedTechStack()
  await seedProjects()
  await seedCertificates()
  await seedResume()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
