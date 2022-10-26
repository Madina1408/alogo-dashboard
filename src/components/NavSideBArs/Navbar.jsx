import React from "react";
import Search from "../../assets/NavbarImages/search.svg";
import Mailbox from "../../assets/NavbarImages/mailbox.svg";
import Bell from "../../assets/NavbarImages/bell.svg";
import Profile from "../../assets/NavbarImages/profilepic.svg";
import Arrow from "../../assets/NavbarImages/downarrow.svg";
import Logo from '../../assets/SidebarImages/logo.svg';
import Sidebar from "./Sidebar";
import {useState} from 'react' ;
function Navbar() {
  let [open, setOpen]=useState(false);
  return (
    <div div className=" flex " >
      <div className="w-11/12 m-auto lg:text-lg text-sm borderBottom" >
        <div className="flex items-center justify-between lg:mx-10 mx-5 md:my-7 sm:my-2">
          <div className="flex items-center font-[400] gap-4 text-[#87949B]">

            <img className="md:hidden sm:w-16 sm:h-11" src={Logo} alt="logo" />
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
              <p className="lg:flex hidden">Mohammed Abdullah </p>
              <img className="lg:flex hidden" src={Arrow} alt="downarrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
