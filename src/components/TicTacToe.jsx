import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const newBoard = [...board];
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(winnerCombination);
    }
  }, [board]);

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    if (board[index] != null || winner != null) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!isXTurn);
    console.log(newBoard);
  };

  const checkWinner = (newBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <>
      <div className="board">
        <h1 id="level-title">Tic Tac Toe</h1>
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
        </div>{" "}
        {winner && (
          <div className="winner-text">
            <span className="winner">{winner}</span> is Winner of this Game.
            <button className="play-again-btn" onClick={reset}>
              Play Again
            </button>
          </div>
        )}
        {!board.includes(null) && !winner && (
          <div className="winner-text">
            Draw
            <button className="play-again-btn" onClick={reset}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
