import { LinkedIn, Numbers } from "@mui/icons-material";
import React from "react";
import { FacebookIcon, LinkedInIcon, WebInIcon } from "../../Components";

export default function Contact() {
  const ListOfContact = [
    {
      label: "My LinkedIn",
      icon: LinkedInIcon,
      linkLabel: "/in/Dmark",
      link: "#",
    },

    {
      label: "My FaceBook Page",
      icon: FacebookIcon,
      linkLabel: "/in/Dmark",
      link: "#",
    },

    {
      label: "Send Me an Email",
      icon: WebInIcon,
      linkLabel: "famolerasd@gmail.com",
      link: "#",
    },
    {
      label: "Contact me (Globe)",
      icon: Numbers,
      linkLabel: "09555667279",
      link: "#",
    },
  ];
  return (
    <div>
      <h1 className="font-sans font-bold text-4xl TITLE  pb-5 ">Contact</h1>

      <div className="md:flex md:justify-between ">
        {ListOfContact.map((e, i) => (
          <>
            <div className=" -space-y-1 bg-opacity-20 rounded-md bg-white md:w-[220px] p-2 my-4 md:my-0 ">
              <div className="ml-[26px] text-sm opacity-80">{e.label}</div>
              <div className="flex">
                <e.icon size="18px" />
                <a href={e.link} className="hover:underline ml-[2px]">
                  {e.linkLabel}
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
