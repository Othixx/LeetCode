/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const isVisited = new Array(m)
    let maxSize = 0
    for (let i = 0; i < m; i++) {
        isVisited[i] = new Array(n).fill(false)
    }

    const dfs = (i, j) => {
        // 检查上、下、左、右四个方向的面积
        let size = 1
        isVisited[i][j] = true
        if (i - 1 >= 0 && !isVisited[i - 1][j] && grid[i - 1][j] === 1) size += dfs(i - 1, j)
        if (i + 1 < m && !isVisited[i + 1][j] && grid[i + 1][j] === 1) size += dfs(i + 1, j)
        if (j - 1 >= 0 && !isVisited[i][j - 1] && grid[i][j - 1] === 1) size += dfs(i, j - 1)
        if (j + 1 < n && !isVisited[i][j + 1] && grid[i][j + 1] === 1) size += dfs(i, j + 1)
        return size
    }

    // 遍历网格图
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!isVisited[i][j]) {
                if (grid[i][j] === 1) {
                    maxSize = Math.max(maxSize, dfs(i, j))
                }
                else isVisited[i][j] = true
            }
        }
    }
    return maxSize
};

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(maxAreaOfIsland(grid))