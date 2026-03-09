/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const ans = []
  const mask = (1 << n) - 1
  for (let i = 0; i < 1 << n; i++) {
    const x = ~i
    if (((x >> 1) & x) === 0) {
      ans.push(i.toString(2))
    }
  }
  return ans
}

const n = 3
console.log(validStrings(n))
