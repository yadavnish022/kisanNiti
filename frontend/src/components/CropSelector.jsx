import { useState, useRef, useEffect } from "react";
import { CROPS } from "../data/crops";

const CATEGORIES = {
  Cereals: ["Paddy", "Wheat", "Maize", "Bajra", "Jowar", "Barley"],
  Pulses: ["Gram", "Arhar", "Moong", "Urad", "Masur", "Peas"],
  Oilseeds: ["Mustard", "Groundnut", "Soyabean", "Sunflower", "Sesamum", "Castor"],
  Vegetables: ["Tomato", "Onion", "Potato", "Cauliflower", "Cabbage", "Brinjal", "Okra", "Garlic", "Ginger"],
  Commercial: ["Sugarcane", "Cotton", "Jute", "Tobacco"],
  Spices: ["Cumin", "Coriander", "Turmeric", "BlackPepper"],
};

export default function CropSelector({ value, onChange }) {
  const [tab, setTab] = useState("Cereals");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filtered = CROPS.filter(
    (c) =>
      CATEGORIES[tab].includes(c.api) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  // ⌨️ Keyboard support
  useEffect(() => {
    if (!open) return;
    const handle = (e) => {
      if (e.key === "ArrowDown") setFocus((f) => Math.min(f + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setFocus((f) => Math.max(f - 1, 0));
      if (e.key === "Enter") {
        onChange(filtered[focus].api);
        setOpen(false);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open, filtered, focus]);

  const selected = CROPS.find((c) => c.api === value)?.name || "🌱 Fasal chune";

  return (
    <div className="crop-wrapper" ref={ref}>
      <div className="crop-tabs">
        {Object.keys(CATEGORIES).map((t) => (
          <button
            key={t}
            className={tab === t ? "tab active" : "tab"}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="crop-input" onClick={() => setOpen(!open)}>
        {selected}
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="dropdown animated">
          <input
            className="crop-search"
            placeholder="🔍 Fasal search karo"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFocus(0);
            }}
          />

          <div className="dropdown-list">
            {filtered.map((c, i) => (
              <div
                key={c.id}
                className={`dropdown-item ${focus === i ? "focused" : ""}`}
                onClick={() => {
                  onChange(c.api);
                  setOpen(false);
                }}
              >
                🌾 {c.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
