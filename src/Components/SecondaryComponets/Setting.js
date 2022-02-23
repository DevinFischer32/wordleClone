import React from "react";
import { useDispatch } from "react-redux";
import { Styledsetting } from "../Styles/Settings.styled";

export default function Setting() {
  const dispatch = useDispatch();

  function settingDisplayFalse(e) {
    dispatch({ type: "changeSettingDisplay", payload: false });
  }

  return (
    <Styledsetting>
      <div className="container">
        <div className="header">
          <div></div>
          <h1>SETTING</h1>
          <div
            onClick={(e) => {
              settingDisplayFalse();
            }}
          >
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                fill="var(--color-tone-1)"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </div>
        </div>

        <div></div>
      </div>
    </Styledsetting>
  );
}
