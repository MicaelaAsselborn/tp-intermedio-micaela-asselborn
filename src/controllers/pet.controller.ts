import { Request, Response } from "express";
import * as petService from "../services/pet.service";

export const findAllPets = async (_req: Request, res: Response) => {
	try {
		const pets = await petService.findAllPets();
		if (!pets) {
			return res
				.status(404)
				.json({ error: "No se encontraron mascotas" });
		}

		return res.status(202).json(pets);
	} catch (error) {
		return res.status(500).json({ error: "Error al obtener las mascotas" });
	}
};
