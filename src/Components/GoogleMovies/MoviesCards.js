import React from "react";

export default function MoviesCards() {
  return (
    <div className=" relative h-40 w-28 bg-white   rounded-lg hover:w-56 transition-all">
      <div
        style={{
          background:
            ' URL("https://m.media-amazon.com/images/M/MV5BZmI2OGEyZmYtNmVlZS00ODAyLTlmZTMtMDJiZjg1Zjg2MGRlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg")',
          backgroundSize: "cover",
        }}
        className="rounded-md transitionx w-28 h-full z-10  "
      ></div>

      <div
        style={{
          background:
            ' URL("https://compote.slate.com/images/3fc4f9b4-fd68-4834-b497-eae73a5ef85c.jpeg?crop=1560%2C1040%2Cx0%2Cy0")',
          backgroundSize: "cover",
        }}
        className="rounded-md transitionx w-56 h-40   top-0 z-0  absolute opacity-0 hover:opacity-100"
      ></div>
    </div>
  );
}
