/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function (board) {
  const n = board.length
  const dp = new Array(n) // dp[i][j]表示到达(i, j)的最大得分以及方案数[maxScore, plan]
  const MOD = 10 ** 9 + 7
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(-1)
  }
  dp[n - 1][n - 1] = [0, 1]
  const dfs = (i, j) => {
    if (i === n || j === n) return [0, 0]
    if (board[i][j] === 'X') {
      // 障碍物，无法到达
      dp[i][j] = [0, 0]
      return dp[i][j]
    }
    if (dp[i][j] !== -1) return dp[i][j]
    // 计算可能的最大得分
    const right = dfs(i, j + 1)
    const down = dfs(i + 1, j)
    const rightDown = dfs(i + 1, j + 1)
    if (board[i][j] !== 'E') {
      let maxScore = 0
      if (right[1] !== 0)
        maxScore = Math.max(maxScore, right[0] + Number(board[i][j]))
      if (down[1] !== 0)
        maxScore = Math.max(maxScore, down[0] + Number(board[i][j]))
      if (rightDown[1] !== 0)
        maxScore = Math.max(maxScore, rightDown[0] + Number(board[i][j]))
      let plan = 0
      if (right[1] !== 0 && maxScore === right[0] + Number(board[i][j]))
        plan = (plan + right[1]) % MOD
      if (down[1] !== 0 && maxScore === down[0] + Number(board[i][j]))
        plan = (plan + down[1]) % MOD
      if (rightDown[1] !== 0 && maxScore === rightDown[0] + Number(board[i][j]))
        plan = (plan + rightDown[1]) % MOD
      dp[i][j] = [maxScore, plan]
    } else {
      let maxScore = 0
      if (right[1] !== 0) maxScore = Math.max(maxScore, right[0])
      if (down[1] !== 0) maxScore = Math.max(maxScore, down[0])
      if (rightDown[1] !== 0) maxScore = Math.max(maxScore, rightDown[0])
      let plan = 0
      if (right[1] !== 0 && maxScore === right[0])
        plan = (plan + right[1]) % MOD
      if (down[1] !== 0 && maxScore === down[0]) plan = (plan + down[1]) % MOD
      if (rightDown[1] !== 0 && maxScore === rightDown[0])
        plan = (plan + rightDown[1]) % MOD
      dp[i][j] = [maxScore, plan]
    }
    return dp[i][j]
  }
  return dfs(0, 0)
}
