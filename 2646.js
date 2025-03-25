/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
    // 建树
    let tree = new Array(n);
    for (let i = 0; i < n; i++) {
        tree[i] = new Array();
    }
    for (let i = 0; i < edges.length; i++) {
        tree[edges[i][0]].push(edges[i][1]);
        tree[edges[i][1]].push(edges[i][0]);
    }

    let cnt = new Array(n).fill(0);

    let dfs = function (start, end, flag, father) {
        // 统计当前路径下有哪些结点出现了
        if (start === end) {
            cnt[end]++;
            return true;
        }
        for (let i = 0; i < tree[start].length; i++) {
            if (tree[start][i] !== father) {
                flag = dfs(tree[start][i], end, false, start);
                if (flag) {
                    cnt[start]++;
                    return true;
                }
            }
        }
        return false;
    }

    for(let i = 0; i < trips.length; i++){
        dfs(trips[i][0], trips[i][1], false);
    }

    // // 更新原始price
    // for(let i = 0; i < n; i++){
    //     price[i] = cnt[i] * price[i];
    // }

    // 类似 337. 打家劫舍 III
    function dp(x, fa) {
        let not_halve = price[x] * cnt[x]; // x 不变
        let halve = Math.floor(not_halve / 2); // x 减半
        for (const y of g[x]) {
            if (y !== fa) {
                const [nh, h] = dp(y, x); // 计算 y 不变/减半的最小价值总和
                not_halve += Math.min(nh, h); // x 不变，那么 y 可以不变或者减半，取这两种情况的最小值
                halve += nh; // x 减半，那么 y 只能不变
            }
        }
        return [not_halve, halve];
    }
    return Math.min(...dp(0, -1))
};

let n = 4;
let edges = [[0,1],[1,2],[1,3]];
let price = [2,2,10,6];
let trips = [[0,3],[2,1],[2,3]]
console.log(minimumTotalPrice(n, edges, price, trips));