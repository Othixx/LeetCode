/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const n = s.length
  const memo = new Array(n)
  const ASCII_a = 'a'.charCodeAt(0)
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(26).fill(-1)
  }
  for (let j = 0; j < 26; j++) {
    memo[0][j] = 0
  }
  memo[0][s.charCodeAt(0) - 'a'.charCodeAt(0)] = 1
  const dfs = (i, c) => {
    if (memo[i][c] !== -1) return memo[i][c]
    // 如果选s[i]作为理想字符串的字符
    if (s.charCodeAt(i) - ASCII_a === c) {
      for (
        let j = Math.max(0, s.charCodeAt(i) - ASCII_a - k);
        j <= Math.min(25, s.charCodeAt(i) - ASCII_a + k);
        j++
      ) {
        memo[i][c] = Math.max(memo[i][c], 1 + dfs(i - 1, j))
      }
    }
    // 其余情况
    memo[i][c] = Math.max(memo[i][c], dfs(i - 1, c))
    return memo[i][c]
  }
  for (let j = 0; j < 26; j++) {
    dfs(n - 1, j)
  }
  return Math.max(...memo[n - 1])
}

const s = 'acfgbd'
const k = 2
console.log(longestIdealString(s, k))
