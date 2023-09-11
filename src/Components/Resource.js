import { ArrowRight, NorthEast } from "@mui/icons-material";
import React from "react";
import Footer from "./Footer";

export default function Resource() {
  const comp = [
    {
      link: "#",
      title: "SAP B1 License Request Module",
      description: `Lets the user to request a license on SAP B1 because Dean "hate" doing it.`,
    },

    {
      link: "#",
      title: "Pie Chart",
      description: `Pie chart using css conic-gradient`,
    },
    {
      link: "#",
      title: "Calendar Range Picker",
      description: ` Imagine the Calendar picker when you're buying tickets online`,
    },
  ];
  return (
    <>
      <div className=" miniFadeIn " id="PandR">
        <p className="miniFadeIn text-Header mb-4  ">Projects & Resources</p>

        {comp.map((item, index) => (
          <>
            <div className="mb-4">
              <span className=" flex">
                <a href="#" className="miniFadeIn text-Regular HAQXSA  w-fit">
                  {item.title}
                </a>
                <NorthEast className="miniFadeIn text-white scale-75 font-bold" />
              </span>

              <div className="ml-6">
                <div className="miniFadeIn text-Mute flex">
                  <ArrowRight className="miniFadeIn text-white" />
                  <div>{item.description}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
