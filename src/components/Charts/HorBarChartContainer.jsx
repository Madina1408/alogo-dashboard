import React, { useState } from "react";
import HorBarChart from "./HorBarChart";
import { ActiveUserData } from "../Consts/HorBarChartData";
import colors from 'tailwindcss/colors'
function HorBarChartContainer({theme}) {
  const [userData, setUserData] = useState({
    labels: ActiveUserData.map((data) => data.userType),
    datasets: [
      {
        label: "Users",
        data: ActiveUserData.map((data) => data.userAmount),
        backgroundColor: ['#FBDED8'],
        borderRadius: 4,
        hoverBorderWidth: 2,
        hoverBackgroundColor: ["#EB5A3C"],
        hoverBorderRadius: 4,
      },
    ],
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              weight: "bold",
            },
          },
        },
      },
    },
  });

  return (
    <div className="xl:w-11/12 borderBottom mx-auto py-4">
      <div className="xl:w-11/12 flex justify-between mx-auto">
        <p className="text-sm lg:text-lg font-bold">General Statistics</p>
        <select
          className=" b-shadow-less h-7 opacity-50 text-[10px]"
          name="Months"
          id=""
        >
          <option value="">January</option>
          <option value="">February</option>
          <option value="">March</option>
          <option value="">April</option>
          <option value="">May</option>
          <option value="">June</option>
          <option value="">July</option>
          <option value="">August</option>
          <option value="">September</option>
          <option value="">October</option>
          <option value="">November</option>
          <option value="">December</option>
        </select>
      </div>
      <div className="xl:w-11/12 mx-auto">
        <HorBarChart theme={theme} chartData={userData} />
      </div>
    </div>
  );
}

export default HorBarChartContainer;
