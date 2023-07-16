// Leetcode Problem - 304

var NumMatrix = function (matrix) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  this.sumMatrix = Array.from({ length: rows + 1 }, () =>
    new Array(cols + 1).fill(0)
  );

  for (let r = 0; r < rows; r++) {
    let prefix = 0;
    for (let c = 0; c < cols; c++) {
      prefix += matrix[r][c];
      let above = this.sumMatrix[r][c + 1];
      this.sumMatrix[r + 1][c + 1] = prefix + above;
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const [r1, c1, r2, c2] = [row1 + 1, col1 + 1, row2 + 1, col2 + 1];
  const bottomRight = this.sumMatrix[r2][c2];
  const above = this.sumMatrix[r1 - 1][c2];
  const left = this.sumMatrix[r2][c1 - 1];
  const topLeft = this.sumMatrix[r1 - 1][c1 - 1];

  return bottomRight - above - left + topLeft;
};

matrix = [
  [2, 3, 1],
  [4, 3, 5],
  [5, 3, 6],
];
console.log(NumMatrix(matrix));
