/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
    const n = obstacles.length - 1
    const jumpTimes = new Array(3)
    for (let i = 0; i < 3; i++) {
        jumpTimes[i] = new Array(n + 1).fill(Infinity)
    }
    jumpTimes[1][0] = 0
    const queue = [[1, 0]]
    while (queue.length > 0) {
        const item = queue[0]
        queue.shift()
        let i = item[0], j = item[1]
        for (const [x, y] of [[0, j], [1, j], [2, j], [i, j + 1]]) {
            if (y <= n && !(x === i && y === j) && jumpTimes[x][y] === Infinity && obstacles[y] !== x + 1) {
                if (y === j) {
                    jumpTimes[x][y] = jumpTimes[i][j] + 1
                    queue.push([x, y])
                }
                else {
                    jumpTimes[x][y] = jumpTimes[i][j]
                    if (y === n) return jumpTimes[x][y]
                    queue.unshift([x, y])
                }
            }
        }
    }
};

const obstacles = [0,2,1,0,3,0]
console.log(minSideJumps(obstacles))