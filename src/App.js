import React from "react";
import { useSelector } from "react-redux";
import "./CSS/Reset.css";
import "./CSS/App.css";
import MainPage from "./Page/MainPage";
import Info from "./Components/SecondaryComponets/Info";
import Setting from "./Components/SecondaryComponets/Setting";

function App() {
  const settingDisplay = useSelector((state) => state.settingDisplay);
  const helpDisplay = useSelector((state) => state.helpDisplay);

  return (
    <div className="App">
      {helpDisplay === true ? (
        <Info />
      ) : settingDisplay === true ? (
        <Setting />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
