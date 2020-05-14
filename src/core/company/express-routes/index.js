import { Router } from "express";

/**
 * Dependencies {controllers}
 */
import companyController from '../controllers';

import authenticateJWT from '../../../middlewares/jwt-validator';

const { postCompany, findAllCompanies, findCompanyById, loginCompany } = companyController

const router = Router();

router.post("/", postCompany);
router.post("/auth", loginCompany);
router.get("/", authenticateJWT, findAllCompanies);
router.get("/:id", authenticateJWT, findCompanyById);


export default router;