// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <bits/stdc++.h>
#include "commoncppproblem473.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=473 lang=cpp
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
class Solution {
public:
    bool makesquare(vector<int>& matchsticks) {
        if(matchsticks.size() < 4) return false;
        sort(matchsticks.begin(), matchsticks.end());
        int middle = IsEqual(matchsticks, 0, matchsticks.size() - 1);
        if(middle != -1){
            if(IsEqual(matchsticks, 0, middle) != -1 && IsEqual(matchsticks, middle + 1, matchsticks.size() - 1) != -1) return true;
        }
        return false;
    }

    int IsEqual(vector<int>& matchsticks, int p, int q){
        // 函数返回一个数组能否被拆成两个大小相同的值
        int left = 0;
        int right = accumulate(matchsticks.begin() + p, matchsticks.begin() + q + 1, 0);
        int i = p;
        while(i <= q){
            left += matchsticks[i];
            right -= matchsticks[i];
            if(left == right) break;
            else if(left > right) return -1;    // 不成立
            i++;
        }
        if(right == 0) return -1;
        return i;
    }
};
// @lc code=end

