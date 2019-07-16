import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

function App() {
  const isActive = true;
  const headerColor = isActive ? "green" : "red";

  return React.createElement(
    "h1",
    { className: "whoa" },
    "WHOA",
    React.createElement("span", null, headerColor)
  );
}

export default App;
