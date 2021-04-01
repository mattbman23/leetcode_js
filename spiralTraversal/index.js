// Write a function that accepts a 2-dimensional array, and prints out every value found, but in a spiral from the upper-left, into the center.

// example input:
const dummyInput = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// example ouput:
// [1, 2, 3, 4, 5, 10, 15,
//     20, 25, 24, 23, 22, 21,
//     16, 11, 6, 7, 8, 9, 14,
//     19, 18, 17, 12, 13]

const spiralOrder = (matrix) => {
  if (!matrix.length) return [];

  let result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (result.length < matrix.length * matrix[0].length) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][rowStart]);
      }
      colStart++;
    }
  }

  return result;
};

console.log(spiralOrder(dummyInput));
