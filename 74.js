/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let i = 0;
    let j = 0;
    while (matrix[i][n - 1] < target && i < m) {
        i++;
        if(i === m) break;
    }
    if(i < m){
        for(; j < n; j++){
            if(matrix[i][j] === target) return true;
        }
    }
    return false;
};

matrix = [[1]];
searchMatrix(matrix, 2);