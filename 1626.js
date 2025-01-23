/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    let nums = [];
    let n = scores.length;
    // 排序
    for (let i = 0; i < n; i++) {
        let min = 0;
        for (let j = 1; j < scores.length; j++) {
            if (ages[j] < ages[min]) min = j;
            if (ages[j] === ages[min] && scores[j] < scores[min]) min = j;
        }
        nums.push(scores[min]);
        scores.splice(min, 1);
        ages.splice(min, 1);
    }

    // let n = nums.length;
    // 求解
    let dp = new Array(n).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = nums[i];
        for (let j = 0; j < i; j++) {
            if (nums[j] <= nums[i]) {
                if (dp[j] + nums[i] > dp[i]) dp[i] = dp[j] + nums[i];
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > ans) ans = dp[i];
    }

    return ans;
};

let scores = [4,5,6,5];
let ages = [2,1,2,1];
console.log(bestTeamScore(scores, ages));