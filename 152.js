/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = new Array(nums.length);
    let min = new Array(nums.length);
    max[0] = nums[0];
    min[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
        min[i] = Math.min(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
    }
    return Math.max(...max);
};

let nums = [2,3,-2,4];
console.log(maxProduct(nums));