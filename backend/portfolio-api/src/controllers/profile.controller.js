import { getProfile } from '../services/profile.service.js'
import { sendSuccess } from '../utils/apiResponse.js'

export async function getProfileHandler(_req, res, next) {
  try {
    return sendSuccess(res, {
      message: 'Profile retrieved.',
      data: await getProfile(),
    })
  } catch (error) {
    next(error)
  }
}
