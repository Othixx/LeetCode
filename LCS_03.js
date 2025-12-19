/**
 * @param {string[]} gridStr
 * @return {number}
 */
var largestArea = function (gridStr) {
    const m = gridStr.length
    const n = gridStr[0].length
    const grid = new Array(m)
    for (let i = 0; i < m; i++) {
        const temp = gridStr[i]
        grid[i] = []
        for (let j = 0; j < n; j++) {
            grid[i].push(parseInt(temp[j]))
        }
    }
    const isVisited = new Array(m)
    for (let i = 0; i < m; i++) {
        isVisited[i] = new Array(n).fill(false)
    }
    let ans = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let flag = false    // 是否与走廊相邻
            const dfs = (i, j) => {
                isVisited[i][j] = true
                // if (flag) return 0
                let size = 1
                let num = grid[i][j]
                if (grid[i][j] === 0) flag = true
                if (!flag) {
                    // 检查周围是否有0
                    if (i === 0 || j === 0 || i === m - 1 || j === n - 1) flag = true
                    else if (grid[i - 1][j] === 0 || grid[i + 1][j] === 0 || grid[i][j - 1] === 0 || grid[i][j + 1] === 0) flag = true
                }
                // if (flag) return 0
                // 不用检查了，直接dfs遍历完就行
                if (i - 1 >= 0 && grid[i - 1][j] === num && !isVisited[i - 1][j]) size += dfs(i - 1, j)
                if (i + 1 < m && grid[i + 1][j] === num && !isVisited[i + 1][j]) size += dfs(i + 1, j)
                if (j - 1 >= 0 && grid[i][j - 1] === num && !isVisited[i][j - 1]) size += dfs(i, j - 1)
                if (j + 1 < n && grid[i][j + 1] === num && !isVisited[i][j + 1]) size += dfs(i, j + 1)
                return size
            }
            if (!isVisited[i][j]) {
                let size = dfs(i, j)
                if (!flag) ans = Math.max(ans, size)
            }
        }
    }
    return ans
};

const grid = ["1111","1101","1111"]
console.log(largestArea(grid))