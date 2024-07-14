// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem55.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 */

// @lc code=start
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int pos = 0;    // 当前位置
        int n = nums.size();
        if(pos == n - 1) return true;
        while(pos != n - 1){
            int far_pos = pos + nums[pos];    // 当前位置能到的最远位置
            int next_pos = pos;   // 下一个跳到的位置
            int k = min(nums[pos], n - 1 - pos);  // 循环的次数，需要特别注意循环次数不能超出数组大小限制
            for(int i = 1; i <= k; i++){
                if(pos + i + nums[pos + i] > far_pos){
                    next_pos = pos + i;
                    far_pos = pos + i + nums[pos + i];
                    if(far_pos >= n - 1) return true;
                }
            }
            if(next_pos == pos){
                if(next_pos == n - 1) return true;
                else return false;
            }
            pos = next_pos;
        }
        return false;
    }
};
// @lc code=end

