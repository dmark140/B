import React from "react";

export default function Feed() {
  const feedList = [
    {
      feeling: "Feeling Cool",
      heading: "",
      label: "",
      links: "",
      img: "",
    },
  ];
  return (
    <div className="mt-2">
      <div className="dark:text-black text-white flex">
        <div className=" max-w-[40px] max-h-[40px] bg-[#c3c3c3]  rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
            className="rounded-full "
          />
        </div>

        <div className="ml-2">
          <div className="font-semibold text-sm">
            Dean ⚡ •{" "}
            <span className="text-[#ffffff9c] dark:text-[#0000009c]">
              20 Jan 2024
            </span>
          </div>
          <div className="rounded-full bg-[#ffffff5e] w-fit px-2 text-sm font-semibold">
            💥 Feelin' Hiped
          </div>
          <div className="font-bold text-xl">{"<Hello World!/>"}</div>
          <div className="PRHP mt-1">
            Welcome to my digital hub! Through website I'll be sharing updates
            on my activities and provide guidance on coding.
          </div>
        </div>
      </div>
    </div>
  );
}
