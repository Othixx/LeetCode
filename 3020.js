/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const map = new Map() // 每个元素对应的次数
  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }
  let ans = 0
  for (const [num, times] of map) {
    // 特判num = 1
    if (num === 1) {
      const temp = map.get(num)
      if (temp % 2 === 0) ans = Math.max(ans, temp - 1)
      else ans = Math.max(ans, temp)
    } else {
      // [假设为最小的那个数，出现次数]
      let temp = num
      let cnt = 0
      while (map.get(temp) >= 2) {
        cnt += 2
        temp = temp * temp
      }
      if (map.has(temp)) cnt++
      else cnt--
      ans = Math.max(ans, cnt)
    }
  }
  return ans
}

const nums = [4, 36, 9, 16, 1, 1, 4, 121, 64, 4]
console.log(maximumLength(nums))
