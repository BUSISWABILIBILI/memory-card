export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-card">
        <span className="score-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 3v18m6-14.5-6-3.5-6 3.5v4l6 3.5 6-3.5v-4Zm-12 7 6 3.5 6-3.5v4L12 21l-6-3.5v-4Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        <div>
          <span className="score-label">Score</span>
          <span className="score-value">{score}</span>
        </div>
      </div>
      <div className="score-card score-card-best">
        <span className="score-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        <div>
          <span className="score-label">Best score</span>
          <span className="score-value">{bestScore}</span>
        </div>
      </div>
    </div>
  );
}
