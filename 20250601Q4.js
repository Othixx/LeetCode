/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumCount = function (nums, queries) {
    let n = nums.length;
    let prime = []
    function isPrime(n) {
        if (n <= 1) return false; // 小于等于 1 的数不是质数
        if (n <= 3) return true; // 2 和 3 是质数
        if (n % 2 === 0 || n % 3 === 0) return false; // 能被 2 或 3 整除的数不是质数

        // 检查是否能被小于等于平方根的数整除
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }
    for (let i = 0; i < n; i++) {
        if(isPrime(nums[i])){
            prime.push(true);
        }
        else{
            prime.push(false);
        }
    }

    // 计算以k为分界点的左右两部分不同质数个数
    for(let k = 1; k < n; k++){
        for(let i = 0; i < k; i++){
            
        }
        for(let i = k; i < n; i++){
            
        }
    }
};
