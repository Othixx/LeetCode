/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 把nums转移到set
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    let max = 0;
    for (let value of set) {
        if (!set.has(value - 1)) {
            let small = value;
            let p = value + 1;
            while (set.has(p)) {
                p++;
            }
            let temp = p - small;
            if (temp > max) max = temp;
        }
    }
    return max;
};

let nums = [100,4,200,1,3,2];
longestConsecutive(nums);