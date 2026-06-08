import { createError } from '../utils/apiResponse.js'

export function notFound(req, _res, next) {
  next(
    createError(`Route not found: ${req.method} ${req.originalUrl}`, {
      statusCode: 404,
      code: 'NOT_FOUND',
    }),
  )
}
