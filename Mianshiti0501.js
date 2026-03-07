/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  const bits = j - i + 1
  if (bits === 32) {
    // 覆盖全部32位时，直接返回M
    return M
  } else {
    // 正常情况：构造掩码清除i-j位
    const mask = ((1 << bits) - 1) << i
    N = N & ~mask
    return N + (M << i)
  }
}

const N = 1143207437
const M = 1017033
const i = 11
const j = 31
console.log(insertBits(N, M, i, j))
