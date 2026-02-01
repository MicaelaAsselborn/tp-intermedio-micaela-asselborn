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

// Encontrar mascota por ID
export const findPetById = async (id: string): Promise<PetData | null> => {
	const pet = await Pet.findById(id).lean();
	if (!pet) return null;

	return {
		id: pet._id.toString(),
		name: pet.name,
		species: pet.species as PetSpecies,
		ownerId: pet.ownerId,
		vetId: pet.vetId,
	};
};

// Crear mascota
export const createPet = async (pet: Omit<PetData, "id">): Promise<PetData> => {
	const newPet = new Pet({
		name: pet.name,
		species: pet.species as PetSpecies,
		ownerId: pet.ownerId,
		vetId: pet.vetId,
	});
	return await newPet.save();
};
