import React from "react";

export default function WorkExpComp(p) {
  return (
    <div>
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
    </div>
  );
}
