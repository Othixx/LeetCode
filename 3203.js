/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
    // 构造树，假设小的结点为父节点，大的结点为儿子结点
    let n = edges1.length + 1;
    let m = edges2.length + 1;
    let tree_1 = new Array(n);
    for (let i = 0; i < n; i++) {
        tree_1[i] = new Array();
    }
    let tree_2 = new Array(m);
    for (let i = 0; i < m; i++) {
        tree_2[i] = new Array();
    }

    for (let i = 0; i < n - 1; i++) {
        if (edges1[i][0] < edges1[i][1]) tree_1[edges1[i][0]].push(edges1[i][1]);
        else tree_1[edges1[i][1]].push(edges1[i][0]);
    }
    for (let i = 0; i < m - 1; i++) {
        if (edges2[i][0] < edges2[i][1]) tree_2[edges2[i][0]].push(edges2[i][1]);
        else tree_2[edges2[i][1]].push(edges2[i][0]);
    }

    // 求单棵树的最小直径
    let ans = 0;
    let dfs = function (tree, node) {
        // 求出经过当前结点的最长链
        if (tree[node].length === 0) return 1;
        // 标记前2大的儿子结点最长链
        let max_1 = 0;
        let max_2 = 0;
        for (let i = 0; i < tree[node].length; i++) {
            let temp = dfs(tree, tree[node][i]);
            if (temp > max_1) max_1 = temp;
            else if (temp > max_2) max_2 = temp;
        }
        if (max_1 + max_2 + 1 > ans) ans = max_1 + max_2 + 1;
        return max_1 + 1;
    }

    dfs(tree_1, 0);
    let d1 = ans - 1;
    ans = 0;
    dfs(tree_2, 0);
    let d2 = ans - 1;
    return Math.max(d1, d2, Math.floor((d1 + 1) / 2) + Math.floor((d2 + 1) / 2) + 1);
};

let edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]];
let edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]];
console.log(minimumDiameterAfterMerge(edges1, edges2)); // 6