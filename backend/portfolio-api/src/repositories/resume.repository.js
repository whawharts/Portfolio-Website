import { prisma } from '../config/prisma.js'

export function findActiveResume() {
  return prisma.resumeFile.findFirst({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  })
}
