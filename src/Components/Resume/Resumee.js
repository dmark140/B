import React from "react";
import iResume from "./DeanResume.pdf";
export default function Resumee() {
  return (
    <div>
      <embed src={iResume} className="left-0 top-0 fixed w-full h-[100vh]" />
    </div>
  );
}
