import { ArrowRight, NorthEast } from "@mui/icons-material";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function WorkExpComp(p) {
  const isDesktopOrLaptop = useMediaPredicate("(min-width: 800px)");

  return (
    <div>
      {isDesktopOrLaptop ? (
        <div className="  mt-5 GASDQ">
          <div>
            <p className=" text-Mute ">{p.year}</p>
          </div>
          <div className="ml-4">
            <p className="ml-2 text-Regular ">{p.title}</p>
            <a
              href={p.compLink}
              // target="_Blank"
              className="ml-2 text-PreMute HAQXSA text-sm"
            >
              {p.comp}
            </a>
            <p className="ml-2 text-Mute mt-2 ">{p.disc} </p>
            <div className="text-Mute mt-2 ">
              {p.tech.map((item, i) => (
                <>
                  <span className={"KSDAJ mx-2"}>{item.label}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={isDesktopOrLaptop && "invisible"}>
          <span className=" flex">
            <p href="#" className="text-PreMute ">
              {p.year}{" "}
            </p>
            <div className="text-Regular"> - {p.title}</div>
          </span>
          <div className="flex">
            <a
              href={p.compLink}
              // target="_Blank"
              className="ml-2 text-PreMute HAQXSA "
            >
              {p.comp}
              <NorthEast className="text-white font" />
            </a>
          </div>
          <div className="ml-6">
            <div className=" ">
              <div className="text-Mute flex">
                <ArrowRight className="text-white" />
                <div>{p.disc}</div>
              </div>
              <div className="text-Regular  flex flex-wrap ml-4">
                {p.tech.map((item, i) => (
                  <div className={"KSDAJ mx-2 relative"}>{item.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
