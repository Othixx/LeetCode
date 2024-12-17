/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    if (amount === 0) return 0;
    let n = coins.length;
    let dp = new Array(n + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(amount + 1).fill(0);
    }
    dp[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let c = 0; c <= amount; c++) {
            if (c >= coins[i]) dp[i + 1][c] = dp[i][c] + dp[i][c - coins[i]];
            else dp[i + 1][c] = dp[i][c];
        }
    }

    return dp[n][amount];
};

let amount = 5;
let coins = [1,2,5];
console.log(change(amount, coins));