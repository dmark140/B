import {
  Home,
  Inventory,
  LinkOff,
  LinkRounded,
  NorthEast,
  Work,
} from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";

export default function Menus() {
  const comp = [
    {
      icon: Home,
      label: "Home",
      link: "#",
    },
    {
      icon: Work,
      label: "Work Experience",
      link: "#exp",
    },
    {
      icon: NorthEast,
      label: "Links",
      link: "#link",
    },
    {
      icon: Inventory,
      label: "Resources",
      link: "#PandR",
    },
  ];

  return (
    <div>
      <div className="my-2 gap-2 flex absolute ml-2">
        {comp.map((item, index) => (
          <div key={index} className="mr-2">
            <a href={item.link} className=" HAQXSA">
              <span>
                <item.icon className="text-white scale-75 -mt-0.5" />
              </span>
              <span>{item.label}</span>
            </a>
          </div>
        ))}
      </div>
      <div className=" mb-10">x</div>
    </div>
  );
}
