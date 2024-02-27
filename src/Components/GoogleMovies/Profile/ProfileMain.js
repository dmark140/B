import {
  BusinessCenterRounded,
  Cake,
  CakeRounded,
  CalendarMonthRounded,
  Cases,
  Link,
  LinkRounded,
} from "@mui/icons-material";
import React from "react";

export default function ProfileMain() {
  const links = [
    {
      label: "Available",
      icon: BusinessCenterRounded,
    },

    {
      label: "/Links",
      icon: LinkRounded,
      ClassNameText: "XAAXX font-bold",
      ClassNameIcon: "-rotate-45",
    },

    {
      label: "August 13th",
      icon: CakeRounded,
    },
    {
      label: "Joined Apr 5",
      icon: CalendarMonthRounded,
    },
  ];
  return (
    <div className="dark:text-black text-white">
      <div className="font-bold text-3xl ">Deanmark Famoleras</div>
      <div>Brings concepts into reality with coding! ✨</div>
      <div className="mt-1 leading-4">
        Systems Administrator | Sap B1 Developer | Mentor | Thinks out of the
        box .
      </div>
      <div className="mt-2 flex -ml-2 gap-2">
        {links.map((e, i) => (
          <div
            key={i}
            className={`flex gap-1.5 text-[#ffffff9c] dark:text-[#0000009c] scale-90 ${e.ClassName}`}
          >
            <e.icon className={e.ClassNameIcon} />
            <div className={e.ClassNameText}>{e.label} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
