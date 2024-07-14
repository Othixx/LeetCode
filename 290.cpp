#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    bool wordPattern(string pattern, string s) {
        // 建立ASCII码空哈希表
        string hash[128];
        int p = 0;  // p为指向s的指针
        for(int i = 0; i < pattern.length(); i++){
            // 提取s的单词
            string temp;
            while(s[p] != 32 || s[p] != '\0'){
                temp.push_back(s[p]);
                p++;
            }
            p++;

            // 比较单词是否与哈希表中之前存放的单词一致
            if(hash[s[p]] == "\0"){     // 默认情况下是空串
                hash[s[p]] = temp;    // 加入单词进哈希表
            }
            else{
                if(temp != hash[s[p]]){     // 如果单词不相同返回false
                    return false;
                }
            }

        }
        return true;
    }
};