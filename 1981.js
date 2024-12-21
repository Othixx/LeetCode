/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function (mat, target) {
    // 按行排序
    let m = mat.length;
    let n = mat[0].length;
    for (let i = 0; i < m; i++) {
        mat[i].sort((a, b) => {
            return (a - b);
        });
    }

    let maxAns = 0;
    for (let i = 0; i < m; i++) {
        maxAns += mat[i][n - 1];
    }

    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(maxAns + 1).fill(false);
    }
    dp[0][0] = true;

    let calculate = function (i, j) {
        for (let p = 0; p < n; p++) {
            if (j - mat[i][p] >= 0){
                dp[i + 1][j] = dp[i][j - mat[i][p]];
                if(dp[i + 1][j]) break;
            } 
            else break;
        }
    }

    // 动态规划
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= maxAns; j++) {
            calculate(i, j);
        }
    }

    let ans = 99999;
    for (let i = 0; i <= maxAns; i++) {
        if (dp[m][i] && Math.abs(i - target) < ans) ans = Math.abs(i - target);
    }

    return ans;
};

let mat = [[1,2,3],[4,5,6],[7,8,9]];
let target = 13;
console.log(minimizeTheDifference(mat, target));