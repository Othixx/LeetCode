import java.util.Arrays;

public class Solution377 {
    public int combinationSum4(int[] nums, int target) {
        // 排序nums
        Arrays.sort(nums);

        int maxStep = nums[nums.length - 1];
        int dp_length = maxStep > target ? maxStep : target;
        dp_length++;
        int[] dp = new int[dp_length];
        Arrays.fill(dp, 0);

        int k = nums[0] + 1;
        dp[nums[0]] = 1;
        dp[0] = 1;
        while (k <= target) {
            for (int i = 0; i < nums.length; i++) {
                if (k - nums[i] >= 0)
                    dp[k] += dp[k - nums[i]];
                else
                    break;
            }
            k++;
        }
        return dp[target];
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 3 };
        Solution377 solution = new Solution377();
        int result = solution.combinationSum4(nums, 4);
    }
}
