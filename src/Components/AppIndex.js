import React from "react";

import Main from "./Main";
import {
  Routes,
  Route,
  UNSAFE_NavigationContext as NavigationContext,
} from "react-router-dom";
import GoogleMovies from "./GoogleMovies/GoogleMovies";
import Paintmain from "./Paint/Paintmain";
import LandPageHome from "./LandingPage/LandPageHome";
import MainPage from "./V3/MainPage/MainPage";
import HireMeA from "./V3/HireMe/HireMeA";
import LinksA from "./V3/Links/LinksA";
import Resumee from "./Resume/Resumee";
export default function AppIndex() {
  return (
    <>
      <Routes>
        {/* <Route path="/iresume" element={<ILandingPage />} /> */}
        {/* <Route path="/iresumev2" element={<IMainv2 />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/HireMe" element={<HireMe />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

{
  /* <Route path="/" element={<IMain />} />
        <Route path="/GoogleMovies" element={<IGoogleMovies />} />
        <Route path="/paint" element={<IPaintmain />} /> */
}

function IMain() {
  return <Main />;
}
function About() {
  return <MainPage />;
}

function HireMe() {
  return <HireMeA />;
}
function Resume() {
  return <Resumee />;
}
function Links() {
  // return <LinksA />;
  return <Main />;
}
function ILandingPage() {
  return <LandPageHome />;
}

function IGoogleMovies() {
  return <GoogleMovies />;
}

function IPaintmain() {
  return <Paintmain />;
}

/*.pie-chart {
	background:
		radial-gradient(
			circle closest-side,
			transparent 91%,
			white 0
		),
		conic-gradient(
			#4e79a7 0,
			#4e79a7 35.5%,
			#f28e2c 0,
			#f28e2c 57%,
			#e15759 0,
			#e15759 72%,
			#76b7b2 0,
			#76b7b2 81.3%,
			#59a14f 0,
			#59a14f 86.9%,
			#edc949 0,
			#edc949 93.4%,
			#af7aa1 0,
			#af7aa1 99.9%
	);
	position: relative;
	width: 500px;
	min-height: 350px;
	margin: 0;
	outline: 1px solid #ccc;
}*/
