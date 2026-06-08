const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

function buildUrl(path, query) {
  const url = new URL(`${API_BASE_URL}${path}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, value)
      }
    })
  }

  return url.toString()
}

async function request(path, { method = 'GET', body, query } = {}) {
  const response = await fetch(buildUrl(path, query), {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok || !payload?.success) {
    const error = new Error(
      payload?.message || payload?.error?.message || 'The API request failed.',
    )
    error.status = response.status
    error.errors = payload?.errors || []
    throw error
  }

  return payload.data
}

export const apiClient = {
  get(path, options) {
    return request(path, { ...options, method: 'GET' })
  },
  post(path, body, options) {
    return request(path, { ...options, method: 'POST', body })
  },
}
