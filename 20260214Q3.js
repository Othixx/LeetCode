/**
 * @param {number[]} nums
 * @param {number[]} colors
 * @return {number}
 */
var rob = function (nums, colors) {
  const n = nums.length
  const memo = Array(n).fill(-1) // -1 表示没有计算过

  // dfs(i) 表示从 nums[0] 到 nums[i] 最多能偷多少
  function dfs(i) {
    if (memo[i] !== -1) return memo[i]
    if (i === 0) {
      memo[i] = nums[0]
      return memo[i]
    }
    if (i === 1) {
      if (colors[1] === colors[0]) {
        memo[i] = Math.max(nums[1], nums[0])
      } else {
        memo[i] = nums[0] + nums[1]
      }
      return memo[i]
    }
    if (colors[i] !== colors[i - 1]) {
      memo[i] = dfs(i - 1) + nums[i]
    } else {
      memo[i] = Math.max(dfs(i - 1), dfs(i - 2) + nums[i])
    }
    return memo[i]
  }

  return dfs(n - 1)
}

const nums = [53, 26, 23]
const colors = [53, 1, 1]
console.log(rob(nums, colors))
