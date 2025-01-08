/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(-Infinity);
    }
    // for (let i = 0; i <= m; i++) {
    //     dp[i][0] = 0;
    // }
    // for (let j = 0; j <= n; j++) {
    //     dp[0][j] = 0;
    // }
    dp[1][1] = nums1[0] * nums2[0];
    for (let i = 2; i <= m; i++) {
        dp[i][1] = Math.max(dp[i - 1][1], nums1[i - 1] * nums2[0]);
    }
    for (let j = 2; j <= n; j++) {
        dp[1][j] = Math.max(dp[1][j - 1], nums1[0] * nums2[j - 1]);
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i + 1][j + 1] = Math.max(nums1[i] * nums2[j] + dp[i][j], dp[i][j], nums1[i] * nums2[j], dp[i + 1][j], dp[i][j + 1]);
        }
    }
    return dp[m][n];
};

let nums1 = [-3,-8,3,-10,1,3,9];
let nums2 = [9,2,3,7,-9,1,-8,5,-1,-1];
console.log(maxDotProduct(nums1, nums2));