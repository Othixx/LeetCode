/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length
    const n = mat[0].length
    const q = []
    const isVisited = new Array(m)
    for (let i = 0; i < m; i++) {
        isVisited[i] = new Array(n).fill(false)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                isVisited[i][j] = true
                q.push([i, j])
            }
        }
    }
    while (q.length > 0) {
        const item = q[0]
        let i = item[0], j = item[1]
        for (const [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
            if (x >= 0 && x < m && y >= 0 && y < n && !isVisited[x][y]) {
                isVisited[x][y] = true
                mat[x][y] = mat[i][j] + 1
                q.push([x, y])
            }
        }
        q.shift()
    }
    return mat
};

const mat = [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]
console.log(updateMatrix(mat))