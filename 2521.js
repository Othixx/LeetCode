const MX = 1000
const isPrime = new Array(MX + 1).fill(-1)
const primeList = []
isPrime[0] = false
isPrime[1] = false
for (let i = 2; i <= MX; i++) {
    if (isPrime[i] === -1) {
        isPrime[i] = true
        primeList.push(i)
        for (let j = 2; i * j <= MX; j++) {
            isPrime[i * j] = false
        }
    }
}
console.log(primeList.length)
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const set = new Set()
    for (const num of nums) {
        if (isPrime[num]) set.add(num)
        else {
            for (let i = 0; primeList[i] <= Math.floor(num / 2); i++) {
                if (num % primeList[i] === 0) set.add(primeList[i])
            }
        }
    }
    return set.size
};
const nums = [2, 4, 3, 7, 10, 6]
console.log(distinctPrimeFactors(nums))
