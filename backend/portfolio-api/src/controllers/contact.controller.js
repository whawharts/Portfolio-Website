import { createContactMessage } from '../services/contact.service.js'
import { createError, sendSuccess } from '../utils/apiResponse.js'

export async function createContactMessageHandler(req, res, next) {
  let result

  try {
    result = await createContactMessage(req.body)
  } catch (error) {
    next(error)
    return
  }

  if (!result.isValid) {
    next(
      createError('Please fix the highlighted contact form fields.', {
        statusCode: 400,
        code: 'VALIDATION_ERROR',
        errors: result.errors,
      }),
    )
    return
  }

  return sendSuccess(res, {
    message: 'Message received.',
    data: result.data,
    statusCode: 201,
  })
}
