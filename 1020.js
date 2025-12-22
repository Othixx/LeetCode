/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const isVisited = new Array(m)
    for (let i = 0; i < m; i++) {
        isVisited[i] = new Array(n).fill(false)
    }

    // 从边界开始遍历
    const dfs = (i, j) => {
        isVisited[i][j] = true
        if (i - 1 >= 0 && grid[i - 1][j] === 1 && !isVisited[i - 1][j]) dfs(i - 1, j)
        if (i + 1 < m && grid[i + 1][j] === 1 && !isVisited[i + 1][j]) dfs(i + 1, j)
        if (j - 1 >= 0 && grid[i][j - 1] === 1 && !isVisited[i][j - 1]) dfs(i, j - 1)
        if (j + 1 < n && grid[i][j + 1] === 1 && !isVisited[i][j + 1]) dfs(i, j + 1)
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j]) dfs(0, j)
        if (grid[m - 1][j]) dfs(m - 1, j)
    }
    for (let i = 0; i < m; i++) {
        if (grid[i][0]) dfs(i, 0)
        if (grid[i][n - 1]) dfs(i, n - 1)
    }

    let cnt = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!isVisited[i][j] && grid[i][j] === 1) cnt++
        }
    }
    return cnt
};

const grid = [[0,0,1,1,1,0,1,1,1,0,1],[1,1,1,1,0,1,0,1,1,0,0],[0,1,0,1,1,0,0,0,0,1,0],[1,0,1,1,1,1,1,0,0,0,1],[0,0,1,0,1,1,0,0,1,0,0],[1,0,0,1,1,1,0,0,0,1,1],[0,1,0,1,1,0,0,0,1,0,0],[0,1,1,0,1,0,1,1,1,0,0],[1,1,0,1,1,1,0,0,0,0,0],[1,0,1,1,0,0,0,1,0,0,1]]
console.log(numEnclaves(grid))