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
        if (node.left && node.left.val === node.val) temp = left_lian + 1;
        let right_lian = dfs(node.right);
        if (node.right && node.right.val === node.val) {
            temp = right_lian + 1 > temp ? right_lian + 1 : temp;
        }
        ans = Math.max(ans, left_lian + right_lian + 1);
        return temp;
    }

    dfs(root);
    return ans;
};

let root = [5,4,5,1,1,null,5];
console.log(longestUnivaluePath(root)); // 2