import React from "react";

export default function Keyboard() {
  return (
    <div>
      <div>
        <button>Q</button>
        <button>W</button>
        <button>E</button>
        <button>R</button>
        <button>T</button>
        <button>Y</button>
        <button>U</button>
        <button>I</button>
        <button>O</button>
        <button>P</button>
      </div>
      <div>
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
      </div>
      <div>
        <button>ENTER</button>
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
        <button>
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
      </div>
    </div>
  );
}
