export default function ComparePanel({ items }) {
  return (
    <div className="compare-grid">
      {items.map((c, i) => (
        <div key={i} className="compare-card">
          <h4>🌾 {c.crop}</h4>
          <p>💰 Best Price: ₹{c.data.best_mandis[0].price}/kg</p>
          <p>📍 {c.data.best_mandis[0].state}</p>
          <b>{c.data.decision}</b>
        </div>
      ))}
    </div>
  );
}
