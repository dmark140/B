import { useEffect, useState } from "react";
import "./App.css";
import AppIndex from "./Components/AppIndex";
// import "@fontsource/homemade-apple"; // Defaults to weight 400
import {
  DarkMode,
  LightMode,
  TerminalRounded,
  Verified,
} from "@mui/icons-material";
import DeanSvg from "./Components/DeanSvg";
import { DefMenus } from "./Components/Components";

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
  useEffect(() => {
    changeMode();
  }, []);

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
    <div id="kmskd" className="-m-0 -p-0 AXAA mx-auto">
      <div className="bg-black dark:bg-white   w-full ">
        <div className="relative justify-between   AXAA    ">
          {/* <div className="w-14 ">
            <DeanSvg isDark={isDarkMode} />
          </div> */}

          <button
            className="absolute -top-[0px] right-0 dark:text-black text-white   mr-2"
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
