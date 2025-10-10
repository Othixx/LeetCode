/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    const arr = []
    const n = nums.length
    const m = pattern.length
    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] > nums[i]) arr.push(1)
        else if (nums[i + 1] === nums[i]) arr.push(0)
        else arr.push(-1)
    }

    // 下面调用KMP算法，计算arr中有多少个pattern
    // 首先计算next数组
    const next = new Array(m)
    next[0] = 0
    for (let i = 1; i < m; i++) {
        if (pattern[next[i - 1]] === pattern[i]) next[i] = next[i - 1] + 1
        else {
            if (next[i - 1] === 0) next[i] = pattern[0] === pattern[i] ? 1 : 0
            else {
                if (next[next[i - 1] - 1] === 0) next[i] = pattern[0] === pattern[i] ? 1 : 0
                else {
                    if (pattern[next[next[i - 1] - 1]] === pattern[i]) next[i] = next[next[i - 1] - 1] + 1
                    else next[i] = pattern[0] === pattern[i] ? 1 : 0
                }
            }
        }
    }
    console.log(arr)
    console.log(next)

    let p = 0, q = 0
    let cnt = 0
    while (p < n) {
        if (arr[p] === pattern[q]) {
            if (q === m - 1) {
                cnt++
                q = next[q]
            }
            else q++
        }
        else {
            if (q !== 0) {
                q = next[q - 1]
                continue
            }
        }
        p++
    }
    return cnt
};

const nums = [1,4,4,1,3,5,5,3]
const pattern = [1,0,-1]
console.log(countMatchingSubarrays(nums, pattern))