// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem297.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=297 lang=cpp
 *
 * [297] 二叉树的序列化与反序列化
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

class Codec {
private:
    bool flag;  // 标记data是否遍历完成
    int i;  // 遍历data的指针
public:
    // string temp = "";
    // TreeNode* ans;
    // Encodes a tree to a single string.

    void create(TreeNode* root, string& ret){
        if(root){   
            ret += to_string(root->val);
            ret += ',';
            create(root->left, ret);
            create(root->right, ret);
        }
        else{
            ret += "none,";
        }
    }

    string serialize(TreeNode* root) {
        string ret;
        create(root, ret);

        return ret;
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        i = 0;
        flag = false;
        TreeNode* ans;

        visit(ans, data);

        return ans;
    }

    void visit(TreeNode* root, string data){
        if(flag){
            return;
        }
        else{
            string a ="";
            while(data[i] != ','){
                a += data[i];
                i++;
            }
            if(i == data.size()-1){
                flag = true;
            }
            i++;

            if(a != "none" && a != ""){
                root = new TreeNode(stoi(a));
                visit(root->left, data);
                visit(root->right, data);
            }
        }
        return;
    }
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));
// @lc code=end

