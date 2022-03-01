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
        <h1 className="settingTitle" style={{ fontWeight: "bold" }}>
          SETTING
        </h1>

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

      <div
        className="content reset"
        onClick={(e) => {
          resetBoard("giveUp");
          setTimeout(() => {
            settingDisplayFalse();
          }, 500);
        }}
      >
        <h1>Reset Game</h1>
        <h1 id="reset-icon">{"\u27f3"}</h1>
      </div>

      {/* <div className="content reset">
        <h1>Light Theme</h1>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content reset">
        <h1>High Contrast Mode</h1>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div> */}
    </div>
  );
}
