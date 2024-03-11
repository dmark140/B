import React from "react";
import {
  IconNPM,
  IconGit,
  ReactIcon,
  SAPicon,
  IconTailwind,
  SAPSQL,
  SAPExpress,
  ReactColorIcon,
  NodeJsIcon,
  ExpressIcon,
  TailwindIcon,
  msSqlIcon,
  SAPIcon,
  PostManIcon,
  gitHubIcon,
  mysqlIcon,
  PhpIcon,
  PsIcon,
  UnityIcon,
  BlenderIcon,
} from "../../Components";

export default function Skills() {
  const skills = [
    {
      label: "ReactJs",
      icon: ReactColorIcon,
    },
    {
      label: "NodeJs",
      icon: NodeJsIcon,
    },
    {
      label: "Express",
      icon: ExpressIcon,
    },
    {
      label: "TailWind",
      icon: TailwindIcon,
    },
    {
      label: "MSSQL",
      icon: msSqlIcon,
    },
    {
      label: "SAP B1",
      icon: SAPIcon,
    },
    {
      label: "SAP B1 Service Layer",
      icon: SAPIcon,
    },
    {
      label: "SAP B1 SDK",
      icon: SAPIcon,
    },
    {
      label: "Crystal Report",
      icon: SAPIcon,
    },
    {
      label: "PostMan",
      icon: PostManIcon,
    },
    {
      label: "Git Hub",
      icon: gitHubIcon,
    },
    {
      label: "MySQL",
      icon: mysqlIcon,
    },
    {
      label: "Php",
      icon: PhpIcon,
    },
    {
      label: "PhotoShoop",
      icon: PsIcon,
    },
    {
      label: "Unity3d",
      icon: UnityIcon,
    },
    {
      label: "Belnder",
      icon: BlenderIcon,
    },
  ];

  const Tools = [
    { label: "ERP" },
    { label: "Project Management" },
    { label: "System Management" },
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
              <div className="  mr-2 ">
                <e.icon size="24px" className="" />
              </div>
              <div className="text-black ">{e.label}</div>
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
