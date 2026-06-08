export function sendSuccess(res, { message = 'Request successful.', data = {}, statusCode = 200 } = {}) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  })
}

export function createError(message, { statusCode = 500, code = 'SERVER_ERROR', errors = [] } = {}) {
  const error = new Error(message)
  error.statusCode = statusCode
  error.code = code
  error.errors = errors
  return error
}

export function formatError(error) {
  return {
    success: false,
    message: error.message || 'Something went wrong.',
    errors: error.errors || [],
  }
}
