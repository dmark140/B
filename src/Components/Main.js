import React from "react";
import Head from "./Head";
import About from "./About";
import WorkExp from "./WorkExp";
import Menus from "./Menus";
import { NorthEast } from "@mui/icons-material";
import Footer from "./Footer";
import Resource from "./Resource";

export default function Main() {
  return (
    <div className="main">
      <Head />
      <Menus />
      <About />
      <WorkExp />
      <Resource />
      <Footer />
    </div>
  );
}
