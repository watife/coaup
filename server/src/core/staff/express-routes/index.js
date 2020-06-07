import { Router } from "express";

/**
 * Dependencies {controllers}
 */
import staffController from '../controllers';

import authenticateJWT from '../../../middlewares/jwt-validator';

const { postStaff, findAStaff } = staffController

const router = Router();

router.post("/", postStaff);
router.get("/:id", authenticateJWT, findAStaff);
// router.post("/auth", loginCompany);
// router.get("/", authenticateJWT, findAllCompanies);
// router.get("/:id", authenticateJWT, findCompanyById);


export default router;