import "../CSS/Gameboard.css";
export default function GameBoard(props) {
  const { message, boardData, error } = props;

  return (
    <div>
      <div className="gameboard-container">
        <div className="tile">
          {[0, 1, 2, 3, 4, 5].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`tile-rows ${
                boardData &&
                row === boardData.rowIndex &&
                rowIndex &&
                error &&
                "error"
              }`}
            >
              {[0, 1, 2, 3, 4].map((column, letterIndex) => (
                <div
                  key={letterIndex}
                  className={`letters ${
                    boardData && boardData.boardRowStatus[row]
                      ? boardData.boardRowStatus[row][column]
                      : ""
                  } `}
                >
                  {boardData &&
                    boardData.boardWords[row] &&
                    boardData.boardWords[row][column]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {message && (
        <div className="overlay">
          <div className="message">{message}</div>
        </div>
      )}{" "}
    </div>
  );
}
