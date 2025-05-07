/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {
    // 排序
    nums.sort((a, b) => {
        return a - b;
    });
    let m = queries.length;
    let n = nums.length;
    // 前缀和
    let sum = [];
    sum.push(0);
    sum.push(nums[0]);
    for(let i = 1; i < n; i++){
        sum.push(sum[i] + nums[i]);
    }

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
    
    let answer = [];
    for(let i = 0; i < m; i++){
        let ans = 0;
        // 查找第一个小于queries[i]的下标
        // 即求第一个大于等于queries[i]的下标，再减1
        let small = lowerBound(nums, queries[i]) - 1;
        if(small !== -1){
            ans += queries[i] * (small + 1) - sum[small + 1];
        }

        // 查找第一个大于queries[i]的下标
        // 即求第一个大于等于queries[i] + 1的下标
        let big = lowerBound(nums, queries[i] + 1);
        if(big !== n){
            ans += sum[n] - sum[big] - queries[i] * (n - big);
        }
        answer.push(ans);
    }
    return answer;
};
