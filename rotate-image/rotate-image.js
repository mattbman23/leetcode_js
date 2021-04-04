/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {    
    for (let i = 0; i < matrix.length; i++) {
        for (let k = i; k < matrix.length; k++) {
            [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]];
        }
    }  

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }  
    
    return matrix;
};