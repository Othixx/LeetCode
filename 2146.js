const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function(grid, pricing, start, k) {
    const m = grid.length
    const n = grid[0].length
    const gridDis = new Array(m)
    for (let i = 0; i < m; i++) {
        gridDis[i] = new Array(n).fill(-1)
    }
    gridDis[start[0]][start[1]] = 0
    const q = [[start[0], start[1]]]
    const prQueue = new PriorityQueue((a, b) => {
        if (gridDis[a[0]][a[1]] !== gridDis[b[0]][b[1]]) return gridDis[b[0]][b[1]] - gridDis[a[0]][a[1]]
        if (grid[a[0]][a[1]] !== grid[b[0]][b[1]]) return grid[b[0]][b[1]] - grid[a[0]][a[1]]
        if (a[0] !== b[0]) return b[0] - a[0]
        return b[1] - a[1]
    })
    if (grid[start[0]][start[1]] >= pricing[0] && grid[start[0]][start[1]] <= pricing[1]) prQueue.enqueue([start[0], start[1]])
    while (q.length > 0) {
        const item = q[0]
        if (prQueue.size() === k) {
            const pos = prQueue.front()
            if (gridDis[pos[0]][pos[1]] < gridDis[item[0]][item[1]]) break
        }
        let i = item[0], j = item[1]
        for (const [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== 0 && gridDis[x][y] === -1) {
                // 更新距离
                gridDis[x][y] = gridDis[i][j] + 1
                if (grid[x][y] >= pricing[0] && grid[x][y] <= pricing[1]) prQueue.enqueue([x, y])
                if (prQueue.size() > k) prQueue.dequeue()
                q.push([x, y])
            }
        }
        q.shift()
    }
    const ans = []
    while (prQueue.size() > 0) {
        ans.unshift(prQueue.dequeue())
    }
    return ans
};

const grid = [[1,1,1,1],[0,0,1,1],[2,3,4,3],[1,1,2,1]]
const pricing = [2,3]
const start = [0,0]
const k = 2
console.log(highestRankedKItems(grid, pricing, start, k))