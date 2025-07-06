/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} waitCost
 * @return {number}
 */
var minCost = function (m, n, waitCost) {
    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(Infinity);
    }
    dp[m - 1][n - 1] = 0;

    // 更新末行和末列
    for (let j = n - 2; j >= 0; j--) {
        dp[m - 1][j] = dp[m - 1][j + 1] + m * (j + 2) + waitCost[m - 1][j + 1];
    }
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = dp[i + 1][n - 1] + (i + 2) * n + waitCost[i + 1][n - 1];
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = Math.min(
                dp[i + 1][j] + (i + 2) * (j + 1) + waitCost[i + 1][j],
                dp[i][j + 1] + (i + 1) * (j + 2) + waitCost[i][j + 1]
            );
        }
    }
    return dp[0][0];
};

let m = 1, n = 2;
let waitCost = [[1,2]];
console.log(minCost(m, n, waitCost)); // Output: 3