import { formatError } from '../utils/apiResponse.js'

export function errorHandler(error, _req, res, _next) {
  const statusCode = error.statusCode || error.status || 500

  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON request body.',
      errors: [{ field: 'body', message: 'Request body must be valid JSON.' }],
    })
  }

  const response =
    statusCode >= 500
      ? {
          success: false,
          message: 'Something went wrong.',
          errors: [],
        }
      : formatError(error)

  return res.status(statusCode).json(response)
}
