/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let max = 1;
    let dp = new Array(nums.length).fill(1);
    let dfs = function(i){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i] && dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1;
        }
    };
    for(let i = 0; i < nums.length; i++){
        dfs(i);
        if(dp[i] > max) max = dp[i];
    }
    return max;
};

nums = [1,3,6,7,9,4,10,5,6];
lengthOfLIS(nums);