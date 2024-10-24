/*
 * @lc app=leetcode.cn id=377 lang=java
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start

import java.util.Arrays;

class Solution {
    public int combinationSum4(int[] nums, int target) {
        int n = nums.length;
        int dp_length = n > target ? n : target;
        dp_length++;
        int[] dp = new int[dp_length];
        Arrays.fill(dp, 0);

        // 排序nums
        Arrays.sort(nums);

        int k = nums[0] + 1;
        dp[nums[0]] = 1;
        while(k <= target){
            for(int i = 0; i < n; i++){
                if(k - nums[i] > 0) dp[k] += dp[k - nums[i]];
                else break;
            }
            k++;
        }
        return dp[target];
    }
}
// @lc code=end

