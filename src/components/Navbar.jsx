import React from "react";
import Search from "../assets/NavbarImages/search.svg";
import Mailbox from "../assets/NavbarImages/mailbox.svg";
import Bell from "../assets/NavbarImages/bell.svg";
import Profile from "../assets/NavbarImages/profilepic.svg";
import Arrow from "../assets/NavbarImages/downarrow.svg";

function Navbar() {
  return (
    <div className="w-full text-sm borderBottom" >
      <div className="flex items-center justify-between mx-10 my-7">
        <div className="flex items-center font-[400] gap-4 text-[#87949B]">
          <img src={Search} alt="search" />
          <p>Search for users or rewards</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <img src={Mailbox} alt="mailbox" />
              <div className="bg-red-500 w-2.5 h-2.5 rounded-full absolute left-4 bottom-3"></div>
            </div>
            <div className="relative">
              <img src={Bell} alt="bell" />
              <div className="bg-red-500 w-2.5 h-2.5 rounded-full absolute left-3 bottom-3.5"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-[700]">
            <img src={Profile} alt="profile picture" />
            <p>Mohammed Abdullah </p>
            <img src={Arrow} alt="downarrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
