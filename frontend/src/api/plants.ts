import { api } from "../lib/api";
import { Plant, Label, PlantResponse } from "../types/plant";

const defaultImage = "/images/base-plant.jpg";

export async function getAllPlants(): Promise<Plant[]> {
  try {
    const res = await api.get<PlantResponse[]>("/plantas");

    const { data } = res;

    const plants: Plant[] = data.map((plant) => {
      const labels = plant.etiquetas.split(",");
      const label: Label = [
        (labels[0] as "indoor" | "outdoor") || "indoor",
        labels[1] || "",
      ];

      return {
        id: parseInt(plant.id),
        name: plant.nome,
        subtitle: plant.subtitulo,
        description: plant.descricao,
        price: plant.preco,
        isSale: Boolean(plant.esta_em_promocao),
        discount: plant.porcentagem_desconto || 0,
        imageUrl: plant.url_imagem || defaultImage,
        features: plant.caracteristicas,
        label: label,
      };
    });

    return plants;
  } catch (error) {
    console.error(error);
    return [];
  }
}
