export default function WeatherRisk({ weather }) {
  if (!weather) return null;

  let bg = "linear-gradient(135deg,#b7f8db,#50a7c2)"; // safe
  if (weather.risk.includes("⚠️")) {
    bg = "linear-gradient(135deg,#fff3b0,#ff9800)";
  }
  if (weather.risk.includes("🔥")) {
    bg = "linear-gradient(135deg,#ff9a9e,#ff512f)";
  }

  return (
    <div
      className="result-card"
      style={{
        background: bg,
        color: "#123",
        fontWeight: "600"
      }}
    >
      <h3> Weather Alert</h3>
      <p> Temp: {weather.temperature}°C</p>
      <p> Humidity: {weather.humidity}%</p>
      <p> Rain: {weather.rain_mm} mm</p>
      <p> Wind: {weather.wind_speed} m/s</p>
      <hr />
      <strong>{weather.risk}</strong>
    </div>
  );
}
