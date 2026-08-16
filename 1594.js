/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const MOD = BigInt(10 ** 9 + 7)
  const m = grid.length
  const n = grid[0].length

  // mn[i][j]、mx[i][j] 为 BigInt，null代表未计算
  const mn = new Array(m)
  const mx = new Array(m)
  for (let i = 0; i < m; i++) {
    mn[i] = new Array(n).fill(null)
    mx[i] = new Array(n).fill(null)
  }
  mn[0][0] = BigInt(grid[0][0])
  mx[0][0] = BigInt(grid[0][0])

  const dfs = (i, j) => {
    // 已经计算过直接返回
    if (mn[i][j] !== null && mx[i][j] !== null) {
      return [mn[i][j], mx[i][j]]
    }
    let minPath = null
    let maxPath = null
    const node = BigInt(grid[i][j])

    // 上方、左方两个方向
    for (const [x, y] of [
      [i - 1, j],
      [i, j - 1],
    ]) {
      if (x >= 0 && x < m && y >= 0 && y < n) {
        const [lastMin, lastMax] = dfs(x, y)
        const p1 = lastMin * node
        const p2 = lastMax * node

        // 第一次赋值
        if (minPath === null) {
          minPath = p1 < p2 ? p1 : p2
          maxPath = p1 > p2 ? p1 : p2
        } else {
          // 后续不断更新最小最大值
          minPath = minPath < p1 ? minPath : p1
          minPath = minPath < p2 ? minPath : p2
          maxPath = maxPath > p1 ? maxPath : p1
          maxPath = maxPath > p2 ? maxPath : p2
        }
      }
    }
    mn[i][j] = minPath
    mx[i][j] = maxPath
    return [minPath, maxPath]
  }

  const [_, maxPath] = dfs(m - 1, n - 1)
  if (maxPath < 0n) return -1
  return Number(maxPath % MOD)
}
