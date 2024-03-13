import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import { useNavigate } from "react-router-dom";
import { DefMenus } from "../../Components";
import {
  EmailOutlined,
  Facebook,
  GitHub,
  LocationCity,
  LocationDisabled,
  LocationSearching,
  Numbers,
  PinDrop,
  PinDropOutlined,
  Verified,
  Work,
} from "@mui/icons-material";
import Education from "./Education";
import Timeline from "./Timeline";
import Skills from "./Skills";

export default function HireMeA() {
  const dets = [
    {
      label: "MalintaValenzuela, Metro Manila",
      icon: PinDropOutlined,
      link: "",
    },
    {
      label: "Famolerasd@gmail.com",
      icon: EmailOutlined,
      link: "",
    },
    {
      label: "/dmark140",
      icon: GitHub,
      link: "https://github.com/dmark140",
    },
    {
      label: "/Dean Mark",
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=100088412763050",
    },
    {
      label: "+639555667279 Globe",
      icon: Numbers,
      link: "#",
    },
  ];
  return (
    <div className="dark:text-black text-white px-2 ">
      <div>
        <div className="font-bold text-3xl font-sans mt-2 ">
          DEANMARK FAMOLERAS
        </div>

        <div className="font-bold text-xl font-sans  -mt-1 opacity-[0.6] ">
          SYSTEMS ADMIN / FULL-STACK DEVELOPER
        </div>
      </div>
      <div className="flex   mt-10">
        <div>
          <Timeline />
          <div className="mt-10"></div>
          {dets.map((e, i) => (
            <>
              <div className="flex text-sm gap-2 mx-4">
                <e.icon />
                <a href={e.link}>{e.label}</a>
              </div>
            </>
          ))}
        </div>

        <div className="ml-4 min-w-[280px] max-w-[280px]">
          <Education />
          <br />
          <Skills />
        </div>
      </div>
    </div>
  );
}
