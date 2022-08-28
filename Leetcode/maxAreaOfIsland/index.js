var maxAreaOfIsland = function(grid) {
  let max = 0;
  const countArea = (i, j) => {
      let count = grid[i][j];
      grid[i][j] = 0;
      if (grid[i][j+1]) {// right
          count += countArea(i, j+1);
      }
      if (i+1 < grid.length && grid[i+1][j])// down
          count += countArea(i+1, j);
      if (j > 0 && grid[i][j-1]) {// left
          count += countArea(i, j-1);
      }
      if (i > 0 && grid[i-1][j]) {// up
          count += countArea(i-1, j);
      }
      return count;
  };
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              max = Math.max(max,countArea(i, j));
          }
      }
  }
  return max;
};
