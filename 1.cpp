#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> pos;
        int size = nums.size();
        for(int i = 0; i < size; i++){
            for(int j = i + 1; j < size; j++){
                if(nums[i] + nums[j] == target){
                    pos.push_back(i);
                    pos.push_back(j);
                    return pos;
                }
            }
        }
        return pos;
    }
    class Solution {
public:
    vector<vector<int>> cengxu;
    vector<int> rightSideView(TreeNode* root) {

    }
};
};