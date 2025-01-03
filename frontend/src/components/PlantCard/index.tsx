import { Plant } from "../../types/plant";
import { formatCurrency } from "../../utils/formatCurrency";
import "./styles.css";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  const discountValue = (plant.price * plant.discount) / 100;
  const discountedPrice = plant.price - discountValue;

  return (
    <div key={plant.id} className="plant-card">
      <img
        src={plant.imageUrl}
        alt={`${plant.name} image`}
        className="plant-image"
      />
      <div className="plant-content">
        <div className="plant-header">
          <p className="plant-name lato">{plant.name}</p>
          <div className="plant-values">
            <span className="discounted-price raleway">
              {formatCurrency(discountedPrice)}
            </span>
            {discountedPrice !== plant.price && (
              <span className="real-price raleway">
                {formatCurrency(plant.price)}
              </span>
            )}
          </div>
        </div>

        <ul className="plant-labels">
          {plant.label.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
