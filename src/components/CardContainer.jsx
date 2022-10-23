import React from "react";
import CardContent from "./CardData";
import { Card } from "./Card";
import calendar from "../assets/UserPerformance/calendar.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
function CardContainer() {
  return (
    <div className="w-full border-b border-gray-300 pb-7">
      <div className="flex flex-col gap-[2px] mb-8">
        <h3 className="font-bold">Welcome Back, Mohammed!</h3>
        <p className="text-sm">
          Here is how your users are performing recently
        </p>
      </div>
      <div className="flex float-right gap-2 items-center mb-8">
        <p className="text-[10px] ">Data shown from</p>
        <div className="flex justify-end rounded-[4px] items-center pr-3 gap-2 bg-white w-[184px] h-7">
          <p className="text-[10px] text-orange-500">
            October 10 - November 10, 2020
          </p>
          <img src={calendar} alt="" />
        </div>
      </div>
      <div className="container">
        {CardContent.map((CardContent) => (
          <Card
            key={CardContent.id}
            image={CardContent.image}
            number={CardContent.number}
            performanceType={CardContent.performanceType}
            statistics={CardContent.statistics}
            monthlyData={CardContent.monthlyData}
          />
        ))}
        <div>
          <div className="card border border-gray-400 py-[50px] items-center pl-[1px] ">
            <div>
              <AiOutlinePlusCircle className="card-add-div w-9 h-9 text-[#EB5A3C]" />
            </div>
            <h4 className="card-text text-[#87949B]">Add New Card</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
