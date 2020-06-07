import { Router } from "express";

/**
 * Dependencies {controllers}
 */
import projectController from '../controllers';

import authenticateJWT from '../../../middlewares/jwt-validator';

const { postProject } = projectController

const router = Router();

router.post("/", authenticateJWT, postProject);
// router.post("/auth", loginCompany);
// router.get("/", authenticateJWT, findAllCompanies);
// router.get("/:id", authenticateJWT, findCompanyById);


export default router;