import { Code, GitHub, Php } from "@mui/icons-material";
import React from "react";
import {
  ExpressIcon,
  IconVisualStudio,
  NodeJsIcon,
  PhpIcon,
  PostManIcon,
  ReactColorIcon,
  SAPIcon,
  SAPSQL,
  TailwindIcon,
  gitHubIcon,
  msSqlIcon,
  mysqlIcon,
} from "../../Components";

export default function Timeline() {
  const TimeLine = [
    {
      date: "2020 - Present",
      location: " Innovative packaging ind.corp. | Valenzuela,Manila - Main",
      title: "SAP Administrator | Database Administrator",
      details:
        "Deliver high-quality, robust production code for a diverse array of projects for the company, including automation of user's recurring tasks, SAP B1 Add-on Module, and in-house projects. Provide mentorship, share knowledge within the MIS department, collaborate and conduct training for other departments.",
      activities: [
        { label: "Developing Add-on modules from planning to production" },
        { label: "Generating reports and queries based on user requirements" },
        { label: "Managing SAP B1 database" },
        { label: "Administering SAP B1" },
        {
          label:
            "Designing in-house third-party programs according to user needs",
        },
        {
          label:
            "Constructing Add-on modules on SAP B1 using SDK and Service Layer",
        },
        { label: "Customizing and developing reports and queries" },
        { label: "Automating user's tedious processes/encoding" },
        { label: "Establishing Database Backup and Maintenance procedures" },
        { label: "Offering maintenance and support to users" },
        {
          label:
            "Conducting end-user training for effective use of SAP B1 and in-house third-party programs",
        },
      ],
      tech: [
        {
          icon: ReactColorIcon,
          label: "ReactJs",
        },
        {
          icon: NodeJsIcon,
          label: "Node",
        },
        {
          icon: ExpressIcon,
          label: "Express",
        },
        {
          icon: msSqlIcon,
          label: "MSSQL",
        },
        {
          icon: PostManIcon,
          label: "PostMan",
        },
        {
          icon: SAPIcon,
          label: "SAP B1",
        },
        {
          icon: SAPIcon,
          label: "SAP B1 SDK",
        },
        {
          icon: SAPIcon,
          label: "SAP B1 Service Layer",
        },
        {
          icon: SAPIcon,
          label: "CReport",
        },
        {
          icon: TailwindIcon,
          label: "Tailwind",
        },
        {
          icon: gitHubIcon,
          label: "GitHub",
        },
        {
          icon: IconVisualStudio,
          label: "Visual Studio Code",
        },

        {
          icon: IconVisualStudio,
          label: "Visual Basic",
        },
      ],
    },

    {
      date: "2018 - 2020",
      location: " Innovative packaging ind.corp. | Valenzuela,Manila - Main",
      title: "SAP Developer | Database Administrator",
      details:
        "Worked with MIS team and other departments to design Major add-on module , designs Crystal reports and query reports for top-level users.",
      activities: [
        { label: "Developing Add-on modules from planning to production" },
        { label: "Generating reports and queries based on user requirements" },
        {
          label:
            "Designing in-house third-party programs according to user needs",
        },
        {
          label:
            "Constructing Add-on modules on SAP B1 using SDK and Service Layer",
        },
        { label: "Customizing and developing reports and queries" },
        {
          label:
            "Conducting end-user training for effective use of SAP B1 and in-house third-party programs",
        },
      ],
      tech: [
        {
          icon: msSqlIcon,
          label: "MSSQL",
        },
        {
          icon: SAPIcon,
          label: "SAP B1",
        },
        {
          icon: SAPIcon,
          label: "SAP B1 SDK",
        },

        {
          icon: SAPSQL,
          label: "CReport",
        },
        {
          icon: IconVisualStudio,
          label: "Visual Basic",
        },
      ],
    },
    {
      date: "2017 - 2018",
      location: " Innovative packaging ind.corp. | CDO - Branch",
      title: "Jr. Programmer | Database Administrator",
      details:
        "Collaborates with Lead Branch Programmer, Developed, maintained and dispatched production  code on In-house application.",
      activities: [],
      tech: [
        {
          icon: IconVisualStudio,
          label: "VB6",
        },
        {
          icon: mysqlIcon,
          label: "MySQL",
        },
        {
          icon: mysqlIcon,
          label: "PHP",
        },
      ],
    },
  ];
  return (
    <div id="Experience">
      <h1 className="font-sans font-bold text-2xl TITLE  ">Experience</h1>
      {TimeLine.map((e, i) => (
        <>
          <div className=" border-b-2 flex w-full p-2 rounded-lg XALAC hover:bg-opacity-10 dark:hover:bg-opacity-10 hover:bg-white dark:hover:bg-black ">
            <div className="relative">
              {/* <div className="  bg-gray-600 w-4 h-4 text-transparent rounded-xl mt-1 mr-2 "></div> */}
              <div className=" border-dashed border-r-4 h-full w-full  absolute right-[13.8px]"></div>
            </div>
            <div className="w-full">
              <div className="font-semibold  relative">{e.title}</div>
              <div className=" border-gray-500  ">
                <p className="italic text-xs mt-2 ">{e.location}</p>
                <p className="italic text-xs  font-bold">{e.date}</p>
                <p className="text-sm mt-2">{e.details}</p>

                <div className="flex ">
                  <Code className="scale-[0.8] mt-0.5 mr-2" />
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                    {e.tech.map((ee, ii) => (
                      <>
                        <div className=" flex  gap-2 justify-center px-1  text-xs dark:bg-gray-50  bg-gray-700  rounded-md border">
                          {/* <ee.icon size="15px" /> */}
                          {ee.label}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
