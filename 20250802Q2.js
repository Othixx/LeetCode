/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(Infinity);
        dp[i][i] = 0;
    }

    let findMinRemoval = function (i, j) {
        if (dp[i][j] !== Infinity) return dp[i][j];
        if (nums[i] * k >= nums[j]) {
            dp[i][j] = 0;
            return dp[i][j];
        }
        // 删i或者删j
        dp[i][j] = Math.min(findMinRemoval(i + 1, j), findMinRemoval(i, j + 1)) + 1;
        return dp[i][j];
    };

    return findMinRemoval(0, n - 1);
    
};

let nums = [2,1,5];
let k = 2;
console.log(minRemoval(nums, k)); // 输出: 1