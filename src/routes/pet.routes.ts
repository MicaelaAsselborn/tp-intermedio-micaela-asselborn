import { Router } from "express";
import * as petController from "../controllers/pet.controller";

const router = Router();

router.get("/", petController.findAllPets);

export default router;
