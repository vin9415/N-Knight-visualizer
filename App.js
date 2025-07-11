import React, { useState } from 'react';
import KnightVisualizer from './KnightVisualizer';

function App() {
  const [size, setSize] = useState(5);

  return (
    <div className="app">
      <h1>N-Knight Visualizer</h1>
      <label>
        Board Size (N): 
        <input
          type="number"
          min="4"
          max="10"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </label>
      <KnightVisualizer size={size} />
    </div>
  );
}

export default App;