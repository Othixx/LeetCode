/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function (nums, start, goal) {
  const minDis = new Map()
  minDis.set(start, 0)
  const q = [start]
  while (q.length > 0) {
    const x = q[0]
    const dis = minDis.get(x)
    for (let i = 0; i < nums.length; i++) {
      if (x + nums[i] === goal) return dis + 1
      else {
        if (
          x + nums[i] >= 0 &&
          x + nums[i] <= 1000 &&
          !minDis.has(x + nums[i])
        ) {
          minDis.set(x + nums[i], dis + 1)
          q.push(x + nums[i])
        }
      }
      if (x - nums[i] === goal) return dis + 1
      else {
        if (
          x - nums[i] >= 0 &&
          x - nums[i] <= 1000 &&
          !minDis.has(x - nums[i])
        ) {
          minDis.set(x - nums[i], dis + 1)
          q.push(x - nums[i])
        }
      }
      if ((x ^ nums[i]) === goal) return dis + 1
      else {
        if (
          (x ^ nums[i]) >= 0 &&
          (x ^ nums[i]) <= 1000 &&
          !minDis.has(x ^ nums[i])
        ) {
          minDis.set(x ^ nums[i], dis + 1)
          q.push(x ^ nums[i])
        }
      }
    }
    q.shift()
  }
  return -1
}

const nums = [2, 4, 12],
  start = 2,
  goal = 12
console.log(minimumOperations(nums, start, goal))
