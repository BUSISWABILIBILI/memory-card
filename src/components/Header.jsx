export default function Header() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Trainer memory challenge
        </p>
        <h1>
          Memory <span>Match</span>
        </h1>
        <p className="hero-description">
          Build your streak by choosing a new Pokemon every round. One repeat
          sends your score back to zero.
        </p>
        <div className="rules">
          <span className="rule-pill">
            <strong>01</strong> Pick a card
          </span>
          <span className="rule-pill">
            <strong>02</strong> Remember your picks
          </span>
          <span className="rule-pill">
            <strong>03</strong> Beat your best
          </span>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <svg fill="none" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="62" fill="rgba(255,255,255,.14)" />
          <circle cx="80" cy="80" r="56" stroke="white" strokeWidth="7" />
          <path d="M24 80h112" stroke="white" strokeWidth="7" />
          <circle cx="80" cy="80" r="21" fill="#ffcf4a" stroke="white" strokeWidth="7" />
          <circle cx="80" cy="80" r="9" fill="#1756b8" />
        </svg>
      </div>
    </header>
  );
}
