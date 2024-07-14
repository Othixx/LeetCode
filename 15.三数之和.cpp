// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <algorithm>
#include "commoncppproblem15.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=15 lang=cpp
 *
 * [15] 三数之和
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        int n;
        n = nums.size();
        sort(nums.begin(), nums.end());
        for(int i = 0; i < n - 2; i++){
            int p = i + 1;
            int q = n - 1;
            while(p < q){
                if(nums[p] + nums[q] == -nums[i]){
                    vector<int> temp;
                    temp.push_back(nums[i]);
                    temp.push_back(nums[p]);
                    temp.push_back(nums[q]);
                    ans.push_back(temp);
                    p++;
                    while(p < q && nums[p] == nums[p - 1]){
                        p++;
                    }
                    q--;
                    while(p < q && nums[q] == nums[q + 1]){
                        q--;
                    }
                }
                else if(nums[p] + nums[q] < -nums[i]){
                    p++;                
                    while(p < q && nums[p] == nums[p - 1]){
                        p++;
                    }
                }
                else{
                    q--;
                    while(p < q && nums[q] == nums[q + 1]){
                        q--;
                    }
                }

            }
            while(i != n - 1 && nums[i] == nums[i + 1]){
                i++;
            }
        }
        return ans;
    }
};
// @lc code=end

