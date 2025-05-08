/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    let lowerBound = function (nums, target) {
        let n = nums.length;
        let a = 0;
        let b = n - 1;
        let mid = Math.floor((a + b) / 2);
        while (a <= b) {
            if (nums[mid] >= target) {
                b = mid - 1;
                mid = Math.floor((a + b) / 2);
            }
            else if (nums[mid] < target) {
                a = mid + 1;
                mid = Math.floor((a + b) / 2);
            }
        }
        return a;
    }

    // 排序
    nums.sort((a, b) => {
        return a - b;
    });
    let n = nums.length;
    let cnt = 0;
    for(let i = 0; i < nums.length; i++){
        // if(nums[i] > upper) break;
        // nums[j] >= lower - nums[i]
        // 查找第一个>=target的下标
        let target = lower - nums[i];
        let left = lowerBound(nums, target);
        left = Math.max(i + 1, left);
        if(left === n) continue;
        // nums[j] <= upper - nums[i]
        // 查找第一个>= target+1 的下标 - 1
        target = upper - nums[i]; 
        let right = lowerBound(nums, target + 1) - 1;
        if(right - left + 1 > 0){
            cnt += right - left + 1;
        }
    }

    return cnt;
};

let nums = [1,7,9,2,5];
let lower = 11, upper = 11;
console.log(countFairPairs(nums, lower, upper)); // 1