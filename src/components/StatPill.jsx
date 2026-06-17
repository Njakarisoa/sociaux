import './StatPill.css';

function StatPill({ icon, value, label, tone = 'primary' }) {
  return (
    <div className={`stat-pill stat-pill--${tone}`}>
      <span className="stat-pill__icon">{icon}</span>
      <div className="stat-pill__text">
        <span className="stat-pill__value">{value}</span>
        <span className="stat-pill__label">{label}</span>
      </div>
    </div>
  );
}

export default StatPill;
