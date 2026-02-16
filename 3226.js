/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if (n === k) return 0
  // 转换二进制
  const nArr = []
  const kArr = []
  const bitSizeN = 32 - Math.clz32(n)
  const bitSizeK = 32 - Math.clz32(k)
  if (bitSizeN < bitSizeK) return -1
  while (n > 0) {
    nArr.unshift(n % 2)
    n /= 2
  }
  while (k > 0) {
    kArr.unshift(k % 2)
    k /= 2
  }
  while (kArr.length < bitSizeN) {
    kArr.unshift(0)
  }
  let cnt = 0
  for (let i = 0; i < kArr.length; i++) {
    if (nArr[i] !== kArr[i]) {
      if (nArr[i] === 1) cnt++
      else return -1
    }
  }
  return cnt
}

const n = 13
const k = 4
console.log(minChanges(n, k))
