import { getResume } from '../services/resume.service.js'
import { sendSuccess } from '../utils/apiResponse.js'

export async function getResumeHandler(_req, res, next) {
  try {
    return sendSuccess(res, {
      message: 'Resume metadata retrieved.',
      data: await getResume(),
    })
  } catch (error) {
    next(error)
  }
}
