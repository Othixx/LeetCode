// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem33.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=33 lang=cpp
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int ans = -1;
        // 搜索无序位置
        int i = 0, j = nums.size() - 1;
        int m = (i + j) / 2;
        if(j != 0){
            if(m != 0 && m != nums.size() - 1){
                while(!(nums[m] < nums[m-1] && nums[m] < nums[m+1])){
                    m = (i + j) / 2;
                    if(nums[m] > nums[0] && nums[m] < nums[nums.size()-1]){
                        m = 0;
                        break;
                    }
                    if(m == 0){
                        if(nums[m] < nums[nums.size()-1]) break;
                        else i = m + 1;
                    }
                    else if(m == nums.size() - 1){
                        if(nums[m] > nums[0]) break;
                        else j = m - 1;
                    }
                    // if(m == 0 || m == nums.size() - 1) break;
                    else{
                        if(nums[m] > nums[0] && nums[m] > nums[nums.size()-1]){
                            i = m + 1;
                        }
                        else if(nums[m] < nums[0] && nums[m] < nums[nums.size()-1]){
                            j = m - 1;
                        }
                    }
                }
            }
        }


        i = 0, j = nums.size() - 1;
        if(j == 0){
            if(nums[j] == target) return j;
            else return ans;
        }
        else if(j == 1){
            if(nums[0] == target) return 0;
            else if(nums[1] == target) return 1;
            else return ans;
        }
        else{
            // 两边分别二分
            // 如果m=0
            if(m == 0) ans = binarysearch(nums, target, i,j);
            // 如果m为末尾，那么除了末尾无序外之前都有序
            else if(m == nums.size() - 1){
                if(nums[m] == target) return m;
                ans = binarysearch(nums, target, 0, m - 1);
            }
            // 其余情况下，两边二分
            else{
                ans = binarysearch(nums, target, 0, m - 1);
                if(ans == -1) ans = binarysearch(nums, target, m, j);
            }
        }

        return ans;
    }

    int binarysearch(vector<int>& nums, int target, int left, int right){
        int m = (left + right) / 2;
        while(left <= right){
            m = (left + right) / 2;
            if(nums[m] == target) return m;
            else if(nums[m] > target) right = m - 1;
            else left = m + 1;
        }
        return -1;
    }
};
// @lc code=end

