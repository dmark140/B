import { ArrowRight, NorthEast } from "@mui/icons-material";
import React from "react";

export default function Resource() {
  const comp = [
    {
      link: "#",
      title: "Calendar Range Picker",
      description: ` Calendar Component that returns a range of Date, Imagine the
                Calendar picker when you're buying tickets online`,
    },

    {
      link: "#",
      title: "SAP B1 License Request Module",
      description: `Lets the user to request a license on SAP B1 because Dean "hate" doing it.`,
    },
  ];
  return (
    <>
      <div className="mt-16 " id="PandR">
        <p className="text-Regular mb-4 ">Projects & Resources</p>

        {comp.map((item, index) => (
          <>
            <div className="mb-4">
              <span className=" flex">
                <a href="#" className="text-Regular HAQXSA  w-fit">
                  {item.title}
                </a>
                <NorthEast className="text-white scale-75 font-bold" />
              </span>

              <div className="ml-6">
                <div className="text-Mute flex">
                  <ArrowRight className="text-white" />
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
