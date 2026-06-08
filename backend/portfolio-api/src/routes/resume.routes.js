import { Router } from 'express'
import { getResumeHandler } from '../controllers/resume.controller.js'

const router = Router()

router.get('/', getResumeHandler)

export default router
