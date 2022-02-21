import React from "react";
import GameBoard from "../Components/GameBoard";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";

export default function MainPage(props) {
  const { setInfo } = props;
  return (
    <div>
      <Header setInfo={setInfo} />
      <GameBoard />
      <Keyboard />
    </div>
  );
}
