/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length;
    if (nums[0] < nums[n - 1]) return nums[0];
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else if (nums[mid] < nums[right]) right = mid - 1;
        else right--;
        // else 
    }
    // if (left < n) return nums[left];
    // return nums[right];
    // else return nums[right];
    return nums[left];
};

let nums = [10,1,10,10,10];
console.log(findMin(nums)); // Output: 1
