import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function HorBarChart({ chartData }) {
  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
    }
  };

  return <Bar data={chartData} options={options} />;
}

export default HorBarChart;
