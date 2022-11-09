import React from "react";
import { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import ArtTrackSharpIcon from "@mui/icons-material/ArtTrackSharp";
import ColorLensSharpIcon from "@mui/icons-material/ColorLensSharp";
function UserProfile({theme, setTheme}) {
  const ThemeButtons = ({ setTheme }) => {
    return (
      <div className="flex pl-10 gap-2">
        <ThemeCircle setTheme={setTheme} value='' bg="bg-[#EB5A3C]" />
        <ThemeCircle setTheme={setTheme} value='yellow' bg="bg-[#FFB65E]" />
        <ThemeCircle setTheme={setTheme} value='purple' bg="bg-[#6E1946]" />
        <ThemeCircle setTheme={setTheme} value='dark-blue' bg="bg-[#0F2837]" />
      </div>
    );
  };
  const ThemeCircle = (props) => {
    return <div className={" cursor-pointer h-5 w-5 rounded-full " + props.bg}
    onClick={()=>props.setTheme(props.value)}></div>;
  };

  return (
    <div >
      <div className="text-skin-base flex flex-col gap-3 font-semibold absolute top-11 z-10 p-5 right-0 bg-gray-100 border border-gray-300 w-11/12 rounded-bl-lg rounded-br-lg rounded-tl-lg shadow-xl ">
        <div className="flex cursor-pointer gap-5">
          <ManageAccountsIcon /> Accounts
        </div>
        <div className="flex cursor-pointer gap-5">
          <SettingsApplicationsOutlinedIcon /> Settings
        </div>
        <div className="flex cursor-pointer gap-5">
          <ArtTrackSharpIcon /> Preferences
        </div>
        <div className="flex cursor-pointer gap-5">
          <ColorLensSharpIcon /> Themes
        </div>
        <ThemeButtons theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default UserProfile;

// className={theme==='yellow'? 'theme-yellow': theme === 'purple'? 'theme-purple': theme === 'dark-blue'? 'theme-dark-blue':''}