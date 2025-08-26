/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
var maxSumBST = function(root) {
    let ans = 0
    let searchBST = function (root, min, max) {
        if (root === null) return [true, 0]
        if (root.val > min && root.val < max) {
            const left = searchBST(root.left, min, root.val)
            const right = searchBST(root.right, root.val, max)
            if (left[0] && right[0]) {
                const temp = left[1] + right[1] + root.val
                ans = Math.max(ans, temp)
                return [true, temp]
            }
            else {
                return [false, 0]
            }
        }
        else {
            // 把当前节点当成树的根节点
            const left = searchBST(root.left, -Infinity, root.val)
            const right = searchBST(root.right, root.val, Infinity)
            if (left[0] && right[0]) {
                ans = Math.max(ans, left[1] + right[1] + root.val)
            }
            return [false, 0]
        }
    }

    searchBST(root, -Infinity, Infinity)
    return ans;
};
// @lc code=end

