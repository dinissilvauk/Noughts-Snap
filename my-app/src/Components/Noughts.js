import React, { useState } from "react";
import "./index.css";

const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

const Noughts = (props) => {
  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [score, setScore] = useState({ x: 0, o: 0 });

  const resetGame = () => {
    setWinner(null);
    setSquares(Array(9).fill(null));
    setXIsPlaying(true);
  };

  const checkForWinner = (squares) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (!squaresCopy[i] && !winner) {
      squaresCopy[i] = xIsPlaying ? "X" : "O";

      //check for winner
      const winner = checkForWinner(squaresCopy);
      if (winner) {
        setWinner(winner);
        setScore((prevScore) =>
          winner === "X"
            ? { ...prevScore, x: prevScore.x + 1 }
            : { ...prevScore, o: prevScore.o + 1 }
        );
      }
      setXIsPlaying(xIsPlaying ? false : true);
      setSquares(squaresCopy);
    } else {
      console.log("Occupied position");
    }
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          handleClick(i);
          console.log(`Button ${squares[i]} has been clicked`);
        }}
      />
    );
  };

  const status = `Next Player: ${xIsPlaying ? "X" : "Y"}`;

  return (
    <div className="game">
      <div className="game-board">
        <div>
          <div className="title">
            <h2 style={{ color: "white" }}>
              tic<span style={{ color: "red" }}>TAC</span>toe
            </h2>
          </div>
          <div className="scores">
            <div className="score x-score">
              <span style={{ fontSize: 13 }}>X</span>
              <div>{score.x}</div>
            </div>
            <div className="score o-score">
              <span style={{ fontSize: 13 }}>O</span>
              <div>{score.o}</div>
            </div>
          </div>
          <div className="status">{status}</div>
          {winner && <div className="winner">{`${winner} wins!`}</div>}
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>

          <div class="reset">
            <button class="reset-button" onClick={() => resetGame()}>
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noughts;
