import React, { useState } from "react";
import Logo from "../../assets/SidebarImages/logo.png";
import SidebarImage from "../../assets/SidebarImages/sidebar.PNG";
import { SidebarData } from "../../components/Consts/SidebarData";
function Sidebar() {
  function openSidebar(val) {
    window.location.pathname = val.link;
  }

  let [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl pl-8 py-5 block "
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div
        className='border-r  border-gray-200 w-full h-full'
      >
        <div className="flex justify-between flex-col items-center lg:gap-6 md:gap-5 xl:gap-20">
          <div className="">
            <img className="md:block hidden" src={Logo} />
          </div>
          <ul className={`group cursor-pointer  md:static  absolute flex flex-col gap-11 xl:gap-12 text-sm ${open? 'gap-[24px] text-xs font-semibold text-[#000000] bg-white pt-3 pl-2 top-[66px] left-0':'left-[-100%]'}` }>
            {SidebarData.map((val, key) => {
              return (
                <li
                  className={`flex items-center text-[#000000] gap-3 lg:gap-4 ${open? 'gap-[3px]':''}`}
                  key={key}
                  onClick={() => openSidebar(val)}
                >
                  <div className="hover">{val.icon}</div>
                  <div className="hover:font-bold md:text-md lg:text-lg  font-medium  hover:text-slate-700 hover:opacity-100 xl:opacity-80 md:opacity-80 ">
                    {val.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:block hidden ml-0 mt-36">
          <img src={SidebarImage} />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
