/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  let xorAns = 0
  const map = new Map()
  map.set(0, 1)
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === 0) ans++
    xorAns ^= nums[i]
    if (map.has(xorAns)) {
      ans += map.get(xorAns)
      map.set(xorAns, map.get(xorAns) + 1)
    } else map.set(xorAns, 1)
  }
  return ans
}

const nums = [4, 3, 1, 2, 4]
console.log(beautifulSubarrays(nums))
