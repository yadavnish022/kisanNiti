import { useState } from "react";
import PriceForm from "../components/PriceForm";
import WeatherCard from "../components/WeatherCard";
import PriceChart from "../components/PriceChart";
import "../App.css";

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <div className="app-container">

      {}
      <div className="glass-card">
        <div className="hero">
          <h1 className="title"> KisanNiti</h1>
          <p className="subtitle">
            Know the right time to sell your crops
          </p>
        </div>

        <PriceForm setData={setData} />
      </div>

      {}
      {data && (
        <div className="results-wrapper">

          {/* Weather */}
          {data.best_mandis?.length > 0 && (
            <div className="result-card">
              <WeatherCard
                city={data.best_mandis[0].mandi.split(" ")[0]}
              />
            </div>
          )}

          {/*Best Market */}
          <div className="result-card">
            <h3> Best Market (India)</h3>
            <p className="note">
              *Prices converted from ₹/quintal to ₹/kg
            </p>

            <div className="mandi-grid">
              {data.best_mandis.map((m, i) => (
                <div key={i} className="mandi-card">
                  <h4>{m.mandi}</h4>
                  <p className="state">{m.state}</p>
                  <p className="price">
                    ₹{(m.price / 100).toFixed(2)}/kg
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
