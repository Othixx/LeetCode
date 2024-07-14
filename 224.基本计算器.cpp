// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem224.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=224 lang=cpp
 *
 * [224] 基本计算器
 */

// @lc code=start
class Solution {
public:
    int p;  // 全局指针
    int length_s;   // 表达式长度
    stack<int> st;  // 用来暂存处理遇到括号的情况

    int calculate(string s) {
        p = 0;
        length_s = s.size();        
        int presign = 1;    // 初始时符号为1，表示正数
        long long num = 0;    // 记录当前的数值
        long long ans = 0;    // 存储答案
        while(p != length_s){
            if(s[p] == '('){    // 左括号，递归
                st.push(ans);
                st.push(presign);
                presign = 1;
                num = 0;
                ans = 0;
            }
            else if(s[p] == ')'){   // 右括号，弹出
                ans = ans + presign * num;
                num = ans;
                presign = st.top();
                st.pop();
                ans = st.top();
                st.pop();
            }
            else if(s[p] == '+'){   // 碰到运算符，先计算之前的表达式，接着存储这个符号至presign
                ans = ans + presign * num;
                presign = 1;
                num = 0;
            }
            else if(s[p] == '-'){
                ans = ans + presign * num;
                presign = -1;
                num = 0;
            }
            else if('0' <= s[p] && s[p] <= '9'){
                num = num * 10 + s[p] - 48;
            }
            p++;    // 遍历
        }
        ans = ans + presign * num;
        return ans;

    }
};
// @lc code=end

