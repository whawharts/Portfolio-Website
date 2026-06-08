import { sendSuccess } from '../utils/apiResponse.js'

export function getHealth(_req, res) {
  return sendSuccess(res, {
    message: 'Portfolio API is healthy.',
    data: { status: 'ok' },
  })
}
