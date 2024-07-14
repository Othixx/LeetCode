// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <algorithm>
#include "commoncppproblem49.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=49 lang=cpp
 *
 * [49] 字母异位词分组
 */

// @lc code=start
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // 新开一个数组，将对应排序好的单词存入数组中
        vector<string> sort_strs;
        for(int i = 0; i < strs.size(); i++){
            string temp = "";
            temp = strs[i];
            sort(temp.begin(), temp.end());
            sort_strs.push_back(temp);
        }

        // 将排序好的单词作为key，存入哈希表的第一个值中，并遍历strs数组拉链
        vector<vector<string>> ans;
        for(int i = 0; i < strs.size(); i++){
            vector<string> temp;
            if(i == 0){     // 如果刚开始遍历
                temp.push_back(sort_strs[i]);
                temp.push_back(strs[i]);
                ans.push_back(temp);
            }
            else{
                int j = 0;
                for(; j < ans.size(); j++){
                    if(sort_strs[i] == ans[j][0]){      // 找到相同的匹配
                        ans[j].push_back(strs[i]);
                        break;
                    }
                }
                if(j == ans.size()){    // 找不到
                    temp.push_back(sort_strs[i]);
                    temp.push_back(strs[i]);
                    ans.push_back(temp);
                }
            }
        }

        // 删去ans的第一个元素
        for(int i = 0; i < ans.size(); i++){
            ans[i].erase(ans[i].begin());
        }

        return ans;

    }
};
// @lc code=end

