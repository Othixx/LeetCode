#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // 新开一个数组，将对应排序好的单词存入数组中
        vector<string> sort_strs;
        for(int i = 0; i < strs.size(); i++){
            string temp = "";
            temp = strs[i];
            sort(temp.begin(), temp.end());
            sort_strs[i] = temp;
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

        return ans;

    }
};