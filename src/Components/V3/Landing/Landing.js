import React, { useState } from "react";
import profilex from "../../DeanPixelP.png";
import { Shades } from "../../Components";

export default function Landing() {
  const [showShades, setshowShades] = useState(false);
  return (
    <div className="dark:text-black text-white ">
      <div>
        <div className="flex">
          <div className="max-w-[413px] mt-4">
            <h1 className="font-sans font-bold text-4xl TITLE  ">Portfolio</h1>
            <h1 className=" font-sans font-semibold text-2xl mt-8 TITLE">
              Hello, I’m Deanmark Famoleras
            </h1>
            <br />
            Thank you for having the time <br />
            <br />
            I'm Currently the <b>Systems administrator </b> of
            <a
              target="_blank"
              href="https://www.innovativepkg.com.ph/"
              className="font-bold XAAXX mr-1"
            >
              this
            </a>
            awesome company here at Valenzuela city manila, I’m an all around
            programmer handling things from planning to production
            <br />
          </div>

          <div
            className="mt-4 min-w-[281px] max-w-[281px] relative cursor-pointer"
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
            <div className="mx-auto w-fit pr-4 text-sm italic">
              {!showShades ? "make me cool!" : " you rock!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
