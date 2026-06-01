import { useEffect, useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import { fetchPokemon } from "./services/pokemonApi";
import "./App.css";

function shuffleCards(cards) {
  return [...cards].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0;
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Click each Pokemon only once!");

  useEffect(() => {
    async function loadPokemon() {
      const data = await fetchPokemon();
      setPokemon(shuffleCards(data));
      setLoading(false);
    }

    loadPokemon();
  }, []);

  function handleCardClick(id) {
    if (clickedPokemon.includes(id)) {
      setMessage("Oops! You clicked the same Pokemon twice. Try again!");
      setScore(0);
      setClickedPokemon([]);
    } else {
      const newScore = score + 1;

      setMessage("Good choice! Keep going.");
      setScore(newScore);
      setClickedPokemon([...clickedPokemon, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore === pokemon.length) {
        setMessage("You won! You clicked all Pokemon without repeating.");
        setScore(0);
        setClickedPokemon([]);
      }
    }

    setPokemon(shuffleCards(pokemon));
  }

  if (loading) {
    return <p className="loading">Loading Pokemon...</p>;
  }

  return (
    <main>
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <p className="game-message">{message}</p>
      <CardGrid pokemon={pokemon} onCardClick={handleCardClick} />
    </main>
  );
}
