/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  // 建立边权图
  const graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(n).fill(Infinity)
    graph[i][i] = 0
  }
  for (const [from, to, weight] of edges) {
    graph[from][to] = weight
    graph[to][from] = weight
  }

  const memo = new Array(n)
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(n)
    for (let j = 0; j < n; j++) {
      memo[i][j] = new Array(n).fill(-1)
    }
  }
  const dfs = (k, i, j) => {
    if (k === -1) return graph[i][j]
    if (memo[k][i][j] !== -1) return memo[k][i][j] // 之前计算过
    memo[k][i][j] = Math.min(
      dfs(k - 1, i, j),
      dfs(k - 1, i, k) + dfs(k - 1, k, j),
    )
    return memo[k][i][j]
  }

  let ans = 0
  let minCnt = n
  for (let i = 0; i < n; i++) {
    let cnt = 0
    for (let j = 0; j < n; j++) {
      if (j !== i && dfs(n - 1, i, j) <= distanceThreshold) cnt++
    }
    if (cnt <= minCnt) {
      minCnt = cnt
      ans = i
    }
  }
  return ans
}

const n = 4
const edges = [
  [0, 1, 3],
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 1],
]
const distanceThreshold = 4
console.log(findTheCity(n, edges, distanceThreshold))
