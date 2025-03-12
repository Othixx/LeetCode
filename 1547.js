// 注意：下述代码无法通过，由于思路整体一样，这题后来直接copy的灵神代码
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
    let length = cuts.length;
    if (length === 1) return n;
    if (length === 2) return n + Math.min(n - cuts[0], cuts[1]);
    let dp = new Array(length);
    for (let i = 0; i < length; i++) {
        dp[i] = new Array(n).fill(Infinity);
        dp[i][i] = 0;
    }

    let dfs = function (i, j) {
        if (dp[i][j] !== Infinity) return dp[i][j];
        if (i + 1 === j) dp[i][j] = cuts[j] - cuts[i];
        else {
            for (let m = i + 1; m < j; m++) {
                dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dfs(i, m) + dfs(m, j));
            }
        }
        return dp[i][j];
    }

    dfs(0, length - 1);
    let ans = n + dfs(0, length - 1) + n - cuts[0];
    // 遍历第一次切棍子的位置
    for (let i = 1; i < length - 1; i++) {
        ans = Math.min(ans, n + n + dfs(0, i) + dfs(i, length - 1));
    }
    ans = Math.min(ans, n + n - cuts[length - 1] + dfs(0, length - 1));
    return ans;
};

let n = 9;
let cuts = [5, 6, 1, 4, 2];
console.log(minCost(n, cuts));