// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem34.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=34 lang=cpp
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
class Solution {
public:
    vector<int> ans;
    vector<int> searchRange(vector<int>& nums, int target) {
        // 找第一个出现的值
        int i = 0, j = nums.size() - 1;
        int m = (i + j) / 2;
        while(i <= j){
            m = (i + j) / 2;
            if(nums[m] == target){
                ans.push_back(m);
                ans.push_back(m);
                break;
            }
            else if(nums[m] > target){
                j = m - 1;
            }
            else{
                i = m + 1;
            }
        }
        if(i > j){  // 没找到
            ans.push_back(-1);
            ans.push_back(-1);
            return ans;
        }

        // 进行区间查找
        if(i <= m - 1) microsearch_left(nums, target, i, m - 1);
        if(m + 1 <= j) microsearch_right(nums, target, m + 1, j);

        return ans;
    }

    void microsearch_left(vector<int>& nums, int target, int left, int right){
        while(left <= right){
            int m = (left + right) / 2;
            if(nums[m] == target){
                ans[0] = m;
                right = m - 1;
            }
            else{
                left = m + 1;
            }
        }
        return;
    }

    void microsearch_right(vector<int>& nums, int target, int left, int right){
        while(left <= right){
            int m = (left + right) / 2;
            if(nums[m] == target){
                ans[0] = m;
                left = m + 1;
            }
            else{
                right = m - 1;
            }
        }
        return;
    }
};
// @lc code=end

