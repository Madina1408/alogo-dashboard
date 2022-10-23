import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./BarChartData";
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
      },
    ]
  });

  return (
    <div className="w-[500px] borderBottom mx-auto py-4">
      <div className="w-[90%] mx-auto">
      <p className="text-xl font-bold">General Statistics</p>
      <div className="flex justify-between">
        <p className="text-[14px] font-bold">Total New Registered Users</p>
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
      </div>
      <div className="w-[90%] mx-auto">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default BarChartContainer;
