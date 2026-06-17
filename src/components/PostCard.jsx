import './PostCard.css';

function PostCard({ post }) {
  const { author, verified, time, popularity, body, image, location, reactions, comments, shares } = post;

  return (
    <article className="post-card card">
      <header className="post-card__header">
        <div className="avatar-ring">
          <img src={author.avatar} alt="" width="44" height="44" />
        </div>
        <div className="post-card__author">
          <span className="post-card__author-name">
            {author.name}
            {verified && <span className="post-card__verified" aria-label="Verified">✓</span>}
          </span>
          <span className="post-card__time">{time}</span>
        </div>
        <span className="post-card__popularity">🔥 {popularity}</span>
        <button type="button" className="post-card__more" aria-label="More options">
          ⋯
        </button>
      </header>

      <p className="post-card__body">{body}</p>

      {image && (
        <div className="post-card__image-wrap">
          <img src={image} alt="" className="post-card__image" loading="lazy" />
        </div>
      )}

      <div className="post-card__meta">
        <span className="post-card__location">📍 {location}</span>
        <span className="post-card__zoles">💎 {reactions.zoles}</span>
      </div>

      <div className="post-card__stats">
        <span>❤️ {reactions.likes}</span>
        <span>{comments} Comments</span>
        <span>{shares} Shares</span>
      </div>

      <footer className="post-card__actions">
        <button type="button" className="post-card__action-btn">
          <span aria-hidden="true">♡</span> Like
        </button>
        <button type="button" className="post-card__action-btn">
          <span aria-hidden="true">💬</span> Comment
        </button>
        <button type="button" className="post-card__action-btn">
          <span aria-hidden="true">↗</span> Share
        </button>
      </footer>
    </article>
  );
}

export default PostCard;
