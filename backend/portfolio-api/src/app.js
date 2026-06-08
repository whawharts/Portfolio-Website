import express from 'express'
import { corsMiddleware } from './config/cors.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFound } from './middleware/notFound.js'
import certificatesRoutes from './routes/certificates.routes.js'
import contactRoutes from './routes/contact.routes.js'
import healthRoutes from './routes/health.routes.js'
import profileRoutes from './routes/profile.routes.js'
import projectsRoutes from './routes/projects.routes.js'
import resumeRoutes from './routes/resume.routes.js'
import techStackRoutes from './routes/techStack.routes.js'

const app = express()

app.use(corsMiddleware)
app.use(express.json({ limit: '32kb' }))

app.use('/api/health', healthRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/tech-stack', techStackRoutes)
app.use('/api/certificates', certificatesRoutes)
app.use('/api/resume', resumeRoutes)
app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
