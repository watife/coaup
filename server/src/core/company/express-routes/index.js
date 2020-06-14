import { Router } from "express";

/**
 * Dependencies {controllers}
 */
import { postCompany, findAllCompanies, findCompanyById, loginCompany } from '../controllers';

import authenticateJWT from '../../../middlewares/jwt-validator';

const router = Router();

router.post("/", postCompany);
router.post("/auth", loginCompany);
router.get("/", findAllCompanies);
router.get("/:id", authenticateJWT, findCompanyById);


export default router;