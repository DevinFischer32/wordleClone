import React from "react";
import { useDispatch } from "react-redux";
import "../../CSS/Info.css";

export default function Info() {
  const dispatch = useDispatch();

  function helpDisplayFalse(e) {
    dispatch({ type: "changeHelpDisplay", payload: false });
  }
  return (
    <div className="container">
      <div className="header">
        <div className="icons"></div>
        <h1 className="settingTitle" style={{ fontWeight: "bold" }}>
          HOW TO PLAY
        </h1>
        <div
          onClick={(e) => {
            helpDisplayFalse();
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
      <div>
        <p className="info-h2p">
          Guess the <span style={{ fontWeight: "bold" }}>WORDLE</span> in six
          tries .
        </p>
        <p className="info-h2p">
          Each guess must be a valid five-letter word. Hit the enter button to
          submit .
        </p>
        <p className="info-h2p" id="last-h2p">
          After each guess, the color of the tiles will change to show how close
          your guess was to the word .
        </p>
      </div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Examples</h2>
        <div className="placeHolderTile">
          <div className="tileHolder" id="correctExample">
            W
          </div>
          <div className="tileHolder">E</div>
          <div className="tileHolder">A</div>
          <div className="tileHolder">R</div>
          <div className="tileHolder">Y</div>
        </div>
        <p>
          The letter <span style={{ fontWeight: "bold" }}>W</span> is in the
          word and in the correct spot .
        </p>
        <div className="placeHolderTile">
          <div className="tileHolder">P</div>
          <div className="tileHolder" id="wrongSpotExample">
            I
          </div>
          <div className="tileHolder">L</div>
          <div className="tileHolder">L</div>
          <div className="tileHolder">S</div>
        </div>
        <p>
          The letter <span style={{ fontWeight: "bold" }}>I</span> is in the
          word but in the wrong spot .
        </p>
        <div className="placeHolderTile">
          <div className="tileHolder">V</div>
          <div className="tileHolder">A</div>
          <div className="tileHolder">G</div>
          <div className="tileHolder" id="notIncludedExample">
            U
          </div>
          <div className="tileHolder">E</div>
        </div>
        <p id="last-example">
          The letter <span style={{ fontWeight: "bold" }}>U</span> is not in the
          word in any spot .
        </p>
      </div>
      <div>
        <h2>
          Play As many <span style={{ fontWeight: "bold" }}>WORDLES</span> As
          You Like .
        </h2>
      </div>
    </div>
  );
}
