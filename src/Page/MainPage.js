import React from "react";
import { useSelector } from "react-redux";
import GameBoard from "../Components/GameBoard";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";
import Leaderboard from "../Components/SecondaryComponets/Leaderboard";

export default function MainPage() {
  const leaderBoardDisplay = useSelector((state) => state.leaderBoardDisplay);

  return (
    <div>
      {leaderBoardDisplay === true ? (
        <>
          <Leaderboard />
          <Header />
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
