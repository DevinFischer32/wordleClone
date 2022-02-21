import React, { useState } from "react";
import "./CSS/Reset.css";
import "./CSS/App.css";
import MainPage from "./Page/MainPage";
import Info from "./Components/Info";

function App() {
  const [info, setInfo] = useState(false);

  return (
    <div className="App">
      {info ? <Info setInfo={setInfo} /> : <MainPage setInfo={setInfo} />}
    </div>
  );
}

export default App;
