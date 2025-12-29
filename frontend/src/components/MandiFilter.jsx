export default function MandiFilter({ mandis, onSelect }) {
  if (!mandis || mandis.length === 0) return null;

  return (
    <div className="result-card">
      <h3>🏪 Choose State & Market</h3>

      {mandis.map((m, i) => (
        <div
          key={i}
          onClick={() => onSelect(m)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "8px",
            cursor: "pointer",
            background: "rgba(240,255,240,0.9)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <strong>{m.mandi}</strong><br />
          {m.state} — ₹{m.price}/kg
        </div>
      ))}
    </div>
  );
}
