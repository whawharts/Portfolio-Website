import { prisma } from '../config/prisma.js'

export function findTechStack() {
  return prisma.techStackItem.findMany({
    where: { isVisible: true },
    orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { name: 'asc' }],
  })
}
