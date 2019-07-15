import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState("JS is cool!");

  function handleClick() {
    setMessage("my new message");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
