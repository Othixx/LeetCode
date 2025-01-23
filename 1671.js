/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
    let ans = 0;
    for (let pos = 1; pos < nums.length - 1; pos++) {
        // 求最长上升子序列
        let p = [];
        let i = 0;
        while (p.length !== 0) {
            if (nums[i] < nums[pos]) p.push(nums[i]);
            i++;
        }
        for (; i < pos; i++) {
            if (nums[i] >= nums[pos]) continue;
            let m = 0;
            let n = p.length - 1;
            let mid = Math.floor((m + n) / 2);
            while (m <= n) {
                if (p[mid] >= nums[i]) n = mid - 1;
                else m = mid + 1;
                mid = Math.floor((m + n) / 2);
            }
            if (m >= p.length) p.push(nums[i]);
            else p[m] = nums[i];
        }
        let maxUpLen = p.length;
        if(maxUpLen === 0) continue;

        // 求最长下降子序列
        p = [];
        i = pos + 1;
        while (p.length !== 0) {
            if (nums[i] < nums[pos]) p.push(nums[i]);
            i++;
        }
        for (; i < nums.length; i++) {
            if (nums[i] >= nums[pos]) continue;
            let m = 0;
            let n = p.length - 1;
            let mid = Math.floor((m + n) / 2);
            while (m <= n) {
                if (p[mid] > nums[i]) m = mid + 1;
                else n = mid - 1;
                mid = Math.floor((m + n) / 2);
            }
            if (m >= p.length) p.push(nums[i]);
            else p[m] = nums[i];
        }
        let maxDownLen = p.length;
        if(maxDownLen === 0) continue;
        let arrLen = maxDownLen + maxUpLen + 1;
        if (arrLen > ans) ans = arrLen;
    }
    return nums.length - ans;
};

let nums = [100,92,89,77,74,66,64,66,64];
console.log(minimumMountainRemovals(nums));