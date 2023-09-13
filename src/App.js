import { useState } from "react";
import "./App.css";
import AppIndex from "./Components/AppIndex";

function App() {
  const [darkMode, setDarkMode] = useState("black");
  document.body.style = `background: ${darkMode}`;
  return (
    <div className="-m-0 -p-0">
      <button className="text-white">Mode</button>
      <div className="app scale-90">
        <AppIndex />
      </div>
    </div>
  );
}

export default App;
