/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // 统计 i 到 j 元素出现的最大频率
            let freq = new Array(51).fill(0);
            for (let a = i; a <= j; a++) {
                freq[nums[a]]++;
            }
            let maxFreq = Math.max(...freq);
            // 统计区间外面元素为k的个数
            let out = 0;
            for (let a = 0; a < i; a++) {
                if (nums[a] === k) out++;
            }
            for (let a = j + 1; a < n; a++) {
                if (nums[a] === k) out++;
            }
            if (out + maxFreq > ans) ans = out + maxFreq;
        }
    }
    return ans;
}

let nums = [1, 2, 3, 4, 5, 6];
let k = 1;
console.log(maxFrequency(nums, k));