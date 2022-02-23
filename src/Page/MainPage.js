import React from "react";
import { useSelector } from "react-redux";
import GameBoard from "../Components/GameBoard";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";
import Leaderboard from "../Components/SecondaryComponets/Leaderboard";
import "../CSS/Statistics.css";

export default function MainPage() {
  const leaderBoardDisplay = useSelector((state) => state.leaderBoardDisplay);

  return (
    <div>
      {leaderBoardDisplay === true ? (
        <>
          <Header />
          <div className="overlay">
            <Leaderboard />
          </div>
          <GameBoard />
          <Keyboard />
        </>
      ) : (
        <>
          <Header />
          <GameBoard />
          <Keyboard />
        </>
      )}
    </div>
  );
}
