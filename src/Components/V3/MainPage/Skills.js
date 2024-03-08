import React from "react";
import { ReactIcon, SAPIcon } from "../../Components";

export default function Skills() {
  const skills = [
    {
      label: "React",
      icon: ReactIcon,
    },
    {
      label: "Node.js",
      icon: ReactIcon,
    },
    {
      label: "Express",
      icon: ReactIcon,
    },
    {
      label: "MSSQL",
      icon: ReactIcon,
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
      label: "Tailwind",
      icon: ReactIcon,
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-1 mt-10 TITLE">Tech Stack</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((e, i) => (
          <div
            key={i}
            className="flex border w-fit px-2 py-1 rounded-md shadow-sm font-semibold"
          >
            {/* <div className="mt-1 mr-1">
              <e.icon className="mt-1" />
            </div> */}
            {e.label}
          </div>
        ))}
      </div>
    </div>
  );
}
