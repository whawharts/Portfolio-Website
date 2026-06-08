import { Router } from 'express'
import { getTechStackHandler } from '../controllers/techStack.controller.js'

const router = Router()

router.get('/', getTechStackHandler)

export default router
