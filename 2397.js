/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function(matrix, numSelect) {
    // 选或不选
    const s = []
    const m = matrix.length
    const n = matrix[0].length
    let ans = 0
    let check = function () {
        let rows = 0
        for (let i = 0; i < m; i++) {
            let j = 0
            for (; j < n; j++) {
                if (matrix[i][j] === 1 && s.find(item => item === j) === undefined) break
            }
            if (j === n) rows++
        }
        return rows
    }
    let dfs = function (c) {
        if (s.length === numSelect) {
            // 判断行数
            ans = Math.max(ans, check())
            return
        }
        if (n - c === numSelect - s.length) {
            // 当前开始必须选
            s.push(c)
            dfs(c + 1)
        }
        else {
            // 选或不选
            dfs(c + 1)
            s.push(c)
            dfs(c + 1)
        }
        s.pop()
    }

    dfs(0)
    return ans
};

let matrix = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]]
let numSelect = 2
console.log(maximumRows(matrix, numSelect))