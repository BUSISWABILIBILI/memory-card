const POKEMON_COUNT = 12;

export async function fetchPokemon() {
  const pokemonPromises = [];

  for (let i = 1; i <= POKEMON_COUNT; i++) {
    pokemonPromises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) =>
        response.json(),
      ),
    );
  }

  const pokemonData = await Promise.all(pokemonPromises);

  return pokemonData.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
  }));
}
