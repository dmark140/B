import { ArrowRight, NorthEast, Terminal } from "@mui/icons-material";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function WorkExpComp(p) {
  const isDesktopOrLaptop = useMediaPredicate("(min-width: 500px)");

  return (
    <div>
      {isDesktopOrLaptop ? (
        <div className=" miniFadeIn text-white dark:text-black   mt-5 GASDQ">
          <div>
            <p className=" miniFadeIn text-white dark:text-black  text-Mute ">
              {p.year}
            </p>
          </div>
          <div className=" miniFadeIn text-white dark:text-black ml-4">
            <p className=" miniFadeIn text-white dark:text-black ml-2 text-Regular ">
              {p.title}
            </p>
            <a
              href={p.compLink}
              // target="_Blank"
              className=" miniFadeIn text-white dark:text-black ml-2 text-PreMute HAQXSA text-sm"
            >
              {p.comp}
            </a>
            <span className=" miniFadeIn text-white dark:text-black flex -ml-6 my-2">
              <ArrowRight className=" miniFadeIn  dark:text-black text-white " />
              <p className=" miniFadeIn text-white dark:text-black ml-2 text-Mute  ">
                {p.disc}{" "}
              </p>
            </span>
            <div className=" miniFadeIn text-white dark:text-black flex">
              <Terminal className=" miniFadeIn  dark:text-black text-white -ml-6 scale-75" />

              <div className=" miniFadeIn text-white dark:text-black text-Mute  flex flex-wrap -ml-2">
                {p.tech.map((item, i) => (
                  <div className={"KSDAJ mx-2 relative"}>{item.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={isDesktopOrLaptop && "invisible mb-4"}>
          <span className=" miniFadeIn text-white dark:text-black  flex">
            <p
              href="#"
              className=" miniFadeIn text-white dark:text-black text-Mute whitespace-nowrap"
            >
              {p.year}{" "}
            </p>
          </span>
          <div className=" miniFadeIn text-white dark:text-black text-Regular">
            {" "}
            {p.title}
          </div>
          <div className=" miniFadeIn text-white dark:text-black flex">
            <a
              href={p.compLink}
              // target="_Blank"
              className=" miniFadeIn text-white dark:text-black  text-Regular HAQXSA text-sm "
            >
              {p.comp}
              <NorthEast className=" miniFadeIn  dark:text-black text-white scale-75" />
            </a>
          </div>
          <div className=" miniFadeIn text-white dark:text-black ">
            <div className=" miniFadeIn text-white dark:text-black  mt-2">
              <div className=" miniFadeIn text-white dark:text-black text-Mute flex">
                <ArrowRight className=" miniFadeIn   dark:text-black text-white -ml-6" />
                <div>{p.disc}</div>
              </div>
              <div className=" miniFadeIn text-white dark:text-black flex">
                <Terminal className=" miniFadeIn   dark:text-black text-white -ml-6 scale-75" />

                <div className=" miniFadeIn text-white dark:text-black text-Mute  flex flex-wrap -ml-2">
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
