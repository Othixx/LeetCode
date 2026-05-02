/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  const check = (x) => {
    const origin = x
    let rotated = 0
    let cnt = 0
    while (x > 0) {
      let temp = x % 10
      if (temp === 0 || temp === 1 || temp === 8) {
        // temp 不变
      } else if (temp === 2) {
        temp = 5
      } else if (temp === 5) {
        temp = 2
      } else if (temp === 6) {
        temp = 9
      } else if (temp === 9) {
        temp = 6
      } else {
        return false
      }
      rotated += 10 ** cnt * temp
      x = Math.floor(x / 10)
      cnt++
    }
    if (origin === rotated) return false
    else return true
  }

  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (check(i)) ans++
  }
  return ans
}
const n = 10
console.log(rotatedDigits(n))
