import { useState } from "react";
import "./App.css";
import AppIndex from "./Components/AppIndex";
import { DarkMode, LightMode } from "@mui/icons-material";
import DeanSvg from "./Components/DeanSvg";

function App() {
  const [isDarkMode, setisDarkMode] = useState(true);
  const [darkMode, setDarkMode] = useState("black");
  document.body.style = `background: ${darkMode}; `;
  const changeMode = (e) => {
    console.log(darkMode);
    console.log(isDarkMode);
    const main = document.getElementById("kmskd");

    if (!isDarkMode) main.classList.remove(`dark`);
    if (isDarkMode) main.classList.add(`dark`);
    if (!isDarkMode) setDarkMode("black");
    if (isDarkMode) setDarkMode("white");
    setisDarkMode(!isDarkMode);
  };

  const UI_Mode = () => {
    return (
      <>
        <div
          className={
            isDarkMode
              ? `rounded-md   p-2 hover:bg-neutral-400`
              : ` rounded-md    p-2 hover:bg-neutral-400`
          }
        >
          <div className={isDarkMode ? `   DSAXA DASD` : `   DSAXA DASX`}></div>
          {!isDarkMode ? <DarkMode /> : <LightMode />}
        </div>
      </>
    );
  };
  return (
    <div id="kmskd" className="-m-0 -p-0 max-w-[512px] mx-auto">
      <div className="bg-black dark:bg-white fixed w-full ">
        <div className="justify-between flex max-w-[512px]    ">
          <div className="w-14 ">
            <DeanSvg isDark={isDarkMode} />
          </div>

          <button
            className="dark:text-black text-white mt-2  mr-2"
            onClick={changeMode}
          >
            <UI_Mode />
          </button>
        </div>
      </div>
      <div className="">
        <AppIndex />
      </div>
    </div>
  );
}

export default App;
