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

  function resetGame() {
    setScore(0);
    setClickedPokemon([]);
    setMessage("Game reset. Click each Pokemon only once!");
    setPokemon(shuffleCards(pokemon));
  }

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
        localStorage.setItem("bestScore", newScore);
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
    return (
      <div className="loading-screen">
        <div className="loading-card">
          <div className="loading-spinner" />
          <p>Loading your deck...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="app-shell">
      <div className="background-orb background-orb-left" />
      <div className="background-orb background-orb-right" />
      <div className="game-board">
        <Header />
        <section className="dashboard" aria-label="Game status">
          <Scoreboard score={score} bestScore={bestScore} />
          <div className="status-panel">
            <span className="status-light" />
            <div>
              <span className="status-label">Current mission</span>
              <p className="game-message">{message}</p>
            </div>
          </div>
          <button
            aria-label="Reset game"
            className="reset-btn"
            onClick={resetGame}
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M20 11a8.1 8.1 0 0 0-15.5-3M4 4v4h4m-4 5a8.1 8.1 0 0 0 15.5 3m.5 4v-4h-4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Reset game</span>
          </button>
        </section>
        <CardGrid pokemon={pokemon} onCardClick={handleCardClick} />
      </div>
    </main>
  );
}
