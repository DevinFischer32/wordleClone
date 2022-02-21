import React from "react";
import "../CSS/Info.css";

export default function Info(props) {
  const { setInfo } = props;
  return (
    <div id="Info_container">
      <div id="Info_header">
        <div></div>
        <h1>HOW TO PLAY</h1>
        <div
          onClick={(e) => {
            setInfo(false);
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
        <p>Guess the WORDLE in six tries.</p>
        <p>
          Each guess must be a valid five-letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
      </div>
      <div>
        <h2>Examples</h2>
        <p>The letter W is in the word and in the correct spot.</p>
        <p>The letter I is in the word but in the wrong spot.</p>
        <p>The letter U is not in the word in any spot.</p>
      </div>
      <div>
        <h2>Play As many WORLDES As You Like.</h2>
      </div>
    </div>
  );
}
