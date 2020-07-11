import { Router } from 'express'

/**
 * Dependencies {controllers}
 */
import authController from '../controllers'

const { createAuthUser, loginUser } = authController

const router = Router()

router.post('/', createAuthUser)
router.post('/login', loginUser)

export default router
