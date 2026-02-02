import { Request, Response } from "express";
import * as clinicService from "../services/clinic.service";

// findAllConsults
export const findAllConsults = async (_req: Request, res: Response) => {
	try {
		const consults = await clinicService.findAllConsults();

		if (!consults) {
			res.status(404).json({ error: "No se encontraron consultas" });
		}

		res.status(200).json(consults);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener consultas" });
	}
};

// findConsultsById
export const findConsultById = async (req: Request, res: Response) => {
	const id = req.params.id as string;

	try {
		const consult = await clinicService.findConsultById(id);

		if (!consult) {
			res.status(404).json({
				error: "No se encontró la consulta con ese ID",
			});
		}

		res.status(200).json(consult);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener consulta" });
	}
};

// createConsult
export const createConsult = async (req: Request, res: Response) => {
	try {
		const { petId, vetId, consult, treatment } = req.body;

		const clinicConsult = clinicService.createConsult({
			petId,
			vetId,
			consult,
			treatment,
		});

		return res
			.status(201)
			.json({ clinicConsult, message: "Consulta cerada exitosamente" });
	} catch (error) {
		res.status(500).json({ error: "Error al crear consulta" });
	}
};

// deleteConsult
export const deleteConsult = async (req: Request, res: Response) => {
	try {
		const id = req.params.id as string;
		const deletedConsult = await clinicService.deleteConsult(id);
		if (!deletedConsult) {
			return res.status(404).json({ error: "Consulta no encontrada" });
		}

		return res
			.status(200)
			.json({ message: "Consulta eliminada exitosamente" });
	} catch (error) {
		return res.status(500).json({ error: "Error al eliminar la consulta" });
	}
};
