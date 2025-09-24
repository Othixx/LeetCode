/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    const from = []
    const to = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 1) {
                for (let k = 1; k < grid[i][j]; k++) {
                    from.push([i, j])
                }
            }
            else if (grid[i][j] === 0) to.push([i, j])
        }
    }

    // 枚举全排列，对to进行排列
    const perm = []
    const calculate = (from, to) => {
        // 计算曼哈顿距离
        let dis = 0
        for (let i = 0; i < from.length; i++) {
            const from_i = from[i]
            const to_i = to[i]
            dis += Math.abs(from_i[0] - to_i[0]) + Math.abs(from_i[1] - to_i[1])
        }
        return dis
    }

    let ans = Infinity
    const createPerm = (arr) => {
        if (arr.length === 0) {
            ans = Math.min(calculate(from, perm), ans)
        }
        for (let i = 0; i < arr.length; i++) {
            perm.push(arr[i])
            const newArr = new Array(...arr)
            newArr.splice(i, 1)
            createPerm(newArr)
            perm.pop()
        }
    }

    createPerm(to)
    return ans
};

const grid = [[1,1,0],[1,1,1],[1,2,1]]
console.log(minimumMoves(grid))