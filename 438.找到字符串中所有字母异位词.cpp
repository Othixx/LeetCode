// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem438.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=438 lang=cpp
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;
        // 记录候选词字母个数，哈希表
        int nativeWords[26] = {0};
        int windowWords[26] = {0};
        // 首先按照单词长度，生成起始窗口
        int wordLength = p.size();  // 单词长度
        for(int i = 0; i < wordLength; i++){
            int c = p[i] - 'a';
            nativeWords[c]++;
        }

        for(int i = 0; i < wordLength; i++){
            int c = s[i] - 'a';
            windowWords[c]++;
        }

        // 比较起始窗口和候选词长度是否相同
        if(IsSame(nativeWords, windowWords)) ans.push_back(0);

        // 向后移动窗口，检查被更新字母，如果相同则输出
        for(int j = wordLength; j < s.size(); j++){
            int c;
            c = s[j] - 'a';
            windowWords[c]++;
            c = s[j - wordLength] - 'a';
            windowWords[c]--;
            if(IsSame(nativeWords, windowWords)) ans.push_back(j - wordLength + 1);
        }

        return ans;

    }

    bool IsSame(int* nativeWords, int* windowWords){
        // size === 26
        for(int i = 0; i < 26; i++){
            if(nativeWords[i] != windowWords[i]) return false;
        }
        return true;
    }
};


// @lc code=end

