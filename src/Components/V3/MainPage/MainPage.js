import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing"; 
import { useNavigate } from "react-router-dom";
import { DefButton, DefMenus, ReactIcon, SAPIcon } from "../../Components";
import {
  AbcOutlined,
  House,
  Info,
  InfoOutlined,
  InfoSharp,
  TerminalRounded,
  Verified,
  Work,
} from "@mui/icons-material";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Education from "./Education";
import Footer from "./Footer";
import About from "../../About";
import Contact from "./Contact";

export default function MainPage() {
  const nav = useNavigate();
  const menus = [
    {
      name: "",
      label: "",
      icon: House,
    }, {
      name: "Hire Me",
      label: "Hire Me",
      icon: Work,
    },
    {
      name: "Links",
      label: "Links",
      icon: Work,
    },
  ];
const [SelectedMenu, setSelectedMenu] = useState(0);
// useEffect(() => {
// // if(SelectedMenu == 0) nav("/About")
// if(SelectedMenu == 1) nav("/HireMe")
// if(SelectedMenu == 2) nav("/Links")
// }, [SelectedMenu])


  return (
    <div className="dark:text-black text-white px-2 ">
      {/* <div className="  w-full AXAA ">
        <DefMenus
          menus={menus}
          SelectedMenu={SelectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </div> */}
      <br />
      <div className="h-[100vh] relative">
        <div className="ASCENT w-fit " id="#landing">
          <Landing />
        </div>
      </div>
      <About/>
      <br/>
       <Skills />
       <br/>
       <br/>
      <Timeline /> 
      <br/>
      <br/>
      <Education/>
      <br/>
      <br/>
      <br/>
      <Contact/>
      <br/>

      <Footer/>
    {/* <div className="border-dashed border-b-2 dark:border-black my-10"></div> */}
    </div>
  );
}
