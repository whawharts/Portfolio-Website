import { Router } from 'express'
import { getCertificatesHandler } from '../controllers/certificates.controller.js'

const router = Router()

router.get('/', getCertificatesHandler)

export default router
