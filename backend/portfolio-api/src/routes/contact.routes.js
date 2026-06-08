import { Router } from 'express'
import { createContactMessageHandler } from '../controllers/contact.controller.js'

const router = Router()

router.post('/', createContactMessageHandler)

export default router
