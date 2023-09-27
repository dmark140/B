import React, { useEffect, useState } from "react";
import Head from "./Head";
import About from "./About";
import WorkExp from "./WorkExp";
import Menus from "./Menus";
import Footer from "./Footer";
import Resource from "./Resource";
import Paintmain from "./Paint/Paintmain";

export default function Main() {
  const [MenuId, setMenuId] = useState("0");
  useEffect(() => {
    console.log({ MenuId });
  }, [MenuId]);

  return (
    <>
      <div className=" ">
        <Paintmain />
        <div className="my-2 pb-10"></div>
        <Head />
        <Menus setMenuId={setMenuId} selectedID={MenuId} />

        <div className="absolute">
          {MenuId === "0" && (
            <div className="mb-10 ">
              <About />
              <WorkExp />
              <Footer />
            </div>
          )}

          {MenuId === "1" && (
            <div className="">
              <Resource />
              <Footer />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
