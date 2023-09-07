import React from "react";
import Head from "./Head";
import About from "./About";
import WorkExp from "./WorkExp";

export default function Main() {
  return (
    <div className="main">
      <Head />
      <About />
      <WorkExp />
    </div>
  );
}
