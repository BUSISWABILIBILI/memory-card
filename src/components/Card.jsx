export default function Card({ pokemon, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(pokemon.id)}
      type="button"
    >
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
