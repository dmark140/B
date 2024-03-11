import { Code } from '@mui/icons-material';
import React from 'react'

export default function Timeline() {
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
          date: "2017 - 2018",
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
    <div>
      <h1 className="font-semibold text-2xl pb-1 mt-10 TITLE">
        Experience
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
                <div className='flex '>
                <Code className='scale-[0.8] mt-0.5 mr-2'/>
                    <div className='flex flex-wrap gap-x-2 gap-y-1 mt-2'> 
                      
                    {e.tech.map((ee,ii) =>(
                            <><p className=' px-1  text-xs dark:bg-gray-50   rounded-md border'>{ee.label}</p></>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    
    </div>
  )
}
