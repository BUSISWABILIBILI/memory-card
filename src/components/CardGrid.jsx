import Card from "./Card";

export default function CardGrid({ pokemon, onCardClick }) {
  return (
    <section className="cards-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Your deck</p>
          <h2>Choose your next Pokemon</h2>
        </div>
        <span className="deck-count">{pokemon.length} cards</span>
      </div>
      <div className="card-grid">
        {pokemon.map((poke) => (
          <Card key={poke.id} pokemon={poke} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
