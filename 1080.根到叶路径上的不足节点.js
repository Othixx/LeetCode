/*
 * @lc app=leetcode.cn id=1080 lang=javascript
 *
 * [1080] 根到叶路径上的不足节点
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
    let deleteNode = function (root, sum) {
        if (root.left === null && root.right === null) {
            if (sum + root.val < limit) return null;
            else return root;
        }
        else {
            if (root.left) root.left = deleteNode(root.left, sum + root.val);
            if (root.right) root.right = deleteNode(root.right, sum + root.val);
            if (root.left === null && root.right === null) return null;
            else return root;
        }
    };
    
    return deleteNode(root, 0);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sufficientSubset;
// @after-stub-for-debug-end