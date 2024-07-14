// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <bits/stdc++.h>
#include "commoncppproblem455.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=455 lang=cpp
 *
 * [455] 分发饼干
 */

// @lc code=start
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        vector<bool> isEat;     // 标记这个小孩是否吃过
        int count = 0;
        for(int i = 0; i < s.size(); i++){
            if(g[0] <= s[i]){
                count++;
                g.erase(g.begin());
            }
        }
        return count;
    }
};
// @lc code=end

