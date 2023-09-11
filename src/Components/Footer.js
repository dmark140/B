import {
  Facebook,
  FeaturedPlayList,
  GitHub,
  LinkedIn,
  List,
  NorthEast,
} from "@mui/icons-material";
import React from "react";

export default function Footer() {
  const Comp = [
    {
      icon: GitHub,
      title: "GitHub",
      link: "https://github.com/dmark140",
      linkLabel: "github.com/dmark140",
    },
    {
      icon: Facebook,
      title: "FaceBook",
      link: "#",
      linkLabel: "CodeWithDean",
    },
    {
      icon: LinkedIn,
      title: "LinkedIn",
      link: "https://linkedin.com/in/dfamoleras",
      linkLabel: "dfamoleras",
    },
    {
      icon: FeaturedPlayList,
      title: "Resume",
      link: "#",
      linkLabel: "View Here!",
    },
  ];

  return (
    <div>
      <div className=" mt-20 ">
        <p className="miniFadeIn text-Regular mb-2" id="link">
          Links
        </p>
        {Comp.map((item, index) => (
          <div className="flex " id={index}>
            <span className="flex items-center">
              <item.icon className="miniFadeIn text-white scale-75" />
              <p className="miniFadeIn text-Mute mr-10 w-20">{item.title}</p>
            </span>
            <a
              // target="_blank"
              className="miniFadeIn text-Regular HAQXSA miniFadeIn text-white"
              href={item.link}
            >
              {item.linkLabel}
            </a>
            <NorthEast className="miniFadeIn text-white scale-75 font-bold" />
          </div>
        ))}
      </div>
    </div>
  );
}
