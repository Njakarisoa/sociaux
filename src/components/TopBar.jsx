import './TopBar.css';

function TopBar({ activeView, onLogout }) {
  return (
    <header className="topbar">
      <div className="topbar__mobile-brand">
        <span className="topbar__brand-mark">Z</span>
        <span className="topbar__brand-text">Zolemate</span>
      </div>

      <div className="topbar__title">
        <h1>{activeView === 'profile' ? 'My Profile' : 'Home'}</h1>
      </div>

      <div className="topbar__search">
        <span className="topbar__search-icon" aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Search Zolemate..."
          aria-label="Search"
        />
      </div>

      <div className="topbar__actions">
        {activeView === 'profile' ? (
          <button type="button" className="btn btn-primary topbar__create-btn">
            + Create Post
          </button>
        ) : (
          <button type="button" className="icon-btn" aria-label="New post">
            +
          </button>
        )}
        <button type="button" className="icon-btn" aria-label="Notifications">
          ♥
        </button>
        <button
          type="button"
          className="icon-btn topbar__logout-mobile"
          onClick={onLogout}
          aria-label="Log out"
        >
          ⎋
        </button>
      </div>
    </header>
  );
}

export default TopBar;
