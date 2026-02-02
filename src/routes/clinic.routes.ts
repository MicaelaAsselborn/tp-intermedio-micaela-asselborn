import { Router } from "express";
import * as clinicController from "../controllers/clinic.controller";

const router = Router();

router.get("/", clinicController.findAllConsults);
router.get("/:id", clinicController.findConsultById);
router.post("/", clinicController.createConsult);
router.delete("/:id", clinicController.deleteConsult);

export default router;
