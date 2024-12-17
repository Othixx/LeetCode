/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
    let n = nums.length;
    let dp = new Array(n + 1);
    for(let i = 0; i <= n; i++){
        dp[i] = new Array(target + 1).fill(0);
    }

    for(let i = 0; i < n; i++){
        for(let c = 0; c <= target; c++){
            if(c < nums[i]){
                dp[i + 1][c] = dp[i][c];
            }
            else{
                if(dp[i][c - nums[i]] === 0) dp[i + 1][c] = dp[i][c];
                else dp[i + 1][c] = Math.max(dp[i][c], dp[i][c - nums[i]] + 1);
            }
        }
    }

    return dp[n][target] === 0 ? -1 : dp[n][target];
};

let nums = [1,1,5,4,5];
console.log(lengthOfLongestSubsequence(nums, 3));