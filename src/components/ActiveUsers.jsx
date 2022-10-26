import React from "react";
import ActiveUsersData from "../components/Consts/ActiveUsersData";
function ActiveUsers() {
  return (
    <div className="w-full  flex flex-col xl:gap-2 lg:gap-4 font-bold border-b border-gray-300 xl:pb-5 lg:pb-7 ">
      <div className="flex justify-between">
        <p>Most Active Users</p>
        <a  href="#"><p className="text-[#EB5A3C] underline underline-offset-2 decoration-solid">View All Users</p></a>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-2 ">
        {ActiveUsersData.map((val, key) => {
          return (
            <div className="flex w-full items-center bg-white rounded shadow-lg gap-3.5 " key={key}>
              <div className="w-2 h-full rounded-l bg-orange-500"></div>
              <div className="">{val.image}</div>
              <div className="flex flex-col py-3  ">
                <div>{val.nameText}</div>
                <div className="flex gap-1 xl:text-sm items-center">
                  <div className="text-[#EB5A3C] ">{val.point} pt</div>
                  <div className="w-1 h-1 bg-black rounded-md"></div>
                  <div className="text-[#EB5A3C]">{val.badge} badge</div>
                  <div className="w-1 h-1 bg-black rounded-md"></div>
                  <div className="text-[#EB5A3C]">{val.reward} rewards</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActiveUsers;
