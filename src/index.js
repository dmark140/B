import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

// document.body.style = "background: black;";

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <div className="fadeIn fixed top-0 left-0  w-screen h-screen z-50 "></div>
    <div className="fadeIn fixed bottom-0  right-0  w-screen h-screen z-50"></div> */}
    <div className="main">
      <App />
    </div>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
