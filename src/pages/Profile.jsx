import StatPill from '../components/StatPill.jsx';
import './Profile.css';

const SHORTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?w=400&q=80', views: '20.2k' },
  { id: 2, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', views: '13.2k' },
  { id: 3, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', views: '17.2k' },
  { id: 4, image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&q=80', views: '9.4k' },
  { id: 5, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', views: '11.7k' },
  { id: 6, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', views: '15.5k' },
];

const TABS = [
  { id: 'about', label: 'About', icon: 'ⓘ' },
  { id: 'posts', label: 'Posts', icon: '▤' },
  { id: 'shorts', label: 'Shorts', icon: '▶' },
];

function Profile() {
  return (
    <div className="profile">
      <section className="profile__header card">
        <div className="profile__identity">
          <div className="avatar-ring profile__avatar-ring">
            <img src="https://i.pravatar.cc/160?img=14" alt="" width="80" height="80" />
          </div>
          <div>
            <h2 className="profile__name">
              Benjamin Oliver <span className="profile__verified">✓</span>
            </h2>
            <p className="profile__email">benjamin.oliver@zolemate.com</p>
            <p className="profile__role">Software Engineer · UI/UX Designer</p>
            <div className="profile__badges">
              <span className="profile__badge profile__badge--vip">★ VIP Member</span>
              <span className="profile__badge profile__badge--days">3 days left</span>
            </div>
          </div>
        </div>

        <div className="profile__counts">
          <div>
            <span className="profile__count-value">16</span>
            <span className="profile__count-label">Matches</span>
          </div>
          <div>
            <span className="profile__count-value">1.2k</span>
            <span className="profile__count-label">Followers</span>
          </div>
          <div>
            <span className="profile__count-value">240</span>
            <span className="profile__count-label">Following</span>
          </div>
        </div>
      </section>

      <section className="profile__stats-grid">
        <StatPill icon="💎" value="348" label="Total Zoles" tone="primary" />
        <StatPill icon="🔥" value="86k" label="My Popularity" tone="accent" />
        <StatPill icon="💬" value="29" label="Free Messages" tone="success" />
      </section>

      <nav className="profile__tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            className={`profile__tab ${i === 1 ? 'profile__tab--active' : ''}`}
          >
            <span aria-hidden="true">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </nav>

      <section className="profile__shorts-grid">
        {SHORTS.map((short) => (
          <div key={short.id} className="profile__short">
            <img src={short.image} alt="" loading="lazy" />
            <span className="profile__short-views">▶ {short.views}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Profile;
