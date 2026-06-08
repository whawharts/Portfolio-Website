import cors from 'cors'
import { env } from './env.js'

const allowedOrigins = env.frontendUrls

export const corsMiddleware = cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }

    const corsError = new Error('Origin is not allowed by CORS.')
    corsError.statusCode = 403
    callback(corsError)
  },
})
