import React from "react";
import autoLicense from "./autolicense.gif";
import A from "./A.svg";
import B from "./B.svg";
import AA from "./AA";
import BB from "./BB";
export default function About() {
  return (
    <div className="dark:text-black text-white ">
      
       <div className="text-3xl mb-2 font-bold">Kamusta! 👋</div>
      {/* Thank you for having the time to visit my Domain <br /> */}
      <b>Dean</b> Here, Currently the Systems administrator of{" "}
      <a
        target="_blank"
        href="https://www.innovativepkg.com.ph/"
        className="font-bold XAAXX mr-1"
      >
        this
      </a>
      awesome company here at Valenzuela city manila, I’m an all around
      programmer handling things from planning to production , I’m from
      Villanueva (Near at Cagayan de Oro city) but im now situated in Valenzuela
      city
      <br />
      <br />
      My tech stack at work are Reactjs, Tailwind , Node.js , Express , MSSQL,
      SAP B1 Service layer(uses RESTapi) SAP B1 SDK.
      <br />
      <br />
      Here is a memes that summarizes what I love about programming (who doesn’t
      love ‘em!?):
      <br />
      <img
        src="https://preview.redd.it/programmermove-v0-auaip6x4yuyb1.jpg?auto=webp&s=3931b4241e983f25d86806cff09f6367ddd099b1"
        className="profile mx-auto"
        alt=""
      />{" "}
      <br />
      I Love automating tasks, especially if your doing it over and over again.
      Here's One notable proceses that I've done , one on my task is giving
      license to users whenever they want to login on SAP B1 Instead I created a
      portal that lets the request license and will be manage by SAP B1(Add-on
      module)
      <br />
      <img src={autoLicense} className="profile" alt="" />
      <code className="italic text-[#ffffff9f]">
        Now I have more time to do other things!!
      </code>
      <br />
      <br />
      I’m also happiest when I’m making ideas happened , learning new things and
      thinking about how to make things better.
      <br />
      <br />
      Wow you made it here! Amazing !
      <div className="w-40 flex">
        <BB isDark={true} />
      </div>
      <br />
      thank you for dropping by!
      <div className="w-40 flex">
        <AA isDark={true} />
      </div>
      <br />
      Have an awesome day!
    </div>
  );
}
