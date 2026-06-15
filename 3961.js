/**
 * @param {number[][]} units
 * @return {number}
 */
var maxRatings = function (units) {
  // 找出所有的次小值，牺牲最小的那个次小值，将它换成所有的最小值
  // 特殊情况，如果列元素为1，直接返回所有的和
  const m = units.length
  const n = units[0].length
  if (n === 1) {
    let ans = 0
    for (const unit of units) {
      ans += unit[0]
    }
    return ans
  }
  if (m === 1) return Math.min(...units[0])
  let mn = Infinity // 每一行的最小值的最小值
  let mn2 = Infinity // 每一行的次小值的最小值
  let ans = 0
  for (const unit of units) {
    let mn_line = Infinity // 这一行的最小值
    let mn2_line = Infinity // 这一行的次小值
    for (const item of unit) {
      if (item <= mn_line) {
        mn2_line = mn_line
        mn_line = item
      } else if (item < mn2_line) {
        mn2_line = item
      }
    }
    ans += mn2_line
    mn = Math.min(mn, mn_line)
    mn2 = Math.min(mn2, mn2_line)
  }
  ans -= mn2
  ans += mn
  return ans
}

const units = [
  [1, 3],
  [2, 2],
]
console.log(maxRatings(units))
