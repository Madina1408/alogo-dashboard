import React from "react";
import ActiveUsersData from "./ActiveUsersData";
function ActiveUsers() {
  return (
    <div className="w-full flex flex-col gap-4 font-bold border-b border-gray-300 pb-7 ">
      <div className="flex justify-between">
        <p>Most Active Users</p>
        <a  href="#"><p className="text-[#EB5A3C] underline underline-offset-2 decoration-solid">View All Users</p></a>
      </div>
      <div className="container grid-cols-2">
        {ActiveUsersData.map((val, key) => {
          return (
            <div className="active-user-card gap-3.5 " key={key}>
              <div className="w-2 h-full rounded-l bg-orange-500"></div>
              <div className="">{val.image}</div>
              <div className="flex flex-col py-3  ">
                <div>{val.nameText}</div>
                <div className="flex gap-1 items-center">
                  <div className="text-[#EB5A3C]">{val.point} pt</div>
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
