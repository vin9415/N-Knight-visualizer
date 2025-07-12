import React, { useState } from "react";
import { solveNKnights } from "../algorithms/nKnightSolver";

const Chessboard = () => {
  const [size, setSize] = useState(5);
  const [solution, setSolution] = useState([]);

  const handleVisualize = () => {
    const result = solveNKnights(size);
    setSolution(result);
  };

  return (
    <div>
      <h2>Set Board Size (N):</h2>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        min="1"
        max="10"
        style={{ padding: "6px", marginRight: "10px" }}
      />
      <button onClick={handleVisualize}>Visualize</button>

      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 40px)`,
          marginTop: "20px",
          gap: "2px",
          justifyContent: "center"
        }}
      >
        {Array.from({ length: size * size }, (_, i) => {
          const row = Math.floor(i / size);
          const col = i % size;
          const isKnight = solution.some(([r, c]) => r === row && c === col);

          return (
            <div
              key={`${row}-${col}`}
              className={`cell ${isKnight ? "knight" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chessboard;
