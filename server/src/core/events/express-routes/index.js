import { Router } from 'express'

/**
 * Dependencies {controllers}
 */
import eventController from '../controllers'

const { postEvent } = eventController

import authenticateJWT from '../../../middlewares/jwt-validator'

const router = Router()

router.post('/', authenticateJWT, postEvent)

export default router
