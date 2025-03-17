/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
    let n = parent.length;
    let hashList = new Array(n).fill().map(() => []);
    for (let i = 1; i < n; i++) {
        hashList[parent[i]].push(i);
    }

    let ans = 1;
    let dfs = function (node) {
        // 返回经过该结点的最长链
        let max_lian = 1;   // 该结点本身
        let max_lian_2 = 1; // 第二名
        if (hashList[node].length === 0) return max_lian;   //该结点为叶子节点
        for (let i = 0; i < hashList[node].length; i++) {
            // 和当前结点如果相同直接寄
            if (s[node] !== s[hashList[node][i]]) {
                let temp = dfs(hashList[node][i]);
                if (temp + 1 > max_lian) max_lian = temp + 1;
                else if (temp + 1 > max_lian_2) max_lian_2 = temp + 1;
            }
            else{
                dfs(hashList[node][i]);
            }
        }
        ans = Math.max(ans, max_lian, max_lian + max_lian_2 - 1);
        return max_lian;
    }
    dfs(0);
    return ans;
};

let parent = [-1, 0, 1, 2, 3];
let s = "aabcd";
console.log(longestPath(parent, s)); // 4