export const profile = {
  name: 'Joseph Sotomil',
  title: 'Frontend Developer',
  headline: 'Building clean websites and useful web apps.',
  shortBio:
    'I build thoughtful, responsive web experiences with a calm interface style and practical frontend structure.',
  longBio:
    'I enjoy turning ideas into focused web interfaces that feel clear, useful, and maintainable. This portfolio is being built in phases with React, Tailwind CSS, backend APIs, and a PostgreSQL data model.',
  location: 'Philippines',
  availability: 'Available for selected web projects',
  email: 'hello@example.com',
  resumeUrl: '/resume/Joseph-Sotomil-Resume.pdf',
}

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const homePage = {
  hero: {
    availability: 'Available for web projects',
    headline: 'Building clean websites and useful web apps.',
    highlightedWords: 'useful web apps.',
    intro:
      'I am a frontend-focused developer practicing full-stack structure through clean interfaces, reusable components, and calm user experiences.',
    primaryAction: { label: 'View Projects', path: '/projects' },
    secondaryAction: { label: 'Contact Me', path: '/contact' },
    stats: [
      { value: '12+', label: 'Projects Built' },
      { value: '8+', label: 'Tech Practiced' },
      { value: 'UI/UX', label: 'Current Focus' },
    ],
  },
  featuredProjectsTitle: 'Featured Projects',
  techStackTitle: 'Tech Stack',
  aboutTitle: 'About Me',
  certificatesTitle: 'Certificates',
  contactCta: {
    title: "Let's build something thoughtful.",
    message:
      'Have a portfolio idea, small business site, or web app concept? Send a note and we can shape it into something focused.',
    action: { label: 'Start a Conversation', path: '/contact' },
  },
}

export const featuredProjects = [
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
    thumbnailTone: 'amber',
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
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
    thumbnailTone: 'panel',
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
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
    thumbnailTone: 'streetlight',
    liveUrl: null,
    githubUrl: null,
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
    thumbnailTone: 'code',
    liveUrl: null,
    githubUrl: null,
    techStack: ['React', 'Accessibility', 'Design Systems'],
  },
  {
    title: 'Local Cafe Website',
    slug: 'local-cafe-website',
    summary:
      'A small business website concept with menu highlights, contact details, and a simple content-first structure.',
    description:
      'A client-style website concept designed for a neighborhood cafe, using clear sections and a warm visual system.',
    category: 'client',
    status: 'planned',
    isFeatured: false,
    thumbnailTone: 'warm',
    liveUrl: null,
    githubUrl: null,
    techStack: ['React', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Full-stack Notes API',
    slug: 'full-stack-notes-api',
    summary:
      'A full-stack practice build for notes, authentication basics, REST endpoints, and persistent storage.',
    description:
      'A full-stack learning project that connects a simple React UI to REST endpoints and a future database layer.',
    category: 'fullstack',
    status: 'planned',
    isFeatured: false,
    thumbnailTone: 'database',
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    techStack: ['React', 'Express', 'PostgreSQL'],
  },
]

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Websites', value: 'website' },
  { label: 'Apps', value: 'app' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full-stack', value: 'fullstack' },
  { label: 'Practice', value: 'practice' },
  { label: 'Client Work', value: 'client' },
]

export const projectsPage = {
  eyebrow: 'Selected work',
  title: 'Projects',
  intro:
    'A collection of technical explorations, client-style builds, and personal tools. Built in the dark, shaped with structure, and kept warm with the Nocturne system.',
  cta: {
    title: 'Have a project idea?',
    message:
      'I am open to thoughtful freelance opportunities and collaborative builds. Tell me what you are imagining and we can shape the first version together.',
    action: { label: 'Contact Me', path: '/contact' },
  },
}

export const techStackGroups = [
  {
    category: 'Frontend',
    summary: 'Interfaces, component systems, and responsive browser experiences.',
    items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    summary: 'API structure, validation patterns, and server-side data shaping.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Auth Basics'],
  },
  {
    category: 'Database',
    summary: 'Relational data modeling and practical persistence workflows.',
    items: ['PostgreSQL', 'Prisma', 'SQL Basics', 'Data Modeling'],
  },
  {
    category: 'Tools',
    summary: 'Daily development, deployment, and design handoff tools.',
    items: ['Git / GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
]

export const techStackPage = {
  hero: {
    eyebrow: 'Current tools and learning path',
    title: 'Tech Stack',
    intro:
      'The tools and technologies I am learning, practicing, and using to build modern web applications. A focus on fundamentals, clean structure, and incremental mastery.',
  },
  toolkitTitle: 'Core Toolkit',
  learningTitle: 'Active Learning Focus',
  workflowTitle: 'How I Use These Tools',
  practiceTitle: 'Applied in Practice',
  cta: {
    title: 'Want to see these tools in action?',
    action: { label: 'View Projects', path: '/projects' },
  },
}

export const coreToolkit = [
  {
    category: 'Frontend',
    summary: 'The visible interface layer: structure, styling, state, and responsive interaction.',
    span: 'lg:col-span-7',
    items: [
      { name: 'HTML', status: 'Used in projects' },
      { name: 'CSS', status: 'Used in projects' },
      { name: 'JavaScript', status: 'Practicing' },
      { name: 'React', status: 'Learning' },
      { name: 'Tailwind CSS', status: 'Learning' },
    ],
  },
  {
    category: 'Backend',
    summary: 'Server structure, REST endpoints, validation boundaries, and response shaping.',
    span: 'lg:col-span-5',
    items: [
      { name: 'Node.js', status: 'Learning' },
      { name: 'Express', status: 'Learning' },
      { name: 'REST APIs', status: 'Learning' },
      { name: 'Middleware', status: 'Exploring' },
    ],
  },
  {
    category: 'Database',
    summary: 'Relational fundamentals, schemas, constraints, and data access patterns.',
    span: 'lg:col-span-5',
    items: [
      { name: 'SQL', status: 'Learning' },
      { name: 'PostgreSQL', status: 'Learning' },
      { name: 'Prisma', status: 'Exploring' },
      { name: 'Data Modeling', status: 'Practicing' },
    ],
  },
  {
    category: 'Tools',
    summary: 'Daily development tools for versioning, planning, editing, and deployment.',
    span: 'lg:col-span-7',
    items: [
      { name: 'Git', status: 'Practicing' },
      { name: 'GitHub', status: 'Practicing' },
      { name: 'VS Code', status: 'Daily Driver' },
      { name: 'Figma', status: 'Used in projects' },
      { name: 'Vercel', status: 'Exploring' },
    ],
  },
]

export const activeLearningFocus = [
  {
    title: 'React fundamentals',
    summary:
      'Getting comfortable with components, props, state, hooks, and routing without overcomplicating early builds.',
  },
  {
    title: 'Backend API structure',
    summary:
      'Practicing clean Express routes, controllers, services, repositories, and predictable request/response handling.',
  },
  {
    title: 'PostgreSQL basics',
    summary:
      'Learning relational design, keys, constraints, and how database structure supports real application data.',
  },
  {
    title: 'Full-stack project flow',
    summary:
      'Connecting the mental model from frontend screens to APIs, backend data shaping, and future persistence.',
  },
]

export const workflowSteps = [
  {
    step: '01',
    title: 'Plan',
    summary: 'Map the interface, content model, and basic data needs before writing code.',
  },
  {
    step: '02',
    title: 'Build Frontend',
    summary: 'Create the React UI, shared components, routes, and responsive styling.',
  },
  {
    step: '03',
    title: 'Manage Data',
    summary: 'Shape schemas and relationships so the backend can own structured data.',
  },
  {
    step: '04',
    title: 'Connect APIs',
    summary: 'Use backend endpoints to bridge data and frontend screens cleanly.',
  },
  {
    step: '05',
    title: 'Test',
    summary: 'Check routes, interactions, layout, and integration behavior in small passes.',
  },
]

export const certificatePreview = [
  {
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    issuedAt: '2024',
    category: 'frontend',
    credentialUrl: null,
  },
  {
    title: 'JavaScript Algorithms',
    provider: 'Practice Certificate',
    issuedAt: '2024',
    category: 'frontend',
    credentialUrl: null,
  },
  {
    title: 'UI/UX Design Foundations',
    provider: 'Learning Track',
    issuedAt: '2024',
    category: 'design',
    credentialUrl: null,
  },
]

export const certificatesPage = {
  hero: {
    eyebrow: 'Learning records and certifications',
    title: 'Certificates',
    intro:
      'A collection of certificates, courses, and learning milestones from my journey through frontend practice, backend fundamentals, database basics, digital tools, and design foundations.',
  },
  progressTitle: 'Learning in Progress',
  cta: {
    title: 'Learning by building.',
    action: { label: 'View Projects', path: '/projects' },
  },
}

export const certificateFilters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Database', value: 'database' },
  { label: 'Tools', value: 'tools' },
  { label: 'Design', value: 'design' },
]

export const certificates = [
  {
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    category: 'frontend',
    issuedAt: '2024',
    credentialUrl: null,
  },
  {
    title: 'JavaScript Fundamentals',
    provider: 'Practice Certificate',
    category: 'frontend',
    issuedAt: '2024',
    credentialUrl: null,
  },
  {
    title: 'React Basics',
    provider: 'Learning Track',
    category: 'frontend',
    issuedAt: '2025',
    credentialUrl: null,
  },
  {
    title: 'Backend Fundamentals',
    provider: 'Sample Provider',
    category: 'backend',
    issuedAt: '2025',
    credentialUrl: null,
  },
  {
    title: 'SQL Fundamentals',
    provider: 'Sample Provider',
    category: 'database',
    issuedAt: '2025',
    credentialUrl: null,
  },
  {
    title: 'Git and GitHub Essentials',
    provider: 'Sample Provider',
    category: 'tools',
    issuedAt: '2025',
    credentialUrl: null,
  },
  {
    title: 'UI/UX Design Foundations',
    provider: 'Learning Track',
    category: 'design',
    issuedAt: '2024',
    credentialUrl: null,
  },
]

export const learningProgress = [
  {
    title: 'Frontend Practice',
    summary:
      'Continuously refining modern JavaScript, React component structure, responsive layouts, and accessible interface details.',
  },
  {
    title: 'Backend Fundamentals',
    summary:
      'Deepening server-side architecture, REST API design, validation boundaries, and readable Express project structure.',
  },
  {
    title: 'Database Basics',
    summary:
      'Expanding database modeling, relational thinking, query basics, and the trade-offs behind persistent data design.',
  },
]

export const aboutPage = {
  hero: {
    eyebrow: 'About the developer',
    title: 'Building one project at a time.',
    intro:
      'I am a growing web developer learning through real projects, improving my frontend skills, understanding backend systems, and building websites that feel clean, useful, and intentional.',
  },
  story: [
    'I started learning web development by practicing HTML, CSS, JavaScript, and React. I learn best when I can see how design, code, backend logic, and data connect together in a real project.',
    'This portfolio is part of that process: a phased full-stack build where each page, component, and data model is an opportunity to practice structure, consistency, and thoughtful interface design.',
  ],
  focusTitle: 'Current Focus',
  workTitle: 'How I Work',
  valuesTitle: 'Values',
  learningTitle: 'Currently Learning',
  cta: {
    title: "Want to see what I'm building?",
    message: 'Explore the projects where I practice these skills and turn ideas into real interfaces.',
    action: { label: 'View Projects', path: '/projects' },
  },
}

export const currentFocus = [
  {
    title: 'Frontend Foundations',
    summary:
      'Mastering layout mechanics, component architecture, responsive design, and the small details that make interfaces feel calm.',
  },
  {
    title: 'Backend Logic',
    summary:
      'Learning how APIs connect systems, manage requests, shape responses, and keep business logic out of the frontend.',
  },
  {
    title: 'Database Thinking',
    summary:
      'Practicing how data relationships are structured, stored, retrieved, and protected as projects become more complete.',
  },
]

export const workProcess = [
  { step: '01', title: 'Plan the structure' },
  { step: '02', title: 'Design the interface' },
  { step: '03', title: 'Build the frontend' },
  { step: '04', title: 'Connect data & improve' },
]

export const developerValues = [
  'Clean and readable code',
  'Simple user experience',
  'Consistent design systems',
  'Learning with patience',
  'Building useful things',
]

export const currentlyLearning = [
  'React fundamentals',
  'JavaScript problem solving',
  'Backend APIs',
  'PostgreSQL basics',
  'Full-stack project structure',
]

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: "Let's build something thoughtful.",
    highlightedWord: 'thoughtful.',
    intro:
      'Have a website idea, portfolio project, landing page, or collaboration in mind? Send a message and I will get back to you.',
  },
  form: {
    projectTypes: [
      { label: 'Portfolio Website', value: 'portfolio' },
      { label: 'Business Landing Page', value: 'landing' },
      { label: 'Simple Web App', value: 'webapp' },
      { label: 'Website Redesign', value: 'redesign' },
      { label: 'Collaboration', value: 'collab' },
      { label: 'Other', value: 'other' },
    ],
    successMessage:
      'Local preview only: your message was not sent anywhere yet. Backend submission comes in Phase 2.',
  },
  info: {
    availability:
      'Open for portfolio websites, landing pages, and practice-based web projects.',
    note: 'I usually reply when available and prefer clear project details, goals, timeline, and examples.',
  },
  socialLinks: [
    { label: 'GH', platform: 'github', url: null },
    { label: 'IN', platform: 'linkedin', url: null },
    { label: 'FB', platform: 'facebook', url: null },
  ],
  servicesTitle: 'What I Can Help With',
  services: [
    {
      title: 'Portfolio websites',
      summary: 'Personal sites to showcase your work, skills, and resume clearly.',
      mark: '</>',
    },
    {
      title: 'Business landing pages',
      summary: 'Clean, focused single pages to capture leads or explain a service.',
      mark: '[]',
    },
    {
      title: 'Simple web apps',
      summary: 'Interactive frontend tools or dashboards for specific utilities.',
      mark: '{}',
    },
    {
      title: 'Website redesigns',
      summary: 'Taking an older design and giving it a modern, clean update.',
      mark: '~~',
    },
  ],
  cta: {
    title: 'Not sure where to start?',
    message: 'Tell me what you want to build, and we can start with a simple plan.',
    action: { label: 'View Projects', path: '/projects' },
  },
}
