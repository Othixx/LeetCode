/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const n = nums.length
  // memo[i][j]: 以i结尾，最多j次相邻不同的最长子序列长度
  const memo = Array.from({ length: n }, () => Array(k + 1).fill(-1))
  // base case：任意j，第0个元素单独选长度为1
  for (let j = 0; j <= k; j++) {
    memo[0][j] = 1
  }

  const dfs = (i, j) => {
    if (j < 0) return -Infinity
    if (memo[i][j] !== -1) return memo[i][j]

    let mx = 1 // 【修复点1：至少可以只选取自身】
    for (let p = 0; p < i; p++) {
      if (nums[p] !== nums[i]) {
        const tmp = dfs(p, j - 1)
        if (tmp !== -Infinity) mx = Math.max(mx, tmp + 1)
      } else {
        const tmp = dfs(p, j)
        if (tmp !== -Infinity) mx = Math.max(mx, tmp + 1)
      }
    }
    memo[i][j] = mx
    return mx
  }

  // 主动计算全部i的状态（更稳妥）
  for (let i = 0; i < n; i++) {
    dfs(i, k)
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, memo[i][k])
  }
  return ans
}

const nums = [29, 30, 30]
const k = 0
console.log(maximumLength(nums, k))
