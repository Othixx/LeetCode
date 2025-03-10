/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let n = nums.length;
    let m = multipliers.length;
    let dp = new Array(m + 1);      // dp[p][q] 表示nums数组中前p个数和后q个数组成的最大分数
    for(let i = 0; i <= m; i++){
        dp[i] = new Array(m + 1).fill(-Infinity);
    }
    dp[0][0] = 0;

    for(let q = 1; q <= m; q++){
        dp[0][q] = dp[0][q - 1] + multipliers[q - 1] * nums[n - q];
    }
    for(let p = 1; p <= m; p++){
        dp[p][0] = dp[p - 1][0] + multipliers[p - 1] * nums[p - 1];
    }

    for(let p = 1; p <= m; p++){
        for(let q = 1; p + q <= m; q++){
            dp[p][q] = Math.max(dp[p - 1][q] + multipliers[p + q - 1] * nums[p - 1], dp[p][q - 1] + multipliers[p + q - 1] * nums[n - q]);
        }
    }

    let ans = -Infinity;
    for(let i = 0; i <= m; i++){
        if(dp[i][m - i] > ans) ans = dp[i][m - i];
    }

    return ans;
};