import React from "react";
import "../CSS/Keyboard.css";

export default function Keyboard() {
  return (
    <div id="keyboard_container">
      <button className="keys" data-key="Q">
        Q
      </button>
      <button className="keys" data-key="W">
        W
      </button>
      <button className="keys" data-key="E">
        E
      </button>
      <button className="keys" data-key="R">
        R
      </button>
      <button className="keys" data-key="T">
        T
      </button>
      <button className="keys" data-key="Y">
        Y
      </button>
      <button className="keys" data-key="U">
        U
      </button>
      <button className="keys" data-key="I">
        I
      </button>
      <button className="keys" data-key="O">
        O
      </button>
      <button className="keys" data-key="P">
        P
      </button>
      <div className="space"></div>
      <button className="keys" data-key="A">
        A
      </button>
      <button className="keys" data-key="S">
        S
      </button>
      <button className="keys" data-key="D">
        D
      </button>
      <button className="keys" data-key="F">
        F
      </button>
      <button className="keys" data-key="G">
        G
      </button>
      <button className="keys" data-key="H">
        H
      </button>
      <button className="keys" data-key="J">
        J
      </button>
      <button className="keys" data-key="K">
        K
      </button>
      <button className="keys" data-key="L">
        L
      </button>
      <div className="space"></div>
      <button className="keys keys_xl">ENTER</button>
      <button className="keys" data-key="Z">
        Z
      </button>
      <button className="keys" data-key="X">
        X
      </button>
      <button className="keys" data-key="C">
        C
      </button>
      <button className="keys" data-key="V">
        V
      </button>
      <button className="keys" data-key="B">
        B
      </button>
      <button className="keys" data-key="N">
        N
      </button>
      <button className="keys" data-key="M">
        M
      </button>
      <button className="keys keys_xl">
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
  );
}
