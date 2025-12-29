import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherCard({ city }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    setData(null);
    setError("");

    axios
      .get(`http://localhost:8000/weather/${city}`)
      .then((res) => {
        if (res.data.error) {
          setError("Weather data not available");
        } else {
          setData(res.data);
        }
      })
      .catch(() => {
        setError("Unable to fetch weather data from the backend.");
      });
  }, [city]);

  /* ⛔ kuchh bhi render mat karo jab city hi nahi hai */
  if (!city) return null;

  return (
    <div className="card weather-card">
      <h3> Weather Report – {city}</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <>
          <p> Temperature: <b>{data.temperature}°C</b></p>
          <p> Humidity: <b>{data.humidity}%</b></p>
          <p> Rain (1h): <b>{data.rain_mm} mm</b></p>
          <p> Wind: <b>{data.wind_speed} m/s</b></p>

          <hr />
          <p><b>{data.risk}</b></p>
        </>
      )}
    </div>
  );
}

