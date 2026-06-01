import Card from "./Card";

export default function CardGrid({ pokemon, onCardClick }) {
  return (
    <div className="card-grid">
      {pokemon.map((poke) => (
        <Card key={poke.id} pokemon={poke} onClick={onCardClick} />
      ))}
    </div>
  );
}
