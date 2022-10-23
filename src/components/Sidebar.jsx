import React from 'react';
import Logo from '../assets/SidebarImages/logo.png';
import SidebarImage from '../assets/SidebarImages/sidebar.PNG'
import { SidebarData } from './SidebarData'
function Sidebar() {
  return (
    <div className='border-r  border-gray-200 w-2/12 h-full'>
      <div className='flex justify-between flex-col items-center gap-20'>
      <div>
        <img src={Logo}/>
      </div>
      <ul className='flex cursor-pointer flex-col gap-10 text-sm'>
        {SidebarData.map((val,key) => {
          return( <li className='flex gap-4 ' key={key} onClick={()=>{window.location.pathname=val.link}}>
          <div className='hover'>{val.icon}</div>
          <div className='hover:font-bold hover:text-slate-700 hover:opacity-100 opacity-50 text-[#87949B] '>{val.title}</div>
          </li>);
        })}
      </ul>
      </div>
      <div className='ml-0 mt-36'>
        <img src={SidebarImage}/>
      </div>
    </div>
  )
}
export default Sidebar