/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let temp = nums[i] + nums[j] + nums[k];
            if (temp === 0) {
                let tempArr = [];
                tempArr.push(nums[i]);
                tempArr.push(nums[j]);
                tempArr.push(nums[k]);
                ans.push(tempArr);
                while (nums[j + 1] === nums[j]) {
                    j++;
                }
                j++;
                while (nums[k - 1] === nums[k]) {
                    k--;
                }
                k--;
            }
            else if (temp < 0) {
                while (nums[j + 1] === nums[j]) {
                    j++;
                }
                j++;
            }
            else {
                while (nums[k - 1] === nums[k]) {
                    k--;
                }
                k--;
            }
        }
        while (nums[i + 1] === nums[i]) {
            i++;
        }
        i++;
    }
    return ans;
};

nums = [0, 0, 0, 0];
threeSum(nums);