import React from "react";
import WorkExpComp from "./WorkExpComp";

export default function WorkExp() {
  const Dot = () => {
    return <span className="text-mute text-xl">•</span>;
  };

  return (
    <div className="mt-10">
      <p className="text-Regular w-40">Work Experience</p>
      <WorkExpComp />
      <WorkExpComp />
      <WorkExpComp />
    </div>
  );
}
