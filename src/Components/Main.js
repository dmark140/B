import React from "react";
import Head from "./Head";
import About from "./About";
import WorkExp from "./WorkExp";
import Menus from "./Menus";
import { AutorenewTwoTone, NorthEast } from "@mui/icons-material";
import Footer from "./Footer";
import Resource from "./Resource";

export default function Main() {
  return (
    <>
      <div className="fadeIn fixed top-0 left-0  w-screen h-screen z-50"></div>

      <div className="main  ">
        <div className="">
          <Head />
          <Menus />
          <About />
          <WorkExp />
          <Resource />
          <Footer />
        </div>
      </div>
    </>
  );
}
