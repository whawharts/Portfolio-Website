import { findTechStack } from '../repositories/techStack.repository.js'

export async function getTechStack() {
  const items = await findTechStack()
  const groups = new Map()

  items.forEach((item) => {
    if (!groups.has(item.category)) {
      groups.set(item.category, [])
    }

    groups.get(item.category).push({
      name: item.name,
      level: item.level,
      summary: item.summary,
      priority: item.sortOrder,
    })
  })

  return Array.from(groups.entries()).map(([category, groupItems]) => ({
    category,
    items: groupItems,
  }))
}
