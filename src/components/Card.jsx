import React from "react";
import uparrow from "../assets/UserPerformance/uparrow.svg";
import cardimage from "../assets/UserPerformance/cardimage.png";
export function Card(props) {
  return (
    <div className="card">
      <div className="ml-28 mb-1">
        <img src={cardimage} alt="logo type image" />
      </div>
      <div key={props.id}>
        <div className="bg-orange-600 card-image-div h-9 w-10 rounded-md p-2.5 text-white">{props.image}</div>
        <p className="card-number text-2xl text-orange-600 font-bold">{props.number}</p>
        <h4 className="font-bold">{props.performanceType}</h4>
        <div className="flex gap-2 items-start ">
          <img className="mt-1" src={uparrow} alt="uparrow" />
          <div className="flex flex-col text-[10px] ">
            <p className="text-[#9BC368] card-text">{props.statistics}</p>
            <p>{props.monthlyData}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
