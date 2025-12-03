/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    const set = new Set(nums)
    const diffNum = set.size
    const n = nums.length
    const map = new Map()
    let left = 0, ans = 0
    for (let right = 0; right < nums.length; right++) {
        if (map.has(nums[right])) {
            map.set(nums[right], map.get(nums[right]) + 1)
        }
        else {
            map.set(nums[right], 1)
        }
        if (map.size >= diffNum) {
            while (map.size >= diffNum) {
                ans += n - right
                let cnt = map.get(nums[left])
                if (cnt === 1) map.delete(nums[left])
                else map.set(nums[left], cnt - 1)
                left++
            }
        }
    }
    return ans
};