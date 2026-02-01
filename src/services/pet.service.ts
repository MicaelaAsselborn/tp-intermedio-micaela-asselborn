import { Pet, PetData } from "../models/pets.model";
import { PetSpecies } from "../types/pet";

// Encontrar todas las mascotas
export const findAllPets = async (): Promise<PetData[] | null> => {
	const pets = await Pet.find().lean();
	if (!pets) return null;

	return pets.map((pet) => ({
		id: pet._id.toString(),
		name: pet.name,
		species: pet.species as PetSpecies,
		ownerId: pet.ownerId,
		vetId: pet.vetId,
	}));
};
