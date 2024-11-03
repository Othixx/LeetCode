import java.util.ArrayList;
import java.util.Arrays;

public class Solution3186 {
    public long maximumTotalDamage(int[] power) {
        // 排序power
        Arrays.sort(power); // 从小到大排序

        ArrayList<Integer> memCount = new ArrayList<>(); // 记录当前元素为第i个
        ArrayList<Integer> memNum = new ArrayList<>(); // 记录当前元素的值
        ArrayList<Long> memSum = new ArrayList<>(); // 记录第i个元素的和sum

        memCount.add(0);
        memNum.add(power[0]);
        long temp = power[0];

        for (int i = 1; i < power.length; i++) {
            if(power[i] == power[i - 1]){
                temp += power[i];
            }
            else{
                memSum.add(temp);
                memCount.add(memCount.size());
                memNum.add(power[i]);
                temp = power[i];
            }
        }

        memSum.add(temp);

        long dp[] = new long[memCount.size()];
        dp[0] = memSum.get(0);
        for(int i = 1; i < memCount.size(); i++){
            if(i == 1){
                if(memNum.get(i) != memNum.get(0) + 1 && memNum.get(i) != memNum.get(0) + 2){
                    dp[i] = dp[i - 1] + memSum.get(i);
                }
                else{
                    dp[i] = Math.max(dp[i - 1], memSum.get(i));
                }
            }
            else if(i == 2){
                if(memNum.get(i) - 2 == memNum.get(i - 2)){
                    dp[i] = Math.max(dp[i - 2], dp[i - 1],  memSum.get(i))
                }
            }
            else{
                if(memNum.get(i) - 2 == memNum.get(i - 2)){
                    dp[i] = Math.max(dp[i - 1], memSum.get(i))
                }
            }
        }
    }
}
