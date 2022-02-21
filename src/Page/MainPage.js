import React from "react";
import GameBoard from "../Components/GameBoard";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";

export default function MainPage() {
  return (
    <div>
      <Header />
      <GameBoard />
      <Keyboard />
    </div>
  );
}
