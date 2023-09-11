import React from "react";

import Main from "./Main";
import {
  Routes,
  Route,
  UNSAFE_NavigationContext as NavigationContext,
} from "react-router-dom";
export default function AppIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IMain />} />
      </Routes>
    </>
  );
}

function IMain() {
  return <Main />;
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
