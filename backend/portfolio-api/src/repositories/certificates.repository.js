import { prisma } from '../config/prisma.js'

export function findCertificates({ category } = {}) {
  return prisma.certificate.findMany({
    where: {
      isVisible: true,
      ...(category ? { category } : {}),
    },
    orderBy: [{ issuedAt: 'desc' }, { sortOrder: 'asc' }],
  })
}
