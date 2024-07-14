// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem402.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=402 lang=cpp
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
// 贪心 + 单调栈，使用vector替代栈的实现
// 贪心策略：如果序列右边数字比左边小，那么删去左边数字，即左边数字出栈
class Solution {
public:
    string removeKdigits(string num, int k) {
        int i = 1;
        int n = num.size();
        int count = 0;  // 已经移除的个数
        vector<char> anstmp;
        anstmp.push_back(num[0]);
        for(; i < n; i++){
            while(count < k && anstmp.size() != 0 && anstmp[anstmp.size() - 1] > num[i]){
                anstmp.pop_back();
                count++;
            }
            // if(count == k) break;
            anstmp.push_back(num[i]);
        }
        // 如果删除的不够，在删除末尾
        if(count < k){
            for(int j = 0; j < k - count; j++){
                anstmp.pop_back();
            }
        }
        // 去除前导0
        int m = 0;
        if(anstmp.size() == 0) return "0";  // 全部删除，空串
        while(anstmp[m] == '0'){
            m++;
        }
        if(m == anstmp.size()){ // 全为0，空串
            return "0";
        }else{
            string str(anstmp.begin() + m, anstmp.end());
            return str;
        }
    }
};
// @lc code=end

