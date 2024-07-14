// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem1.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=1 lang=cpp
 *
 * [1] 两数之和
 */

// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> pos;
        int size = nums.size();
        for(int i = 0; i < size; i++){
            for(int j = 0; j < size; j++){
                if(nums[i] + nums[j] == target){
                    pos.push_back(i);
                    pos.push_back(j);
                    return pos;
                }
            }
        }
        return pos;
    }
};
// @lc code=end

