import React, { useState } from "react";
import profilex from "../../DeanPixelP.png";
import { DefButton, Shades } from "../../Components";
import { AdsClick } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();
  const useNavex = (e) => {
    nav("/Resume");
  };
  const [showShades, setshowShades] = useState(false);
  return (
    <div
      id="start"
      className="dark:text-black text-white scale-[0.75] sm:scale-100 "
    >
      <div>
        <div className="flex w-[512px] mx-auto">
          <div className="max-w-[413px] mt-4">
            <h1 className="font-sans font-bold text-5xl TITLE  ">
              {" "}
              Hello, I’m Deanmark Famoleras
            </h1>
            {/* <h1 className=" font-sans font-semibold text-2xl mt-8 TITLE">
              Hello, I’m Deanmark Famoleras
            </h1> */}
            {/* <br />
            Thank you for having the time <br />
            <br />
            I'm Currently the <b>Systems administrator </b> of
            <a
              target="_blank"
              href="https://www.innovativepkg.com.ph/"
              className="font-bold  mr-1"
            >
              {" this "}
            </a>
            awesome company here at Valenzuela city manila, I’m an all around
            programmer handling things from planning to production
            <br /> */}
            <div className=" font-semibold mt-2 pt-2 text-xl pb-2">
              Experienced{" "}
              <span className="font-bold">full-stack developer</span>{" "}
              specializing in{" "}
              <span className="font-bold">back-end development</span>
            </div>
          </div>

          <div
            className=" min-w-[281px] max-w-[281px] relative cursor-pointer"
            onClick={() => {
              setshowShades(!showShades);
            }}
          >
            <img
              src={profilex}
              //   src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
              className="rounded-md rounded-r-none "
            />
            {showShades && (
              <>
                <div className="absolute w-[23px] h-[15px] rounded-xl top-[133px] left-[160px] bg-white "></div>
                <div className="absolute w-[30px] h-[15px] rounded-bl-xl top-[133px] left-[105px] bg-white "></div>
                <Shades className="" />
              </>
            )}
            <div className="mx-auto w-fit pr-4 text-sm italic ">
              {!showShades ? (
                <>
                  <span>
                    make me cool! <span className="not-italic">😎</span>
                  </span>
                  <span className="text-xs -mt-1 w-fit mx-2">click me</span>
                </>
              ) : (
                " you rock!"
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="gap-2 flex mt-10 mx-auto w-fit">
          <DefButton label="Download CV" onClick={useNavex} />
          <a
            href="#contact"
            className="rounded-md p-2 px-2.5 text-black dark:text-white dark:bg-black bg-white AXASV "
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
