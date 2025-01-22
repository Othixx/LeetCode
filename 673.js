/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);  // dp[i]表示以nums[i]结尾的最长上升子序列长度
    let cnt = new Array(n).fill(0); // cnt[i]表示以nums[i]结尾的最长上升子序列个数
    dp[0] = 1;
    cnt[0] = 1;
    let maxLen = 1;     // 最长上升子序列长度
    let ans = 0;

    for (let i = 1; i < n; i++) {
        let max = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > max) max = dp[j] + 1;
        }
        dp[i] = max;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] === max - 1) cnt[i] += cnt[j];
        }
        if (max === 1) cnt[i] = 1;
        if (max > maxLen) maxLen = max;
    }

    for (let i = 0; i < n; i++) {
        if (dp[i] === maxLen) ans += cnt[i];
    }
    return ans;
};

let nums = [1,2,4,3,5,4,7,2];
console.log(findNumberOfLIS(nums));