import React from "react";
import { Bar } from "react-chartjs-2";
function BarChart({ chartData }) {
  const options ={
    plugins:{
      legend: {
        display: false
      }
    },
    border: {
      display: false,
    },
  }
  return (
    <Bar
      data={chartData} options={options}
    />
  );
}

export default BarChart;
