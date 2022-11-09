import React from "react";
import CardContent from "../../components/Consts/CardData";
import { Card } from "./Card";
import calendar from "../../assets/UserPerformance/calendar.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
function CardContainer() {
  return (
    <div className="w-full flex flex-col border-b border-gray-300 xl:pb-5 lg:pb-7">
      <div className="flex flex-col gap-[2px] mb-8">
        <h3 className="font-bold xl:text-xl">Welcome Back, Mohammed!</h3>
        <p className="text-sm xl:text-md">
          Here is how your users are performing recently
        </p>
      </div>
      <div className="flex self-end gap-2  items-center  mb-8">
        <p className="text-[10px] md:text-[11px] xl:text-xs ">Data shown from</p>
        <div className="flex   justify-end rounded items-center pr-3 gap-2 bg-white xl:w-52 sm:w-48 h-7">
          <p className="text-[10px] md:text-[11px] xl:text-xs text-skin-base ">
            October 10 - November 10, 2020
          </p>
          <img  src={calendar} alt="" />
        </div>
      </div>
      <div className="lg:container sm:grid sm:grid-cols-2 sm:gap-5 ">
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
          <div className="card border border-gray-400 py-12 items-center pl-[1px] ">
            <div>
              <AiOutlinePlusCircle className="card-add-div w-9 h-9 text-skin-base" />
            </div>
            <h4 className="card-text text-[#87949B]">Add New Card</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
