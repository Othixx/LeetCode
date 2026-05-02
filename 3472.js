/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestPalindromicSubsequence = function (s, k) {
  const cal_Op = (s1, s2) => {
    const asc_s1 = s1.charCodeAt(0)
    const asc_s2 = s2.charCodeAt(0)
    return Math.min(Math.abs(asc_s1 - asc_s2), 26 - Math.abs(asc_s1 - asc_s2))
  }

  const n = s.length
  const memo = new Array(n)
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(n)
    for (let j = 0; j < n; j++) {
      memo[i][j] = new Array(k + 1).fill(-1)
    }
  }
  const dfs = (i, j, k) => {
    if (k < 0) return -Infinity
    if (memo[i][j][k] !== -1) return memo[i][j][k]
    if (i === j) return 1
    else if (i > j) return 0
    else if (i < j) {
      memo[i][j][k] = Math.max(
        dfs(i + 1, j - 1, k - cal_Op(s[i], s[j])) + 2,
        dfs(i + 1, j, k),
        dfs(i, j - 1, k),
      )
      return memo[i][j][k]
    }
  }
  return dfs(0, n - 1, k)
}

const s = 'abcde'
const k = 2
console.log(longestPalindromicSubsequence(s, k))
