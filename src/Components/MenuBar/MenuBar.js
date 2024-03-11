import React, { useState } from "react";

export default function MenuBar(p) {
  const Menus = [
    {
      id: 0,
      label: "Feed",
    },
    {
      id: 1,
      label: "About Me",
    },
    {
      id: 2,
      label: "Hire Me",
    },
    {
      id: 3,
      label: "Links",
    },
  ];
  return (
    <div className="mt-4 mb-10">
      <div className="dark:text-black text-white flex">
        {Menus.map((e, i) => (
          <div
            onClick={(e) => p.setActiveBar(e.target.id)}
            key={i}
            id={i}
            className="cursor-pointer w-full hover:bg-[#ffffff3a] dark:hover:bg-[#0000001a]"
          >
            <div
              onClick={(e) => p.setActiveBar(e.target.id)}
              id={i}
              className={
                p.ActiveBar == i
                  ? "border-b-[5px] VASCA w-fit  py-1  mx-auto"
                  : "border-b-[5px] border-transparent w-fit  py-1  mx-auto"
              }
            >
              {e.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
