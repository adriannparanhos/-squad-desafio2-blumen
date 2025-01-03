import { api } from "../lib/api";
import { Plant } from "../types/plant";

export async function getAllPlants(): Promise<Plant[]> {
  try {
    const res = await api.get<Plant[]>("/plants");

    const { data } = res;

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
