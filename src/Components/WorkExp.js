import React from "react";
import WorkExpComp from "./WorkExpComp";

export default function WorkExp() {
  const WorkExpArray = [
    {
      year: "2020 - Present",
      title: "SAP Administrator | Database Administrator",
      compLink: "https://www.Innovativepkg.com.ph/",
      comp: "Innovative packaging ind. corp. | Valenzuela Main",
      disc: "Deliver high-quality, robust production code for a diverse array of projects for the company, including automation of user's recurring tasks, SAP B1 Add-on Module, and in-house projects. Provide mentorship, share knowledge within the MIS department, collaborate and conduct training for other departments.",
      tech: [
        { label: "ReactJs" },
        { label: "Node" },
        { label: "Express" },
        { label: "MSSQL" },
        { label: "SAP B1" },
        { label: "SAP B1 SDK" },
        { label: "Service Layer" },
        { label: "CReport" },
        { label: "Tailwind" },
      ],
    },

    {
      year: "2018 - 2020",
      title: "SAP Developer | Database Administrator",
      compLink: "https://www.Innovativepkg.com.ph/",
      comp: "innovative packaging ind. corp. | Valenzuela Main",
      disc: "Worked with MIS team and other departments to design Major add-on module , designs Crystal reports and query reports for top-level users.",
      tech: [
        { label: "SAP" },
        { label: "SAP B1 SDK" },
        { label: "MSSQL" },
        { label: "CReport" },
      ],
    },
    {
      year: "2017 - 2018",
      title: "Jr. Programmer | Database Administrator",
      compLink: "https://www.innovativepkg.com.ph/",
      comp: "Innovative packaging ind. corp. | CDO",
      disc: "Collaborates with Lead Branch Programmer,Developed, maintained and dispached producction code on In-house applicatiion.",
      tech: [{ label: "VB6" }, { label: "MySQL" }, { label: "PHP" }],
    },
  ];

  return (
    <div className="mt-10" id="exp">
      <p className="text-Regular w-40 mb-4">Work Experience</p>
      {WorkExpArray.map((item, i) => (
        <div className="mb-8">
          <WorkExpComp
            year={item.year}
            title={item.title}
            disc={item.disc}
            tech={item.tech}
            comp={item.comp}
            compLink={item.compLink}
          />
        </div>
      ))}
    </div>
  );
}
