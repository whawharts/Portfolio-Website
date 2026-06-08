import { Router } from 'express'
import {
  getFeaturedProjectsHandler,
  getProjectBySlugHandler,
  getProjectsHandler,
} from '../controllers/projects.controller.js'

const router = Router()

router.get('/', getProjectsHandler)
router.get('/featured', getFeaturedProjectsHandler)
router.get('/:slug', getProjectBySlugHandler)

export default router
