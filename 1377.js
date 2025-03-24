/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
    if (target === 1) return 0;
    // 建图
    let tree = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        tree[i] = new Array();
    }
    for (let i = 0; i < n - 1; i++) {
        tree[edges[i][0]].push(edges[i][1]);
        tree[edges[i][1]].push(edges[i][0]);
    }

    let memo = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        memo[i] = new Array(2);
    }
    memo[0][0] = -1;
    memo[0][1] = 1;

    let dfs = function (node, father) {
        memo[node][0] = memo[father][0] + 1;
        if (father === 1) memo[node][1] = memo[father][1] * tree[father].length;
        else if(father === 0) memo[node][1] = 1;
        else memo[node][1] = memo[father][1] * (tree[father].length - 1);
        for (let i = 0; i < tree[node].length; i++) {
            if (tree[node][i] !== father) {
                dfs(tree[node][i], node);
            }
        }
    }

    dfs(1, 0);

    let isLeaf = function (node) {
        if (tree[node].length === 1 && node !== 1) return true;
        return false;
    }

    if (isLeaf(target)) {
        // console.log(1 / memo[target][1]);
        if (t >= memo[target][0]) return 1 / memo[target][1];
        else return 0;
    }
    else {
        // console.log(1 / memo[target][1]);
        if (t === memo[target][0]) return 1 / memo[target][1];
        else return 0;
    }
};

let n = 7;
let edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]];
let t = 2;
let target = 4;
console.log(frogPosition(n, edges, t, target));