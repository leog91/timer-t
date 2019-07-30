import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import History from "./components/History/History";

function App() {
  return (
    <div className="App">
      <Timer />
      <History />
    </div>
  );
}

export default App;
