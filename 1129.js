/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const redGraph = new Array(n)
    const blueGraph = new Array(n)
    for (let i = 0; i < n; i++) {
        redGraph[i] = new Array()
        blueGraph[i] = new Array()
    }
    for (const [x, y] of redEdges) {
        redGraph[x].push(y)
    }
    for (const [x, y] of blueEdges) {
        blueGraph[x].push(y)
    }

    // 先走蓝边
    // 0为blue，1为red
    const isVisitedBlue = new Array(n).fill(false)  // 通过蓝边到达
    const isVisitedRed = new Array(n).fill(false)   // 通过红边到达
    let q = [[0, 0], [0, 1]]    // [[当前节点，下一个应该选择的边的颜色]]
    const minDisBlue = new Array(n).fill(Infinity)     // 通过蓝边到达
    const minDisRed = new Array(n).fill(Infinity)      // 通过红边到达

    minDisBlue[0] = 0
    minDisRed[0] = 0
    isVisitedRed[0] = true
    isVisitedBlue[0] = true
    while (q.length > 0) {
        const node = q[0]
        if (node[1] === 0) {
            // 走蓝边
            for (const item of blueGraph[node[0]]) {
                if (!isVisitedBlue[item]) {
                    isVisitedBlue[item] = true
                    minDisBlue[item] = minDisRed[node[0]] + 1
                    q.push([item, 1])
                }
            }
        }
        else {
            // 走红边
            for (const item of redGraph[node[0]]) {
                if (!isVisitedRed[item]) {
                    isVisitedRed[item] = true
                    minDisRed[item] = minDisBlue[node[0]] + 1
                    q.push([item, 0])
                }
            }
        }
        q.shift()
    }

    const ans = new Array(n)
    for (let i = 0; i < n; i++) {
        ans[i] = Math.min(minDisBlue[i], minDisRed[i])
        if (ans[i] === Infinity) ans[i] = -1
    }
    return ans
};

const n = 3
const redEdges = [[0, 1], [1, 2]]
const blueEdges = []
console.log(shortestAlternatingPaths(n, redEdges, blueEdges))