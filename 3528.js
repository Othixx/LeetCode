/**
 * @param {number[][]} conversions
 * @return {number[]}
 */
var baseUnitConversions = function(conversions) {
    const MOD = 1000000007n;
    let n = conversions.length;
    let g = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        g[i] = [];
    }
    for (let i = 0; i < n; i++){
        g[conversions[i][0]].push([conversions[i][1], conversions[i][2]]);
    }
    // DFS
    let ans = new Array(n + 1);
    ans[0] = 1n;
    let dfs = function(i) {
        for (let k = 0; k < g[i].length; k++) {
            ans[g[i][k][0]] = (ans[i] * BigInt(g[i][k][1])) % MOD;
            dfs(g[i][k][0]);
        }
    }
    dfs(0);
    // 将 BigInt 转换为 Number 后返回
    return ans.map(x => Number(x));
};

let conversions = [[0,2,749669636],[2,3,24357539],[3,4,116463781],[4,1,715055284]];
console.log(baseUnitConversions(conversions)); // [1,2,6]