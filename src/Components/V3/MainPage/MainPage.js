import React, { useState } from "react";
import Landing from "../Landing/Landing";
import About from "../../About/About";
import { useNavigate } from "react-router-dom";
import { DefButton, DefMenus, ReactIcon, SAPIcon } from "../../Components";
import {
  AbcOutlined,
  Info,
  TerminalRounded,
  Verified,
} from "@mui/icons-material";
import Skills from "./Skills";

export default function MainPage() {
  const nav = useNavigate();
  const menus = [
    {
      name: "About",
      label: "About",
      icon: Verified,
    },
  ];
  const [SelectedMenu, setSelectedMenu] = useState(0);

  const TimeLine = [
    {
      date: "2020 - Present",
      location: " Innovative packaging ind.corp. | Valenzuela,Manila - Main",
      title: "SAP Administrator | Database Administrator",
      details:
        "Deliver high-quality, robust production code for a diverse array of projects for the company, including automation of user's recurring tasks, SAP B1 Add-on Module, and in-house projects. Provide mentorship, share knowledge within the MIS department, collaborate and conduct training for other departments.",
      tech: [
        {
          label: "ReactJs",
        },
        {
          label: "Node",
        },
        {
          label: "Express",
        },
        {
          label: "MSSQL",
        },
        {
          label: "SAP B1",
        },
        {
          label: "SAP B1 SDK",
        },
        {
          label: "SAP B1 Service Layer",
        },
        {
          label: "CReport",
        },
        {
          label: "Tailwind",
        },
      ],
    },

    {
      date: "2018 - 2020",
      location: " Innovative packaging ind.corp. | Valenzuela,Manila - Main",
      title: "SAP Developer | Database Administrator",
      details:
        "Worked with MIS team and other departments to design Major add-on module , designs Crystal reports and query reports for top-level users.",
      tech: [
        {
          label: "MSSQL",
        },
        {
          label: "SAP B1",
        },
        {
          label: "SAP B1 SDK",
        },

        {
          label: "CReport",
        },
      ],
    },
    {
      date: "2018 - 2020",
      location: " Innovative packaging ind.corp. | CDO - Branch",
      title: "Jr. Programmer | Database Administrator",
      details:
        "Collaborates with Lead Branch Programmer, Developed, maintained and dispached producction code on In-house applicatiion.",
      tech: [
        {
          label: "VB6",
        },
        {
          label: "MySQL",
        },
        {
          label: "PHP",
        },
      ],
    },
  ];
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
      <Landing />
      <Skills />
      <h1 className="font-semibold text-2xl pb-1 mt-10 TITLE">
        Recent Activity
      </h1>
      {TimeLine.map((e, i) => (
        <>
          <div className="flex w-full p-2 ">
            <div className="w-40 text-center">{e.date}</div>
            <div className="w-full">
              <div className="font-semibold border-b   pb-2">{e.title}</div>
              <div className="border-l-2 border-dashed border-gray-500 -ml-[60px] pl-[60px]">
                <p className="italic text-xs mt-2 ">{e.location}</p>
                <p className="text-sm mt-2">{e.details}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
