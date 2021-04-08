/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
        mat[i][i] = 0;
        sum += mat[i][mat.length-i-1]
        mat[i][i] = 0;
    }  
    
    
    return sum;
};