// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem236.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=236 lang=cpp
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> path_p;
    vector<TreeNode*> path_q;

    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // 寻找路
        vector<TreeNode*> path;   // 存储临时路
        search(root, p, q, path);

        // 从后往前访问path，找到相同的结点停止
        for(int i = path_p.size() - 1; i >= 0; i--){
            for(int j = path_q.size() - 1; j >= 0; j--){
                if(path_p[i] == path_q[j]) return path_p[i];
            }
        }

        return NULL;
    }

    void search(TreeNode* root, TreeNode* p, TreeNode* q, vector<TreeNode*> path){
        // 检查path是否都存在，存在直接跳出
        if(Isfull()) return;

        path.push_back(root);

        // 如果是当前结点，输出path
        if(root->val == p->val) copypath(path_p, path);
        else if(root->val == q->val) copypath(path_q, path);

        // 搜索
        if(root->left) search(root->left, p, q, path);
        if(root->right) search(root->right, p, q, path);
        path.pop_back();

        return;
    }

    void copypath(vector<TreeNode*> path, vector<TreeNode*> temp){
        for(int i = 0; i < temp.size(); i++){
            path.push_back(temp[i]);
        }
        return;
    }

    bool Isfull(){
        if(path_p.size() != 0 && path_q.size() != 0) return true;
        return false;
    }

};
// @lc code=end

