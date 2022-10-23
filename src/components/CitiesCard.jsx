import React from "react";
import CitiesData from "./CitiesData";
function CitiesCard() {
  return (
    <div className="flex flex-col gap-5 m-auto mt-8 px-4">
      <p className="font-bold text-[16px] pl-2">Active Cities</p>
      <div className="flex margin-auto justify-around  ">
        {CitiesData.map((val, key) => {
          return (
            <div
              className="flex flex-col items-center pt-6 shadow-xl rounded-[10px]"
              style={{ backgroundColor: val.bg }}
              key={key}
            >
              <div>
                <p className="font-bold text-[16px]">{val.cityName} </p>
                <p className="font-medium text-[12px]">
                  {val.activeUsers} Acitve Users
                </p>
              </div>
              <div>{val.image}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CitiesCard;
