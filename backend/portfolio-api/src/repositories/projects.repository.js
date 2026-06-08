import { prisma } from '../config/prisma.js'

const projectInclude = {
  images: {
    orderBy: { sortOrder: 'asc' },
  },
  techStack: {
    orderBy: { sortOrder: 'asc' },
    include: {
      techStackItem: true,
    },
  },
}

export function findProjects({ category, featured, limit } = {}) {
  return prisma.project.findMany({
    where: {
      isPublished: true,
      ...(category ? { category } : {}),
      ...(featured === 'true' ? { isFeatured: true } : {}),
      ...(featured === 'false' ? { isFeatured: false } : {}),
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    take: limit ? Number(limit) : undefined,
    include: projectInclude,
  })
}

export function findFeaturedProjects() {
  return prisma.project.findMany({
    where: {
      isPublished: true,
      isFeatured: true,
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    include: projectInclude,
  })
}

export function findProjectBySlug(slug) {
  return prisma.project.findFirst({
    where: {
      slug,
      isPublished: true,
    },
    include: projectInclude,
  })
}
