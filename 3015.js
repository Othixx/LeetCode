/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
    const dis = new Array(n)
    const isVisited = new Array(n).fill(false)
    const result = new Array(n).fill(0)
    const g = new Array(n)
    for (let i = 0; i < n; i++) {
        g[i] = new Array()
    }
    for (let i = 0; i < n - 1; i++) {
        g[i].push(i + 1)
        g[i + 1].push(i)
    }
    if (x !== y) {
        g[x - 1].push(y - 1)
        g[y - 1].push(x - 1)
    }

    for (let i = 0; i < n; i++) {
        // BFS
        const q = [i]
        dis.fill(Infinity)
        dis[i] = 0
        while (q.length > 0) {
            const node = q[0]
            for (const item of g[node]) {
                if (dis[item] === Infinity) {
                    q.push(item)
                    dis[item] = dis[node] + 1
                }
            }
            q.shift()
        }
        for (let j = 0; j < n; j++) {
            result[dis[j] - 1]++
        }
    }
    return result
};

const n = 3
const x = 1
const y = 3
console.log(countOfPairs(n, x, y))
