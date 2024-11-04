public class Solution2606 {

    public int maximumCostSubstring(String s, String chars, int[] vals) {
        // 更新字母对应的开销值
        int costs[] = new int[26];
        int asciiCode_A = (int) 'a';
        for (int i = 0; i < 26; i++) {
            costs[i] = i + 1;
        }
        for (int i = 0; i < chars.length(); i++) {
            costs[(int) chars.charAt(i) - asciiCode_A] = vals[i];
        }

        int dp[] = new int[s.length()];
        int ans = 0;
        dp[0] = Math.max(0, costs[s.charAt(0) - asciiCode_A]);
        ans = Math.max(ans, dp[0]);
        for(int i = 1; i < s.length(); i++){
            dp[i] = Math.max(0, dp[i - 1] + costs[s.charAt(i) - asciiCode_A]);
            ans = Math.max(ans, dp[i]);
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution2606 solution = new Solution2606();
        System.out.println(solution.maximumCostSubstring("zox", "zoxr", new int[]{2,-5,-4,-5}));
    }
}
