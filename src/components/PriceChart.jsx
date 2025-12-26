import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function PriceChart({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  const data = {
    labels: forecast.map((f) => f.date),
    datasets: [
      {
        label: "Price Trend (₹/kg)",
        data: forecast.map((f) => f.price),
        borderColor: "#1f8f3f",
        backgroundColor: "rgba(31,143,63,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="result-card">
      <h3>📈 Price Trend (7 Din)</h3>
      <Line data={data} options={options} />
    </div>
  );
}
