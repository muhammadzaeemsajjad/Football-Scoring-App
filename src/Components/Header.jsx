import "./Header.css";

function Header() {
  return (
    <header className="aurora-header">
      {/* Brand / Logo Area */}
      <div className="header-brand">
        <span className="glow-dot"></span>
        <h1 className="brand-logo">
          SCORE <span className="logo-accent">TRACKER</span>
        </h1>
      </div>

      {/* Navigation or Info */}
      <div className="header-status">
        <span className="status-badge">
          <span className="pulse-indicator"></span>
          Match Fixture
        </span>
      </div>
    </header>
  );
}

export default Header;