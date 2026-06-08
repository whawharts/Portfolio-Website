const projectCategories = new Set(['website', 'app', 'frontend', 'fullstack', 'practice', 'client'])
const certificateCategories = new Set([
  'frontend',
  'backend',
  'database',
  'tools',
  'design',
  'web-development',
])
const featuredValues = new Set(['true', 'false'])

export function validateProjectQuery(query = {}) {
  const errors = []

  if (query.category && !projectCategories.has(query.category)) {
    errors.push({
      field: 'category',
      message: 'Category must be one of: website, app, frontend, fullstack, practice, client.',
    })
  }

  if (query.featured && !featuredValues.has(query.featured)) {
    errors.push({ field: 'featured', message: 'Featured must be true or false.' })
  }

  if (query.limit) {
    const limit = Number(query.limit)

    if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
      errors.push({ field: 'limit', message: 'Limit must be a whole number between 1 and 50.' })
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateCertificateQuery(query = {}) {
  const errors = []

  if (query.category && !certificateCategories.has(query.category)) {
    errors.push({
      field: 'category',
      message:
        'Category must be one of: frontend, backend, database, tools, design, web-development.',
    })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
