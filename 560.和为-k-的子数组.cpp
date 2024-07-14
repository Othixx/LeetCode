// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem560.h"
#include <bits/stdc++.h>
#include <unordered_map>

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=560 lang=cpp
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> s(n + 1);
        for (int i = 0; i < n; i++) {
            s[i + 1] = s[i] + nums[i];
        }

        int ans = 0;
        unordered_map<int, int> cnt;
        for (int sj : s) {
            // 注意不要直接 += cnt[sj-k]，如果 sj-k 不存在，会插入 sj-k
            // ans += cnt.contains(sj - k) ? cnt[sj - k] : 0;
            if (cnt.find(sj - k) != cnt.end()) {
                ans += cnt[sj - k];
            }
            cnt[sj]++;
        }
        return ans;
    }
};
// @lc code=end

