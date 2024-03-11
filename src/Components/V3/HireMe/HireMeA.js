import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import { useNavigate } from "react-router-dom";
import { DefMenus } from "../../Components";
import {
  Verified,
  Work,
} from "@mui/icons-material";

export default function HireMeA() {
  const nav = useNavigate();
  const menus = [
    {
      name: "About",
      label: "About",
      icon: Verified,
    }, {
      name: "Hire Me",
      label: "Hire Me",
      icon: Work,
    },
    {
      name: "Links",
      label: "Links",
      icon: Work,
    },
  ];
  const [SelectedMenu, setSelectedMenu] = useState(1);
useEffect(() => {
  if(SelectedMenu == 0) nav("/About")
//   if(SelectedMenu == 1) nav("/HireMe")
  if(SelectedMenu == 2) nav("/Links")
}, [SelectedMenu])


  return (
    <div className="dark:text-black text-white px-2 ">
      <div className="mt-2">
        <DefMenus
          menus={menus}
          SelectedMenu={SelectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </div>
      <br />
      <div className="mt-[166px]"></div>
      <h1 className="font-sans font-bold text-5xl TITLE  ">Let's work <br/> together</h1>
      
    <div className="border-dashed border-b-2 dark:border-black my-10"></div>
    </div>
  );
}
