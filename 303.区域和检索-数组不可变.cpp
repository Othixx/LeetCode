#include <bits/stdc++.h>
#include <vector>


/*
 * @lc app=leetcode.cn id=303 lang=cpp
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
public:
    private vector<int>& numbers;
    NumArray(vector<int>& nums) {
        for(int i = 0; i < nums.size(); i++){
            this->numbers.push_back(nums[i]);
        }
    }
    
    int sumRange(int left, int right) {
        int sum = 0;
        for(int i = left; i <= right; i++){
            sum += numbers[i];
        }
        return sum;
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
// @lc code=end

