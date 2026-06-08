import { prisma } from '../config/prisma.js'

export function saveContactMessage(message) {
  return prisma.contactMessage.create({
    data: {
      ...message,
      status: 'new',
    },
  })
}
