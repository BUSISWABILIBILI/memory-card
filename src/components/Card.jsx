export default function Card({ pokemon, onClick }) {
  const pokemonNumber = String(pokemon.id).padStart(3, "0");

  return (
    <button
      className="card"
      onClick={() => onClick(pokemon.id)}
      type="button"
    >
      <span className="card-number">#{pokemonNumber}</span>
      <span className="card-image-wrap">
        <img src={pokemon.image} alt="" />
      </span>
      <span className="card-meta">
        <h3>{pokemon.name}</h3>
        <span className="card-arrow" aria-hidden="true">
          +
        </span>
      </span>
    </button>
  );
}
