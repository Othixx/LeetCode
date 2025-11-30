/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    // 用哈希表存储反转后数字以及下标，如果存在相同的翻转后数字，那么从下标小到大存储
    const map = new Map()
    const n = nums.length
    const reverse = (x) => {
        let ans = 0
        while (x > 0) {
            ans = ans * 10 + x % 10
            x = Math.floor(x / 10)
        }
        return ans
    }
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        const revNum = reverse(num)
        if (map.has(revNum)) map.get(revNum).push(i)
        else map.set(revNum, [i])
    }

    let ans = Infinity
    const binarySearch = (arr, j) => {
        let left = 0, right = arr.length - 1
        let mid = Math.floor((left + right) / 2)
        while (left <= right) {
            if (arr[mid] < j) left = mid + 1
            else right = mid - 1
            mid = Math.floor((left + right) / 2)
        }
        return left - 1
    }
    for (let j = 1; j < n; j++) {
        if (map.has(nums[j])) {
            // 查找最小下标，是否小于j
            const arr = map.get(nums[j])
            if (arr[0] < j) {
                // 二分查找arr中第一个小于j的元素下标
                let idx = binarySearch(arr, j)
                ans = Math.min(ans, j - arr[idx])
            }
        }
    }
    return ans === Infinity ? -1 : ans
}

const nums = [9,9]
console.log(minMirrorPairDistance(nums))