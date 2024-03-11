import React from "react";
import { IconNPM,IconGit, ReactIcon, SAPicon, IconTailwind, SAPSQL, SAPExpress } from "../../Components";

export default function Skills() {
  const skills = [
    {
      label: "ReactJs",
      icon: ReactIcon,
    },
    {
      label: "NodeJs",
      icon: ReactIcon,
    },
    {
      label: "Express",
      icon: ReactIcon,
    },
    {
      label: "TailWind",
      icon: IconTailwind,
    },    {
      label: "MSSQL",
      icon: SAPSQL,
    },
    {
      label: "SAP B1",
      icon: SAPicon,
    },
    {
      label: "SAP B1 Service Layer",
      icon: SAPicon,
    },
    {
      label: "SAP B1 SDK",
      icon: SAPicon,
    },
    {
      label: "Crystal Report",
      icon: SAPicon,
    },
  
  ];

  const Tools = [
    {label: "ERP"},
    {label: "Project Management"},
    {label: "System Management"},

  ];
  return (
   <>
     <div>
      <h1 className="font-semibold text-2xl pb-4 mt-10 TITLE ">Tech Stack</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((e, i) => (
          <div
            key={i}
            className="   XALAC  flex border-[2px]  dark:border-black bg-white    text-sm   px-2  rounded-md shadow-sm font-semibold "
          >
            <div className="  dark:invert-0 mr-2 ">
              <e.icon size="24px" className=""/>
            </div>
              <div className="text-black ">
                 {e.label}
              </div>
          </div>
        ))}
      </div>
      {/* <APIpng/> */}
    </div>
    {/* <div>
      <h1 className="font-semibold text-2xl pb-1 mt-10 TITLE">Experties</h1>
      <div className="flex flex-wrap gap-2">
        {Tools.map((e, i) => (
          <div
            key={i}
            className="flex border w-fit px-2 py-1 rounded-md shadow-sm font-semibold"
          >
            {e.label}
          </div>
        ))}
      </div>
    </div> */}
   </>


  );
}
