/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let p = [];
    p.push(nums[0]);
    // 查找第一个下标j，让p[j]>=nums[i]
    for (let i = 1; i < nums.length; i++) {
        // 二分查找
        let m = 0;
        let n = p.length - 1;
        let pos = Math.floor((m + n) / 2);
        while (m <= n) {
            if (p[pos] >= nums[i]) n = pos - 1;
            else m = pos + 1;
            pos = Math.floor((m + n) / 2);
        }
        if (m >= p.length) p.push(nums[i]);
        else p[m] = nums[i];
    }
    return p.length;
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));