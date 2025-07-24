/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let n = nums.length;
    let left = 0, right = 0;
    let ans = 0;
    while (right < n && nums[right] >= k) {
        right++;
        left++;
    }
    if (right === n) return ans;
    let sum = nums[right];
    while (right < n && left <= right) {
        // let sum = 0;
        // for (let i = left; i <= right; i++) {
        //     sum += nums[i];
        // }
        while (right < n - 1 && sum * (right - left + 1) < k) {
            right++;
            sum += nums[right];
        }
        // ans += right - left;
        while (left <= right && sum * (right - left + 1) >= k) {
            ans += right - left;
            sum -= nums[left];
            left++;
        }
        if (left > right) {
            right = left;
            while (right < n && nums[right] >= k) {
                right++;
                left++;
            }
            if (right < n) sum = nums[right];
        }
        if (right === n - 1) {
            ans += (right - left + 1) * (right - left + 2) / 2;
            break;
        }
    }
    return ans;
};

let nums = [2,1,4,3,5];
let k = 10;
console.log(countSubarrays(nums, k)); // Output: 6