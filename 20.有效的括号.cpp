// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <stack>
#include "commoncppproblem20.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=20 lang=cpp
 *
 * [20] 有效的括号
 */

// @lc code=start
class Solution {
public:
    bool isValid(string s) {
        stack<char> st_left;
        int i = 0;
        if(s.size() % 2 != 0) return false;
        for(; i < s.size(); i++){
            if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                st_left.push(s[i]);
            }
            else if(s[i] == ')' || s[i] == '}' || s[i] == ']'){
                if(s[i] == ')' && st_left.top() == '(') st_left.pop();
                else if(s[i] == '}' && st_left.top() == '{') st_left.pop();
                else if(s[i] == ']' && st_left.top() == '[') st_left.pop();
                else break;
            }
        }
        if(i == s.size() && st.size() == 0) return true;
        return false;
    }
};
// @lc code=end

