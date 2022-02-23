import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledLeaderboard } from "../Styles/Leaderboard.styled";
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
    <StyledLeaderboard>
      <div>
        <div></div>
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
      <div>
        <div>
          <h1>{gamesPlayed}</h1>
          <h1>Played</h1>
        </div>
        <div>
          <h1>{winPercent}</h1>
          <h1>Win %</h1>
        </div>
        <div>
          <h1>{currentStreak}</h1>
          <h1>Current</h1>
          <h1>Streak</h1>
        </div>
        <div>
          <h1>{maxStreak}</h1>
          <h1>Max</h1>
          <h1>Streak</h1>
        </div>
      </div>
      <div>graph</div>
    </StyledLeaderboard>
  );
}
