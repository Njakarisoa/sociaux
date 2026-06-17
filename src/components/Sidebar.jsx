import './Sidebar.css';

const NAV_ITEMS = [
  { id: 'feed', label: 'Home', icon: '⌂' },
  { id: 'zolemeet', label: 'Zolemeet', icon: '✦' },
  { id: 'shorts', label: 'Shorts', icon: '▶' },
  { id: 'messages', label: 'Messages', icon: '✉' },
  { id: 'profile', label: 'Profile', icon: '◉' },
];

function Sidebar({ activeView, onNavigate, expanded, onToggleExpand, onLogout }) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <button
        type="button"
        className="sidebar__toggle"
        onClick={onToggleExpand}
        aria-label={expanded ? 'Collapse navigation' : 'Expand navigation'}
      >
        <span className="sidebar__toggle-bar" />
        <span className="sidebar__toggle-bar" />
        <span className="sidebar__toggle-bar" />
      </button>

      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">Z</span>
        {expanded && <span className="sidebar__brand-text">Zolemate</span>}
      </div>

      <nav className="sidebar__nav">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`sidebar__nav-item ${activeView === item.id ? 'sidebar__nav-item--active' : ''}`}
                onClick={() => onNavigate(item.id === 'profile' ? 'profile' : item.id === 'feed' ? 'feed' : item.id)}
                aria-current={activeView === item.id ? 'page' : undefined}
              >
                <span className="sidebar__nav-icon">{item.icon}</span>
                {expanded && <span className="sidebar__nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button type="button" className="sidebar__logout" onClick={onLogout}>
        <span className="sidebar__nav-icon">⎋</span>
        {expanded && <span className="sidebar__nav-label">Log out</span>}
      </button>
    </aside>
  );
}

export default Sidebar;
