import { ArrowRight, NorthEast, Terminal } from "@mui/icons-material";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function WorkExpComp(p) {
  const isDesktopOrLaptop = useMediaPredicate("(min-width: 400px)");

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
            <span className="flex -ml-6 my-2">
              <ArrowRight className="text-white " />
              <p className="ml-2 text-Mute  ">{p.disc} </p>
            </span>
            <div className="flex">
              <Terminal className="text-white -ml-6 scale-75" />

              <div className="text-Mute  flex flex-wrap -ml-0.5">
                {p.tech.map((item, i) => (
                  <div className={"KSDAJ mx-2 relative"}>{item.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={isDesktopOrLaptop && "invisible mb-4"}>
          <span className=" flex">
            <p href="#" className="text-Mute whitespace-nowrap">
              {p.year}{" "}
            </p>
          </span>
          <div className="text-Regular"> {p.title}</div>
          <div className="flex">
            <a
              href={p.compLink}
              // target="_Blank"
              className=" text-Regular HAQXSA text-sm "
            >
              {p.comp}
              <NorthEast className="text-white scale-75" />
            </a>
          </div>
          <div className="">
            <div className=" mt-2">
              <div className="text-Mute flex">
                <ArrowRight className="text-white -ml-6" />
                <div>{p.disc}</div>
              </div>
              <div className="flex">
                <Terminal className="text-white -ml-6 scale-75" />

                <div className="text-Mute  flex flex-wrap -ml-2">
                  {p.tech.map((item, i) => (
                    <div className={"KSDAJ mx-2 relative"}>{item.label}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
