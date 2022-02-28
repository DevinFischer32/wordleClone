import React from "react";
import { useSelector } from "react-redux";
import GameBoard from "../Components/GameBoard";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";
import Leaderboard from "../Components/SecondaryComponets/Leaderboard";
import "../CSS/Statistics.css";

export default function MainPage(props) {
  const { message, boardData, handleKeyPress, row, rowIndex, statData } = props;
  const leaderBoardDisplay = useSelector((state) => state.leaderBoardDisplay);

  return (
    <div>
      {leaderBoardDisplay === true ? (
        <>
          <Header />
          <div className="overlay">
            <Leaderboard statData={statData} />
          </div>
          <GameBoard
            row={row}
            rowIndex={rowIndex}
            message={message}
            boardData={boardData}
          />
          <Keyboard handleKeyPress={handleKeyPress} boardData={boardData} />
        </>
      ) : (
        <>
          <Header />
          <GameBoard
            message={message}
            boardData={boardData}
            row={row}
            rowIndex={rowIndex}
          />
          <Keyboard handleKeyPress={handleKeyPress} boardData={boardData} />
        </>
      )}
    </div>
  );
}
