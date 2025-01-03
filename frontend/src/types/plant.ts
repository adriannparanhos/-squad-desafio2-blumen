type Label = ["indoor" | "outdoor", string];

export type Plant = {
  id: number;
  name: string;
  subtitle: string;
  label: Label;
  price: number;
  discount: number;
  features: string;
  description: string;
  imageUrl: string;
};
