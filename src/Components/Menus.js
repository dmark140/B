import { Home, Inventory, NorthEast, Work } from "@mui/icons-material";
import React from "react";

export default function Menus(p) {
  const comp = [
    {
      icon: Inventory,
      label: "Experience",
      link: "#PandR",
    },
    {
      icon: Work,
      label: "Resources",
      link: "#exp",
    },
  ];
  const MenuSelectionHandler = (e) => {
    const { name } = e.target;
    console.log(e);
    p.setMenuId(e.target.id);
  };

  const Btn = (p) => {
    return (
      <>
        <span>
          <p.icon className="text-white scale-75 -mt-0.5" />
        </span>
        <span>{p.label}</span>
      </>
    );
  };
  return (
    <div>
      <div className="my-2 gap-2 flex absolute ml-2">
        {comp.map((item, index) => (
          <div key={index} className="mr-2 whitespace-nowrap">
            <button
              id={index}
              href={item.link}
              className={index == p.selectedID ? " HAQXSA HAQXSAx" : " HAQXSA "}
              onClick={MenuSelectionHandler}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className=" mb-10">x</div>
    </div>
  );
}
