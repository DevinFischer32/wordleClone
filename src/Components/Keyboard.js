import React, { useEffect } from "react";
import { keys } from "../Data/keys";
import "../CSS/Keyboard.css";

const Keyboard = ({ boardData, handleKeyPress }) => {
  let specialKey = "ENTER";
  let svgKey = "+";
  let specialKey2 = "space";

  function handleKeyboard(item) {
    if (item.key === "Enter") handleKeyPress("ENTER");
    if (item.key === "Backspace") handleKeyPress("+");
    if (
      item.key.length === 1 &&
      item.key.toLowerCase() !== item.key.toUpperCase()
    )
      handleKeyPress(item.key.toUpperCase());
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyPress]);

  return (
    <div id="keyboard-container">
      {keys.map((item, index) =>
        item === specialKey ? (
          <button
            key={index}
            className="keys keys_xl"
            onClick={() => {
              handleKeyPress(item);
            }}
          >
            {item}
          </button>
        ) : item === specialKey2 ? (
          <div className="keys_space" key={index}></div>
        ) : item === svgKey ? (
          <button
            key={index}
            className="keys keys_xl"
            onClick={() => {
              handleKeyPress(item);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                fill="var(--color-tone-1)"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            key={index}
            className={`${
              boardData && boardData.correctCharArray.includes(item)
                ? "keys correct"
                : boardData && boardData.presentCharArray.includes(item)
                ? "keys present"
                : boardData && boardData.absentCharArray.includes(item)
                ? "keys wrong"
                : "keys"
            }`}
            onClick={() => {
              handleKeyPress(item);
            }}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};

export default Keyboard;
