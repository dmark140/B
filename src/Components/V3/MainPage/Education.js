import React from "react";
import phinma from "./phinma.png";
export default function Education() {
  return (
    <div id="education">
      <h1 className="font-sans font-bold text-4xl TITLE  pb-5 ">Education</h1>

      <div className="flex">
        <img src={phinma} className="w-[120px] rounded-md mr-2" />
        <div className="-space-y-1 py-2">
          <p className="m-0 opacity-80 text-sm">Degree</p>
          <p className="m-0">Cagayan de Oro College, Cagayan de Oro</p>
          <br />
          <p className="m-0">BSIT, Computer Programming</p>
          <p className="m-0  opacity-80 ">2013-2017</p>
        </div>
      </div>
    </div>
  );
}
