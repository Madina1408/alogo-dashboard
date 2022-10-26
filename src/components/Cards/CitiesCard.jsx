import React from "react";
import CitiesData from "../../components/Consts/CitiesData";
function CitiesCard() {
  return (
    <div className="flex flex-col gap-5 m-auto mt-8 mb-7 xl:px-4 ">
      <p className="font-bold text-lg lg:text-xl pl-2">Active Cities</p>
      <div className="flex margin-auto xl:gap-3 justify-around  ">
        {CitiesData.map((val, key) => {
          return (
            <div
              className="flex flex-col items-center pt-6 shadow-xl rounded-[10px]"
              style={{ backgroundColor: val.bg }}
              key={key}
            >
              <div>
                <p className="font-bold text-md">{val.cityName} </p>
                <p className="font-medium text-xs">
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
