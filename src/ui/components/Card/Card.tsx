import "./Card.scss";

export interface Card {
  title: string;
  releaseYear: number;
  description: string;
  image: string;
  handleSelectCard: (title: string) => void;
  isSelected: boolean;
}

export function Card({title, releaseYear, description, image, handleSelectCard, isSelected}: Card): JSX.Element {
  return (
    <div onClick={() => handleSelectCard(title)} className="card-container" data-testid="card">
      <img className="card-image" src={image}></img>
      <div className={`card-info-container ${isSelected ? "active" : ""}`}>
        <p className="card-title">{title}</p>
        <p className="card-release-year">{releaseYear}</p>
        <div className="card-description-container"><p className="card-description">{description}</p></div>
      </div>
    </div>
  );
}
