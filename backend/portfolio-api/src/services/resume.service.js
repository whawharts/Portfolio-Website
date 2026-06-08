import { findActiveResume } from '../repositories/resume.repository.js'
import { createError } from '../utils/apiResponse.js'

export async function getResume() {
  const resume = await findActiveResume()

  if (!resume) {
    throw createError('Active resume not found.', {
      statusCode: 404,
      code: 'RESUME_NOT_FOUND',
    })
  }

  const { label, fileName, downloadUrl } = resume
  return { label, fileName, downloadUrl }
}
