module.exports = function initializeMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows.length; i += 1) {
    matrix.push(Array(cols.length).fill(0));
  }

  return matrix;
};
