import { Router } from 'express'

/**
 * Dependencies {controllers}
 */
import companyController from '../controllers'

import authenticateJWT from '../../../middlewares/jwt-validator'

const router = Router()

// router.get('/', findAllCompanies)
router.get('/:id', authenticateJWT, companyController.findCompanyById)

export default router
