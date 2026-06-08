import { getCertificates } from '../services/certificates.service.js'
import { validateCertificateQuery } from '../validators/query.validator.js'
import { createError, sendSuccess } from '../utils/apiResponse.js'

export async function getCertificatesHandler(req, res, next) {
  const validation = validateCertificateQuery(req.query)

  if (!validation.isValid) {
    next(
      createError('Invalid certificate query parameters.', {
        statusCode: 400,
        code: 'VALIDATION_ERROR',
        errors: validation.errors,
      }),
    )
    return
  }

  try {
    return sendSuccess(res, {
      message: 'Certificates retrieved.',
      data: await getCertificates(req.query),
    })
  } catch (error) {
    next(error)
  }
}
