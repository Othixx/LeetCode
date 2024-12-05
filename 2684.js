/**
 * @param {number[][]} triangle
 * @return {number}
 */
var maxMoves = function (triangle) {
    let m = triangle.length;
    let n = triangle[0].length;

    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0);
    }

    // 反向遍历
    for (let j = n - 2; j >= 0; j--) {
        for (let i = 0; i < m; i++) {
            if (i === 0) {
                dp[i][j] = Math.max(triangle[i][j + 1] > triangle[i][j] ? dp[i][j + 1] : -1, triangle[i + 1][j + 1] > triangle[i][j] ? dp[i + 1][j + 1] : -1) + 1;
            }
            else if (i === m - 1) {
                dp[i][j] = Math.max(triangle[i - 1][j + 1] > triangle[i][j] ? dp[i - 1][j + 1] : -1, triangle[i][j + 1] > triangle[i][j] ? dp[i][j + 1] : -1) + 1;
            }
            else {
                dp[i][j] = Math.max(triangle[i - 1][j + 1] > triangle[i][j] ? dp[i - 1][j + 1] : -1, triangle[i][j + 1] > triangle[i][j] ? dp[i][j + 1] : -1, triangle[i + 1][j + 1] > triangle[i][j] ? dp[i + 1][j + 1] : -1) + 1;
            }
        }
    }

    let ans = 0;
    for(let i = 0; i < m; i++){
        if(dp[i][0] > ans) ans = dp[i][0];
    }

    return ans;
};

let grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]];
console.log(maxMoves(grid));
