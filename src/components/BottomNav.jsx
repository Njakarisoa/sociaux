import './BottomNav.css';

const NAV_ITEMS = [
  { id: 'feed', label: 'Home', icon: '⌂' },
  { id: 'zolemeet', label: 'Zolemeet', icon: '✦' },
  { id: 'shorts', label: 'Shorts', icon: '▶' },
  { id: 'messages', label: 'Messages', icon: '✉' },
  { id: 'profile', label: 'Profile', icon: '◉' },
];

function BottomNav({ activeView, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`bottom-nav__item ${activeView === item.id ? 'bottom-nav__item--active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-current={activeView === item.id ? 'page' : undefined}
              aria-label={item.label}
            >
              <span className="bottom-nav__icon">{item.icon}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNav;
