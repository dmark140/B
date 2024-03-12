import React from "react";

export default function About() {
  return (
    <>
      <h1 id="about" className="font-sans font-bold text-4xl TITLE  pb-5 ">
        About
      </h1>

      <p className="miniFadeIn text-PreMute text-white dark:text-black mt-1">
        Hi! <b>Dean</b> Here, Currently the Systems administrator of{" "}
        <a
          target="_blank"
          href="https://www.innovativepkg.com.ph/"
          className="font-bold XAAXX mr-1"
        >
          this
        </a>
        awesome company here at Valenzuela city manila, I’m an all around
        programmer handling things from planning to production , I like making
        dynamic and imaginative products from beginning to end. Dedicated to
        creating user-friendly experiences that continuously get better through
        user feedback.
      </p>
    </>
  );
}
