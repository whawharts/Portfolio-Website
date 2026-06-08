import { prisma } from '../config/prisma.js'

export function findProfile() {
  return prisma.profile.findFirst({
    orderBy: { updatedAt: 'desc' },
    include: {
      socialLinks: {
        orderBy: { sortOrder: 'asc' },
      },
    },
  })
}
