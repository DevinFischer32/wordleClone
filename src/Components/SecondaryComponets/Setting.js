import React from "react";
import { useDispatch } from "react-redux";
import "../../CSS/Setting.css";

export default function Setting(props) {
  const { resetBoard } = props;
  const dispatch = useDispatch();

  function settingDisplayFalse(e) {
    dispatch({ type: "changeSettingDisplay", payload: false });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="icons"></div>
        <h1 className="settingTitle">SETTING</h1>
        <div
          onClick={(e) => {
            settingDisplayFalse();
          }}
        >
          <svg
            className="icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>

      <div className="content">
        <h1>Dark Theme</h1>
        <div className="switchContainer">
          <div className="switch">
            <span className="knob"></span>
          </div>
        </div>

        <div
          className=""
          onClick={(e) => {
            resetBoard();
            setTimeout(() => {
              settingDisplayFalse();
            }, 500);
          }}
        >
          Reset Game {"\u27f3"}
        </div>
      </div>
    </div>
  );
}
