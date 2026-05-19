/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  const map = new Map()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) map.get(nums[i]).push(i)
    else map.set(nums[i], [i])
  }
  let ans = Infinity
  map.forEach((value, key) => {
    let t = 0
    for (let i = 0; i < value.length; i++) {
      let left = value[i],
        right = 0
      if (i === value.length - 1) right = value[0] + n
      else right = value[i + 1]
      t = Math.max(t, Math.floor((right - left) / 2))
    }
    ans = Math.min(ans, t)
    if (ans === 0) return ans
  })
  return ans
}

const nums = [1, 2, 1, 2]
console.log(minimumSeconds(nums))
