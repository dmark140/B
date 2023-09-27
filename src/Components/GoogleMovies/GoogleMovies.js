import React from "react";
import MoviesCards from "./MoviesCards";

export default function GoogleMovies() {
  const Movies = [
    {
      cover:
        "https://m.media-amazon.com/images/M/MV5BZmI2OGEyZmYtNmVlZS00ODAyLTlmZTMtMDJiZjg1Zjg2MGRlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
      coverBig:
        "https://compote.slate.com/images/3fc4f9b4-fd68-4834-b497-eae73a5ef85c.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
    },
  ];

  return (
    <div className="text-white dark:text-black flex gap-x-2 ">
      <MoviesCards />
      <MoviesCards />
      <MoviesCards />
    </div>
  );
}
