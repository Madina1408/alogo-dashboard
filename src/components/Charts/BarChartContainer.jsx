import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "../Consts/BarChartData";
function BarChartContainer() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "New Users",
        data: UserData.map((data) => data.newUsers),
        backgroundColor: ["#FBDED8"],
        borderRadius: 4,
        hoverBorderWidth: 2,
        hoverBackgroundColor: ["#EB5A3C"],
        hoverBorderRadius: 4,
        color:['#9FA9AF'],
      },
    ]
  });

  return (
    <div className="xl:w-11/12 borderBottom mx-auto py-4">
      <div className="xl:w-11/12 mx-auto">
      <p className="text-lg xl:text-xl font-bold">General Statistics</p>
      <div className="flex justify-between">
        <p className="text-sm lg:text-lg font-bold">Total New Registered Users</p>
      <select
        className=" b-shadow-less h-7 opacity-50 text-[0.625rem]"
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
      </div>
      <div className="xl:w-11/12 mx-auto">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default BarChartContainer;
