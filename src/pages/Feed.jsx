import PostCard from '../components/PostCard.jsx';
import './Feed.css';

const TABS = [
  { id: 'posts', label: 'Posts', icon: '▤' },
  { id: 'zolemeet', label: 'Zolemeet', icon: '✦' },
  { id: 'requests', label: 'Requests', icon: '👤' },
];

const POSTS = [
  {
    id: 1,
    author: { name: 'Somiya Singh', avatar: 'https://i.pravatar.cc/100?img=47' },
    verified: true,
    time: '2 hours ago',
    popularity: '59k',
    body: 'Hi guys, I recently reviewed a new perfume deal from Beauty By Amna — the scent lasts all day!',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80',
    location: 'Koraput, Odisha, India',
    reactions: { likes: '10.4k', zoles: '30.8k' },
    comments: 234,
    shares: 14,
  },
  {
    id: 2,
    author: { name: 'Aarav Mehta', avatar: 'https://i.pravatar.cc/100?img=12' },
    verified: false,
    time: '5 hours ago',
    popularity: '21k',
    body: 'Caught the sunset at the lake today. Some days the sky just shows off.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80',
    location: 'Udaipur, Rajasthan, India',
    reactions: { likes: '6.2k', zoles: '12.1k' },
    comments: 98,
    shares: 6,
  },
];

function Feed() {
  return (
    <div className="feed">
      <div className="feed__composer card">
        <div className="avatar-ring">
          <img src="https://i.pravatar.cc/100?img=33" alt="" width="40" height="40" />
        </div>
        <input type="text" placeholder="Post something..." aria-label="Create a post" />
        <button type="button" className="icon-btn feed__composer-media" aria-label="Add photo">
          📷
        </button>
      </div>

      <div className="feed__tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            className={`feed__tab ${i === 0 ? 'feed__tab--active' : ''}`}
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="feed__posts">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
