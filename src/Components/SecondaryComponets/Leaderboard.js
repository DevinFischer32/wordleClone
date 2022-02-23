import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux Stuff

export default function Leaderboard() {
  const gamesPlayed = useSelector((state) => state.gamesPlayed);
  const winPercent = useSelector((state) => state.winPercent);
  const currentStreak = useSelector((state) => state.currentStreak);
  const maxStreak = useSelector((state) => state.maxStreak);

  const dispatch = useDispatch();
  function leaderboardDisplayFalse(e) {
    dispatch({ type: "changeLeaderboardDisplay", payload: false });
  }
  return (
    <div className="leaderboard">
      <div className="header">
        <div className="icons spacing"></div>
        <h1>STATISTICS</h1>
        <div
          onClick={(e) => {
            leaderboardDisplayFalse();
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
      <div className="win-container spacing">
        <div className="column">
          <h1 className="font_m">{gamesPlayed}</h1>
          <h1 className="font_s">Played</h1>
        </div>
        <div className="column">
          <h1 className="font_m">{winPercent}</h1>
          <h1 className="font_s">Win %</h1>
        </div>
        <div className="column">
          <h1 className="font_m">{currentStreak}</h1>
          <h1 className="font_s">Current</h1>
          <h1 className="font_s">Streak</h1>
        </div>
        <div className="column">
          <h1 className="font_m">{maxStreak}</h1>
          <h1 className="font_s">Max</h1>
          <h1 className="font_s">Streak</h1>
        </div>
      </div>
      <div className="spacing">GUESS DISTRIBUTION</div>
    </div>
  );
}
