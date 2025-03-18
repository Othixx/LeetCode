/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    if (root === null) return 0;
    let ans = 1;
    let dfs = function (node) {
        // 返回当前结点的最长同值路径链
        if (node === null) return 0;
        let left_lian = dfs(node.left);
        let temp = 1;
        if (node.left && node.left.val === node.val) {
            temp = left_lian + 1;
        }
        let right_lian = dfs(node.right);
        if (node.right && node.right.val === node.val) {
            temp = right_lian + 1 > temp ? right_lian + 1 : temp;
        }
        if (node.left && node.right && node.left.val === node.val && node.right.val === node.val) {
            ans = Math.max(ans, left_lian + right_lian + 1);
        }
        else if (node.right && node.right.val === node.val) {
            ans = Math.max(ans, right_lian + 1);
        }
        else if (node.left && node.left.val === node.val) {
            ans = Math.max(ans, left_lian + 1);
        }
        return temp;
    }

    dfs(root);
    return ans - 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestUnivaluePath;
// @after-stub-for-debug-end