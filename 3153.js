/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  let len = 0
  let num = nums[0]
  while (num > 0) {
    len++
    num = Math.floor(num / 10)
  }
  let ans = 0

  for (let i = 0; i < len; i++) {
    const numCnt = new Array(10).fill(0)
    for (let j = 0; j < nums.length; j++) {
      numCnt[nums[j] % 10]++
      nums[j] = Math.floor(nums[j] / 10)
    }
    let sum = 0
    for (let j = 0; j < 10; j++) {
      sum += numCnt[j]
    }
    let temp = 0
    for (let j = 0; j < 10; j++) {
      sum -= numCnt[j]
      temp += numCnt[j] * sum
    }
    ans += temp
  }
  return ans
}

const nums = [13, 23, 12]
console.log(sumDigitDifferences(nums))
