const allowedProjectTypes = new Set(['portfolio', 'landing', 'webapp', 'redesign', 'collab', 'other'])
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function normalizeString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateContactPayload(payload = {}) {
  const value = {
    name: normalizeString(payload.name),
    email: normalizeString(payload.email).toLowerCase(),
    projectType: normalizeString(payload.projectType),
    message: normalizeString(payload.message),
  }

  const errors = []

  if (value.name.length < 2 || value.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must be between 2 and 100 characters.' })
  }

  if (!emailPattern.test(value.email)) {
    errors.push({ field: 'email', message: 'Email must be a valid email address.' })
  }

  if (!allowedProjectTypes.has(value.projectType)) {
    errors.push({ field: 'projectType', message: 'Project type is required.' })
  }

  if (value.message.length < 10 || value.message.length > 2000) {
    errors.push({ field: 'message', message: 'Message must be between 10 and 2000 characters.' })
  }

  return {
    isValid: errors.length === 0,
    errors,
    value,
  }
}
