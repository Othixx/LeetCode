/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
    const MOD = 10 ** 9 + 7;
    let dp = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        dp[i] = new Array(target + 1).fill(0);
    }
    dp[0][0] = 1;

    let calculate = function (i, j) {
        let c = 1;
        while (j - c >= 0 && c <= k) {
            dp[i + 1][j] = (dp[i][j - c] + dp[i + 1][j]) % MOD;
            c++;
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= target; j++) {
            calculate(i, j);
        }
    }

    return dp[n][target];

};

let n = 1;
let k = 6;
let target = 3;
console.log(numRollsToTarget(n, k, target));