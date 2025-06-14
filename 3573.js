/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    let n = prices.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(k + 1);
        for(let j = 0; j < k + 1; j++){
            dp[i][j] = new Array(3).fill(-Infinity);
        }
    }

    // dp[0][0][0] = 0;
    dp[0][1][1] = -prices[0];
    dp[0][1][2] = prices[0];
    // 初始化操作0次
    for(let i = 0; i < n; i++){
        dp[i][0][0] = 0; // 没有操作时利润为0
    }
    for(let i = 1; i < n; i++){
        let max_j = Math.min(k, Math.ceil((i + 1) / 2));
        for(let j = 1; j <= max_j; j++){
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i], dp[i - 1][j][2] - prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            dp[i][j][2] = Math.max(dp[i - 1][j][2], dp[i - 1][j - 1][0] + prices[i]);
        }
    }
    return dp[n - 1][k][0];
};

let prices = [6,11,1,5,3,15,8];
let k = 3;
console.log(maximumProfit(prices, k)); // Output: 13