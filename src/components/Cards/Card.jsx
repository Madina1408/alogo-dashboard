import React from "react";
import uparrow from "../../assets/UserPerformance/uparrow.svg";
import cardimage from "../../assets/UserPerformance/cardimage.png";
export function Card({id, image, number, performanceType, statistics, monthlyData}) {
  return (
    <div className="card group">
      <div className=" ml-28 mb-1 ">
        <img className="" src={cardimage} alt="logo type image" />
      </div>
      <div key={id}>
        <div className="bg-orange-600 group-hover:bg-orange-300 card-image-div h-9 w-10 rounded-md p-2.5 text-white">{image}</div>
        <p className="group-hover:text-white card-number text-2xl text-orange-600 font-bold">{number}</p>
        <h4 className="font-bold">{performanceType}</h4>
        <div className="flex gap-2 items-start ">
          <img className="mt-1" src={uparrow} alt="uparrow" />
          <div className=" flex flex-col text-[10px] ">
            <p className="text-[#9BC368] group-hover:text-black card-text">{statistics}</p>
            <p>{monthlyData}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
