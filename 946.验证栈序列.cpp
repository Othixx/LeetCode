// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include <stack>
#include "commoncppproblem946.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=946 lang=cpp
 *
 * [946] 验证栈序列
 */

// @lc code=start
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        // bool flag = false;
        stack<int> s1;
        stack<int> s2;

        int i = 0, j = 0;   // i,j 指针分别指向pushed和popped
        for(; i < pushed.size(); i++){
            s1.push(pushed[i]);
            while(s1.size() != 0 && s1.top() == popped[j]){
                s2.push(s1.top());
                s1.pop();
                j++;
                if(j == popped.size()) return true;
            }
        }

        if(i == pushed.size() && j == popped.size()) return true;
        return false;
    }
};
// @lc code=end

