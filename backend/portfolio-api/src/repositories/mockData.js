export const profile = {
  name: 'Joseph Sotomil',
  slug: 'joseph-sotomil',
  title: 'Frontend Developer',
  headline: 'Building clean websites and useful web apps.',
  shortBio:
    'I build thoughtful, responsive web experiences with a calm interface style and practical frontend structure.',
  longBio:
    'I enjoy turning ideas into focused web interfaces that feel clear, useful, and maintainable. This portfolio is being built in phases with React, Tailwind CSS, backend APIs, and a PostgreSQL data model.',
  location: 'Philippines',
  availability: 'Available for selected web projects',
  email: 'hello@example.com',
  avatarUrl: null,
  resumeUrl: '/resume/Joseph-Sotomil-Resume.pdf',
  socialLinks: [
    { platform: 'github', label: 'GH', url: null, sortOrder: 1, isVisible: true },
    { platform: 'linkedin', label: 'IN', url: null, sortOrder: 2, isVisible: true },
    { platform: 'facebook', label: 'FB', url: null, sortOrder: 3, isVisible: true },
  ],
}

export const projects = [
  {
    title: 'Padayon App',
    slug: 'padayon-app',
    summary:
      'A productivity app concept for planning tasks, tracking progress, and keeping work moving with less friction.',
    description:
      'A focused productivity app concept for planning tasks, tracking progress, and keeping work moving with less friction.',
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
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Nocturne Portfolio',
    slug: 'nocturne-portfolio',
    summary:
      'A dark espresso portfolio system built with reusable React components and a warm minimalist design direction.',
    description:
      'A portfolio system built in phases with shared React components, warm design tokens, and a cinematic dark interface.',
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
    techStack: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Business Landing Page',
    slug: 'business-landing-page',
    summary:
      'A compact landing page practice build focused on readable sections, strong calls to action, and responsive layout.',
    description:
      'A conversion-focused website layout with clear sections, restrained motion, and responsive content hierarchy.',
    category: 'website',
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
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Website Redesign Study',
    slug: 'website-redesign-study',
    summary:
      'A UI refresh practice project for improving structure, hierarchy, performance cues, and visual consistency.',
    description:
      'A practice redesign study focused on cleaner information architecture, accessibility cues, and reusable interface patterns.',
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
    techStack: ['React', 'Accessibility', 'Design Systems'],
  },
]

export const techStack = [
  {
    category: 'frontend',
    items: [
      { name: 'HTML', level: 'used_in_projects', summary: 'Semantic page structure.', sortOrder: 1, isVisible: true },
      { name: 'CSS', level: 'used_in_projects', summary: 'Responsive visual systems.', sortOrder: 2, isVisible: true },
      { name: 'JavaScript', level: 'practicing', summary: 'Browser behavior and app logic.', sortOrder: 3, isVisible: true },
      { name: 'React', level: 'learning', summary: 'Component-driven interfaces.', sortOrder: 4, isVisible: true },
      { name: 'Tailwind CSS', level: 'learning', summary: 'Utility-first styling.', sortOrder: 5, isVisible: true },
    ],
  },
  {
    category: 'backend',
    items: [
      { name: 'Node.js', level: 'learning', summary: 'JavaScript server runtime.', sortOrder: 1, isVisible: true },
      { name: 'Express', level: 'learning', summary: 'REST API routing and middleware.', sortOrder: 2, isVisible: true },
      { name: 'REST APIs', level: 'learning', summary: 'Request and response structure.', sortOrder: 3, isVisible: true },
    ],
  },
  {
    category: 'database',
    items: [
      { name: 'SQL', level: 'learning', summary: 'Relational query fundamentals.', sortOrder: 1, isVisible: true },
      { name: 'PostgreSQL', level: 'learning', summary: 'Future persistent portfolio data.', sortOrder: 2, isVisible: true },
      { name: 'Data Modeling', level: 'practicing', summary: 'Thinking in entities and relationships.', sortOrder: 3, isVisible: true },
    ],
  },
  {
    category: 'tools',
    items: [
      { name: 'Git', level: 'practicing', summary: 'Version control workflow.', sortOrder: 1, isVisible: true },
      { name: 'GitHub', level: 'practicing', summary: 'Repository and collaboration practice.', sortOrder: 2, isVisible: true },
      { name: 'VS Code', level: 'daily_driver', summary: 'Daily development editor.', sortOrder: 3, isVisible: true },
      { name: 'Figma', level: 'used_in_projects', summary: 'Design reference and handoff.', sortOrder: 4, isVisible: true },
    ],
  },
]

export const certificates = [
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
    provider: 'Sample Provider',
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
    provider: 'Sample Provider',
    category: 'database',
    issuedAt: '2025-02-01',
    credentialUrl: null,
    imageUrl: null,
    summary: 'Database basics and relational thinking.',
    sortOrder: 4,
    isVisible: true,
  },
]

export const resume = {
  label: 'Resume',
  fileName: 'Joseph-Sotomil-Resume.pdf',
  downloadUrl: '/resume/Joseph-Sotomil-Resume.pdf',
  version: 'placeholder',
  isActive: true,
}

export const contactMessages = []
