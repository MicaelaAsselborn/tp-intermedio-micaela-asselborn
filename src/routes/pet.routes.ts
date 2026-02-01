import { Router } from "express";
import * as petController from "../controllers/pet.controller";

const router = Router();

router.get("/", petController.findAllPets);
router.get("/:id", petController.findPetById);
router.post("/", petController.createPet);
router.patch("/:id", petController.updatePet);

export default router;
