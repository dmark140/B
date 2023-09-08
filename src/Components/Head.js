import React from "react";
export default function Head() {
  return (
    <>
      <div className="flex hghasdx grid-cols-2  ml-4 mb-2">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
            className="profile"
            alt=""
          />
        </div>
        <div>
          <p className="text-Regular p-0 -m-0 text-xl">Deanmark Famoleras</p>
          <p className="text-PreMute p-0 -m-0  text-sm">
            Innovation focused Systems Admin
          </p>
          <a href="#" className="text-Mute p-0 -m-0  text-sm">
            @CodeWithDean
          </a>
        </div>
      </div>
      {/* <div className="flex gap-x-2">
        <div className="flex hghasdx">
          <Cake className="icon" />
          <p className="text-PreMute text-sm"> Aug 13, 1996</p>
        </div>

        <div className="flex hghasdx">
          <PinDrop className="icon" />
          <p className="text-PreMute text-sm"> Aug 13, 1996</p>
        </div>
      </div> */}
    </>
  );
}
