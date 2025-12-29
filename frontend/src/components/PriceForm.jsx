import { useState } from "react";
import axios from "axios";
import { CROPS } from "../data/crops";
import "../App.css";

export default function PriceForm({ setData }) {
  const [crop, setCrop] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!crop) {
      alert("🌱 Please choose crop");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://kisanniti.onrender.com/predict",
        { crop }
      );

      setData(res.data);
    } catch (err) {
      alert(" Backend error — FastAPI running");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-box center-form">
      <select
        className="center-input"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      >
        <option value="">🌱 Choose crop</option>
        {CROPS.map((c) => (
          <option key={c.id} value={c.api}>
            {c.name}
          </option>
        ))}
      </select>

      <button
        className="button-primary center-btn"
        onClick={submit}
        disabled={loading}
      >
        {loading ? " Loading data..." : "Check Price"}
      </button>
    </div>
  );
}
