/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    // 求差分数组
    const d = [nums[0]]
    const n = nums.length
    for (let i = 1; i < n; i++) {
        d.push(nums[i] - nums[i - 1])
    }
    d.push(0)
    for (let i = 0; i < queries.length; i++) {
        const left = queries[i][0]
        const right = queries[i][1]
        d[left]--
        d[right + 1]++
    }
    nums[0] = d[0]
    if (nums[0] > 0) return false
    for (let i = 1; i < n; i++) {
        nums[i] = d[i] + nums[i - 1]
        if (nums[i] > 0) return false
    }
    return true
};

const nums = [1,0,1]
const queries = [[0,2]]
console.log(isZeroArray(nums, queries))