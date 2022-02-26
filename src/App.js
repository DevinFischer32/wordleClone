import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainPage from "./Page/MainPage";
import Info from "./Components/SecondaryComponets/Info";
import Setting from "./Components/SecondaryComponets/Setting";
import { wordList } from "./Data/wordList";

function App() {
  const [boardData, setBoardData] = useState(
    JSON.parse(localStorage.getItem("board-data"))
  );
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [charArray, setCharArray] = useState([]);
  const settingDisplay = useSelector((state) => state.settingDisplay);
  const helpDisplay = useSelector((state) => state.helpDisplay);

  const resetBoard = () => {
    let alphabetIndex = Math.floor(Math.random() * 26);
    let wordIndex = Math.floor(
      Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length
    );
    let newBoardData = {
      ...boardData,
      solution: wordList[String.fromCharCode(97 + alphabetIndex)][wordIndex],
      rowIndex: 0,
      boardWords: [],
      boardRowStatus: [],
      presentCharArray: [],
      absentCharArray: [],
      correctCharArray: [],
      status: "IN_PROGRESS",
    };
    setBoardData(newBoardData);
    localStorage.setItem("board-data", JSON.stringify(newBoardData));
  };

  useEffect(() => {
    if (!boardData || !boardData.solution) {
      let alphabetIndex = Math.floor(Math.random() * 26);
      let wordIndex = Math.floor(
        Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length
      );
      let newBoardData = {
        ...boardData,
        solution: wordList[String.fromCharCode(97 + alphabetIndex)][wordIndex],
        rowIndex: 0,
        boardWords: [],
        boardRowStatus: [],
        presentCharArray: [],
        absentCharArray: [],
        correctCharArray: [],
        status: "IN_PROGRESS",
      };
      setBoardData(newBoardData);
      localStorage.setItem("board-data", JSON.stringify(newBoardData));
    }
  }, [boardData]);

  const handleMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const enterBoardWord = (word) => {
    let boardWords = boardData.boardWords;
    let boardRowStatus = boardData.boardRowStatus;
    let solution = boardData.solution;
    let presentCharArray = boardData.presentCharArray;
    let absentCharArray = boardData.absentCharArray;
    let correctCharArray = boardData.correctCharArray;
    let rowIndex = boardData.rowIndex;
    let status = boardData.status;
    let rowStatus = [];
    let matchCount = 0;

    for (let i = 0; i < word.length; i++) {
      if (solution.charAt(i) === word.charAt(i)) {
        matchCount++;
        rowStatus.push("correct");
        if (!correctCharArray.includes(word.charAt(i)))
          correctCharArray.push(word.charAt(i));
        if (presentCharArray.indexOf(word.charAt(i)) !== -1)
          presentCharArray.splice(presentCharArray.indexOf(word.charAt(i)), 1);
      } else if (solution.includes(word.charAt(i))) {
        rowStatus.push("present");
        if (
          !correctCharArray.includes(word.charAt(i)) &&
          !presentCharArray.includes(word.charAt(i))
        )
          presentCharArray.push(word.charAt(i));
      } else {
        rowStatus.push("absent");
        if (!absentCharArray.includes(word.charAt(i)))
          absentCharArray.push(word.charAt(i));
      }
    }

    if (matchCount === 5) {
      status = "WIN";
      handleMessage("You Won");
      setTimeout(() => {
        resetBoard();
      }, 4500);
    } else if (rowIndex + 1 === 6) {
      status = "LOST";
      handleMessage(boardData.solution);
      setTimeout(() => {
        resetBoard();
      }, 4500);
    }
    boardRowStatus.push(rowStatus);
    boardWords[rowIndex] = word;
    let newBoardData = {
      ...boardData,
      boardWords: boardWords,
      boardRowStatus: boardRowStatus,
      rowIndex: rowIndex + 1,
      status: status,
      presentCharArray: presentCharArray,
      correctCharArray: correctCharArray,
      absentCharArray: absentCharArray,
    };
    setBoardData(newBoardData);
    localStorage.setItem("board-data", JSON.stringify(newBoardData));
  };

  const enterCurrentText = (word) => {
    let boardWords = boardData.boardWords;
    let rowIndex = boardData.rowIndex;
    boardWords[rowIndex] = word;
    let newBoardData = { ...boardData, boardWords: boardWords };
    setBoardData(newBoardData);
  };

  const handleKeyPress = (item) => {
    if (boardData.rowIndex > 5 || boardData.status === "WIN") return;
    if (item === "ENTER") {
      if (charArray.length === 5) {
        let word = charArray.join("").toLowerCase();
        if (!wordList[word.charAt(0)].includes(word)) {
          handleError();
          handleMessage("Not In Word List");
          return;
        }
        enterBoardWord(word);
        setCharArray([]);
      } else {
        handleMessage("Not enough letters");
      }
      return;
    }
    if (item === "+") {
      charArray.splice(charArray.length - 1, 1);
      setCharArray([...charArray]);
    } else if (charArray.length < 5) {
      charArray.push(item);
      setCharArray([...charArray]);
    }
    enterCurrentText(charArray.join("").toLowerCase());
  };

  return (
    <div className="App">
      {helpDisplay === true ? (
        <Info />
      ) : settingDisplay === true ? (
        <Setting resetBoard={resetBoard} />
      ) : (
        <MainPage
          error={error}
          message={message}
          boardData={boardData}
          handleKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
}

export default App;
