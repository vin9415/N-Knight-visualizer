export function solveNKnights(N) {
  const board = Array.from({ length: N }, () => Array(N).fill(false));
  const result = [];

  const isSafe = (row, col) => {
    const moves = [
      [-2, -1], [-1, -2], [-2, 1], [-1, 2],
      [1, -2], [2, -1], [1, 2], [2, 1]
    ];
    return moves.every(([dr, dc]) => {
      const r = row + dr, c = col + dc;
      return r < 0 || r >= N || c < 0 || c >= N || !board[r][c];
    });
  };

  const backtrack = (row = 0, knights = 0) => {
    if (knights === N) {
      const sol = [];
      for (let r = 0; r < N; r++)
        for (let c = 0; c < N; c++)
          if (board[r][c]) sol.push([r, c]);
      result.splice(0, result.length, ...sol);
      return true;
    }
    for (let r = row; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!board[r][c] && isSafe(r, c)) {
          board[r][c] = true;
          if (backtrack(r, knights + 1)) return true;
          board[r][c] = false;
        }
      }
    }
    return false;
  };

  backtrack();
  return result;
}
