import React, { useState, useEffect } from 'react';
import './index.css';

function isSafe(board, row, col, N) {
  const moves = [
    [-2, -1], [-2, 1],
    [-1, -2], [-1, 2],
    [1, -2], [1, 2],
    [2, -1], [2, 1],
  ];

  for (let [dx, dy] of moves) {
    let x = row + dx;
    let y = col + dy;
    if (x >= 0 && y >= 0 && x < N && y < N && board[x][y] === 1) {
      return false;
    }
  }
  return true;
}

function KnightVisualizer({ size }) {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoard = Array(size).fill(0).map(() => Array(size).fill(0));
    solveNKnights(newBoard, 0, size);
  }, [size]);

  function solveNKnights(board, knightsPlaced, N, row = 0, col = 0) {
    if (knightsPlaced === N) {
      setBoard([...board]);
      return true;
    }

    for (let i = row; i < N; i++) {
      for (let j = (i === row ? col : 0); j < N; j++) {
        if (isSafe(board, i, j, N)) {
          board[i][j] = 1;
          if (solveNKnights(board, knightsPlaced + 1, N, i, j + 1)) return true;
          board[i][j] = 0;
        }
      }
    }
    return false;
  }

  return (
    <div className="board">
      {board.map((row, i) =>
        row.map((cell, j) => (
          <div key={`${i}-${j}`} className={`cell ${cell ? 'knight' : ''}`}>
            {cell ? '♞' : ''}
          </div>
        ))
      )}
    </div>
  );
}

export default KnightVisualizer;