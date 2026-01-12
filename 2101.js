/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const n = bombs.length
    const graphList = new Array(n)
    for (let i = 0; i < n; i++) {
        graphList[i] = new Array()
        const [xi, yi, ri] = bombs[i]
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                const [xj, yj, rj] = bombs[j]
                const dis = Math.sqrt((xi - xj) ** 2 + (yi - yj) ** 2)
                if (dis <= ri) graphList[i].push(j)
            }
        }
    }

    const isVisited = new Array(n).fill(false)
    const dfs = (i) => {
        isVisited[i] = true
        for (const node of graphList[i]) {
            if (!isVisited[node]) dfs(node)
        }
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        let cnt = 0
        isVisited.fill(false)
        dfs(i)
        for (let j = 0; j < n; j++) {
            if (isVisited[j]) cnt++
        }
        ans = Math.max(ans, cnt)
    }
    return ans
};

const bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]
console.log(maximumDetonation(bombs))