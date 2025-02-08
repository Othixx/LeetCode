/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let dp = new Array(2);
    dp[0] = new Array(n).fill(0);
    dp[1] = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i] - prices[i - 1]);
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1]);
    }

    return Math.max(dp[0][n - 1], dp[1][n - 1]);
};

let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));