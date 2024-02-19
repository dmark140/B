import { useState } from "react";
import "./App.css";
import AppIndex from "./Components/AppIndex";
import { DarkMode, LightMode } from "@mui/icons-material";

function App() {
  // const [isDarkMode, setisDarkMode] = useState();
  // const [darkMode, setDarkMode] = useState("black");
  // document.body.style = `background: ${darkMode};
  //                         transition:  0.5s; `;
  // const changeMode = (e) => {
  //   console.log(darkMode);
  //   const main = document.getElementById("kmskd");

  //   if (isDarkMode) main.classList.remove(`dark`);
  //   if (!isDarkMode) main.classList.add(`dark`);
  //   if (isDarkMode) setDarkMode("black");
  //   if (!isDarkMode) setDarkMode("white");
  //   setisDarkMode(!isDarkMode);
  // };

  // const UI_Mode = () => {
  //   return (
  //     <>
  //       <div
  //         className={
  //           isDarkMode
  //             ? `rounded-full scale-90 bg-black`
  //             : ` rounded-full scale-90 bg-white  `
  //         }
  //       >
  //         <div className={isDarkMode ? `   DSAXA DASD` : `   DSAXA DASX`}>
  //           {" ☺"}
  //         </div>
  //         <DarkMode />
  //         <LightMode />
  //       </div>
  //     </>
  //   );
  // };
  return (
    <div id="kmskd" className="-m-0 -p-0">
      {/* <button className="text-black dark:text-white mt-2" onClick={changeMode}>
        <UI_Mode />
      </button> */}
      <div className="">
        <AppIndex />
      </div>
    </div>
  );
}

export default App;
