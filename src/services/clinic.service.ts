import { ClinicData, Consult } from "../models/clinic.model";

// Encontrar todas las consultas
export const findAllConsults = async (): Promise<ClinicData[] | null> => {
	const consults = await Consult.find().lean();

	if (!consults) return null;

	return consults.map((consult) => ({
		id: consult._id.toString(),
		petId: consult.petId,
		vetId: consult.vetId,
		consult: consult.consult,
		treatment: consult.treatment,
	}));
};

// Encontrar consulta por ID
export const findConsultById = async (
	id: string,
): Promise<ClinicData | null> => {
	const consult = await Consult.findById(id).lean();
	if (!consult) return null;

	return {
		id: consult._id.toString(),
		petId: consult.petId,
		vetId: consult.vetId,
		consult: consult.consult,
		treatment: consult.treatment,
	};
};

// Crear consulta
export const createConsult = async (
	consult: Omit<ClinicData, "id">,
): Promise<ClinicData> => {
	const newConsult = new Consult({
		petId: consult.petId,
		vetId: consult.vetId,
		consult: consult.consult,
		treatment: consult.treatment,
	});
	return await newConsult.save();
};

// Eliminar consulta
export const deleteConsult = async (id: string): Promise<boolean> => {
	const result = await Consult.findByIdAndDelete(id);
	// !!result devuelve TRUE si lo encuentra y borra
	// !!result devuelve FALSE si no lo encuentra
	return !!result;
};
