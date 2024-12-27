/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    // 求前缀和
    for (let i = 0; i < piles.length; i++) {
        for (let j = 1; j < piles[i].length; j++) {
            piles[i][j] = piles[i][j - 1] + piles[i][j];
        }
    }

    let n = piles.length;   // 组数
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(k + 1).fill(0);
    }

    let calculate = function (i, j) {
        for (let p = 1; p <= piles[i].length; p++) {
            let temp = 0;
            if (j >= p) {
                temp = Math.max(dp[i][j - p] + piles[i][p - 1], dp[i][j]);
                dp[i + 1][j] = Math.max(temp, dp[i + 1][j]);
            }
            else {
                dp[i + 1][j] = Math.max(dp[i][j], dp[i + 1][j]);
            }
        }
    };


    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            calculate(i, j);
        }
    }

    let max = 0;
    for (let i = 0; i <= n; i++) {
        if (dp[i][k] > max) max = dp[i][k];
    }

    return max;
};

let piles = [[48, 14, 23, 38, 33, 79, 3, 52, 73, 58, 49, 23, 74, 44, 69, 76, 83, 41, 46, 32, 28]];
let k = 10;
console.log(maxValueOfCoins(piles, k));