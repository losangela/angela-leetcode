/*

Lattice paths
Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

https://projecteuler.net/project/images/p015.png

How many such routes are there through a 20×20 grid?

*/

const allRoutes = (m, n) => {
  let matrix = [];

  for (let i = 0; i < m; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      let above = i - 1 > -1 ? matrix[i-1][j] : 1;
      let left = matrix[i][j-1] || 1;
      matrix[i][j] = above + left;
    }
  }
  return matrix[m-1][n-1]
}

console.log(allRoutes(20, 20))