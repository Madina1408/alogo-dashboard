import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function HorBarChart({ chartData }, {theme}) {
  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        labels:{
          font:{
            size:20,
            weight: 'bold'
          }
        },
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
    }
  };

  return <Bar theme={theme} data={chartData} options={options} />;
}

export default HorBarChart;
