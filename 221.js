/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    // let memo = new Array(m);
    // for (let i = 0; i < m; i++) {
    //     memo[i] = new Array(n);
    // }

    let check = function (i, j) {
        let ans = 0;
        let i_0 = i, j_0 = j;
        while (i < m && j < n && matrix[i][j] === 1) {
            // 检查横竖
            for (let a = i_0; a < i; a++) {
                if (matrix[a][j] !== 1) return ans;
            }
            for (let b = j_0; b < j; b++) {
                if (matrix[i][b] !== 1) return ans;
            }
            ans = (i - i_0 + 1) * (i - i_0 + 1);

            // i_0 = i, j_0 = j;
            i++;
            j++;
        }
        return ans;
    };

    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, check(i, j));
        }
    }
    return max;
};

let matrix = [["0","1"],["1","0"]];
console.log(maximalSquare(matrix)); // 1