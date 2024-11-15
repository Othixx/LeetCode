package biWeeklyContest143;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Q3 {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Map<Integer, Integer> cnt = new HashMap<>();
        Map<Integer, Integer> diff = new TreeMap<>();
        for (int x : nums) {
            cnt.merge(x, 1, Integer::sum); // cnt[x]++
            diff.putIfAbsent(x, 0); // 把 x 插入 diff，以保证下面能遍历到 x
            // 把 [x-k, x+k] 中的每个整数的出现次数都加一
            diff.merge(x - k, 1, Integer::sum); // diff[x-k]++
            diff.merge(x + k + 1, -1, Integer::sum); // diff[x+k+1]--
        }

        int ans = 0;
        int sumD = 0;
        for (Map.Entry<Integer, Integer> e : diff.entrySet()) {
            sumD += e.getValue();
            ans = Math.max(ans, Math.min(sumD, cnt.getOrDefault(e.getKey(), 0) + numOperations));
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = {1,4,5};
        int k = 1;
        int numOperations = 2;
        Q3 solution = new Q3();
        int result = solution.maxFrequency(nums, k, numOperations);
        System.out.println(result);
    }

}
