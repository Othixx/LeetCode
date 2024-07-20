// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem54.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=54 lang=cpp
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
class Solution {
public:
    struct Mem{     // 四个方格点
        int x;
        int y;
    };

    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> ans;
        struct Mem a, b, c, d;
        a.x = 0;
        a.y = 0;
        b.x = - 1;
        b.y = - 1;
        c.x = - 1;
        c.y = - 1;
        d.x = - 1;
        d.y = - 1;
        int state = 1;
        int count = 0;
        int m = matrix.size();
        int n = matrix[0].size();
        int i = 0, j = 0;   // 指针
        while(count < m * n){
            count++;
            ans.push_back(matrix[i][j]);
            if(state == 1){
                if(b.y == -1 || j + 1 < b.y){
                    if(j != n - 1) j++;
                }
                else{
                    b.x = i;
                    b.y = j;
                    state = 2;
                    i++;
                }
            }
            else if(state == 2){
                if(c.x == -1 || i + 1 < c.x){
                    if(i != m - 1) i++;
                }
                else{
                    c.x = i;
                    c.y = j;
                    state = 3;
                    j--;
                }
            }
            else if(state == 3){
                if(d.y == -1 || j - 1 > d.y){
                    if(j != 0) j--;
                }
                else{
                    d.x = i;
                    d.y = j;
                    state = 4;
                    i--;
                }
            }
            else if(state == 4){
                if(i - 1 > a.x){
                    i--;
                }
                else{
                    a.x = i;
                    a.y = j;
                    j++;
                    state = 1;
                }
            }
        }
        return ans;
    }
};
// @lc code=end

