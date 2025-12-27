/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length
    const n = maze[0].length
    const isVisited = new Array(m)
    for (let i = 0; i < m; i++) {
        isVisited[i] = new Array(n).fill(false)
    }
    // let step = 0
    const q = [[...entrance, 0]]
    isVisited[entrance[0]][entrance[1]] = true
    while (q.length > 0) {
        const item = q[0]
        let i = item[0], j = item[1]
        for (const [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
            if (x >= 0 && x < m && y >= 0 && y < n && maze[x][y] === '.' && !isVisited[x][y]) {
                if (x === 0 || x === m - 1 || y === 0 || y === n - 1) return item[2] + 1
                isVisited[x][y] = true
                q.push([x, y, item[2] + 1])
            }
        }
        q.shift()
    }
    return -1
};

const maze = [["+",".","+","+","+","+","+"],["+",".","+",".",".",".","+"],["+",".","+",".","+",".","+"],["+",".",".",".","+",".","+"],["+","+","+","+","+",".","+"]]
const entrance = [0,1]
console.log(nearestExit(maze, entrance))