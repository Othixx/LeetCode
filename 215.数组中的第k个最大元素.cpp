// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem215.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=215 lang=cpp
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        createHeap(nums);
        for(int i = 1; i < k; i++){
            deleteHeap(nums);   // 每次删去堆顶元素  
        }
        return nums[0];
    }

    void createHeap(vector<int>& nums){     // 建堆
        int n = nums.size();
        int k;
        int p;
        if(n <= 2){
            if(n == 2){
                if(nums[0] < nums[1]) swap(nums[0], nums[1]);
            }
        }
        else{
            if (n % 2 == 0){    // 偶数
                k = (n - 2) / 2;
            }
            else{   // 奇数
                k = (n - 3) / 2;
            }
            while(k >= 0){
                // p = k;
                reHeap(nums, k, n);
                // while(!Isleaf(p, n)){    // p不为叶子结点还要比
                //     int max = p;
                //     if(nums[2*p+1] > nums[max]) max = 2*p+1;
                //     if(2*p+2 < n && nums[2*p+2] > nums[max]) max = 2*p+2;
                //     if(max != p){
                //         swap(nums[p], nums[max]);
                //         p = max;
                //     }
                // }
                k--;
            }
        }
    }
    void reHeap(vector<int>& nums, int p, int n){
        while(!Isleaf(p, n)){    // p不为叶子结点还要比
            int max = p;
            if(nums[2*p+1] > nums[max]) max = 2*p+1;
            if(2*p+2 < n && nums[2*p+2] > nums[max]) max = 2*p+2;
            if(max != p){
                swap(nums[p], nums[max]);
                p = max;
            }
            else{
                break;
            }
        }
    }

    void deleteHeap(vector<int>& nums){
        nums[0] = nums[nums.size()-1];
        nums.pop_back();
        int n = nums.size();
        reHeap(nums, 0, n);
    }

    bool Isleaf(int p, int n){      // 检查是否为叶子结点
        if(2 * p + 1 >= n) return true;
        return false;
    }
};
// @lc code=end

