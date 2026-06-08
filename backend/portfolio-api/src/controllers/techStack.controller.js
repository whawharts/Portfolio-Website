import { getTechStack } from '../services/techStack.service.js'
import { sendSuccess } from '../utils/apiResponse.js'

export async function getTechStackHandler(_req, res, next) {
  try {
    return sendSuccess(res, {
      message: 'Tech stack retrieved.',
      data: await getTechStack(),
    })
  } catch (error) {
    next(error)
  }
}
