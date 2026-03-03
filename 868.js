/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const bitLength = (x) => (x === 0 ? 1 : 32 - Math.clz32(x))
  let ans = 0
  n /= n & -n
  n >>= 1
  while (n > 0) {
    const gap = bitLength(n & -n)
    ans = Math.max(ans, gap)
    n >>= gap
  }
  return ans
}

const n = 8
console.log(binaryGap(n))
