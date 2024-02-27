import React, { useState } from "react";
import CardLanding from "./CardLanding";
import ProfileMain from "../GoogleMovies/Profile/ProfileMain";
import MenuBar from "../MenuBar/MenuBar";
import Feed from "../Feed/Feed";

export default function LandPageHome() {
  const [ActiveBar, setActiveBar] = useState(0);

  return (
    <div className="w-full ">
      <div className=" max-w-[512px] mx-auto ">
        {/* <CardLanding/>  */}
        <br />
        <br />
        <br />
        <ProfileMain />
        {/* Menu Bar */}
        <MenuBar setActiveBar={setActiveBar} ActiveBar={ActiveBar} />
        {ActiveBar == 0 && <Feed />}

        {/* Profile */}
        {/* Some Icon with link */}
        {/* About me section */}
        {/* My Skills Section */}
        {/* My Tools Section */}
        {/* I Am Available for Section */}
        {/* Footer // Add some linke >  resume PDS type */}
      </div>
    </div>
  );
}
