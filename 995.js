/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    const n = nums.length
    const d = new Array(n + 1).fill(0)
    let ans = 0
    if (nums[0] === 0) {
        d[0]++
        d[k]--
    }
    const a = [d[0]]
    let i = 1
    for (; i + k <= n; i++) {
        // 当前位置的翻转次数
        a.push(d[i] + a[i - 1])
        if ((a[i] + nums[i]) % 2 === 0) {
            d[i]++
            d[i + k]--
            a[i]++
            ans++
        }
    }
    for (; i < n; i++) {
        a.push(d[i] + a[i - 1])
        if ((a[i] + nums[i]) % 2 === 0) return -1
    }
    return ans
};

const nums = [0,1,0]
const k = 1
console.log(minKBitFlips(nums, k))