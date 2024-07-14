// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <algorithm>
#include "commoncppproblem290.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=290 lang=cpp
 *
 * [290] 单词规律
 */

// @lc code=start
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        // 建立ASCII码空哈希表
        string hash[128];
        
        // 分别将两个字符串拆分至两个数组中
        vector<char> patterns;
        vector<string> words;
        for(int i = 0; i < pattern.length(); i++){      //拆分pattern
            patterns.push_back(pattern[i]);
        }
        int p = 0;  // p为指向s的指针
        while(s[p] != '\0'){      //拆分words
            string temp = "\0";
            while(!(s[p] == ' ' || s[p] == '\0')){
                temp.push_back(s[p]);
                p++;
            }
            words.push_back(temp);
            if(s[p] == '\0'){
                break;
            }
            p++;
        }

        // 比较两数组长度是否相同，如不相同直接返回false
        if(patterns.size() != words.size()){
            return false;
        }

        for(int i = 0; i < patterns.size(); i++){
            string temp = "\0";
            temp = words[i];
            // 比较单词是否与哈希表中之前存放的单词一致
            if(hash[patterns[i]] == "\0"){     // 默认情况下是空串
                hash[patterns[i]] = temp;    // 加入单词进哈希表
            }
            else{
                if(temp != hash[patterns[i]]){     // 如果单词不相同返回false
                    return false;
                }
            }

            // 比较哈希表中是否存在重复的单词
            for(int j = 0; j < 128; j++){
                if(hash[j] == temp && j != patterns[i]){
                    return false;
                }
            }

        }
        return true;
    }
};
// @lc code=end

