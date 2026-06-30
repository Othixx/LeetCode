/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  const n = properties.length
  properties.sort((a, b) => b[0] - a[0])
  const maxArr = new Array(n)
  maxArr[0] = 0
  let temp = properties[0][1] // 遇相同attack值时的临时最大值
  for (let i = 1; i < n; i++) {
    if (properties[i][0] === properties[i - 1][0]) {
      temp = Math.max(temp, properties[i][1])
      maxArr[i] = maxArr[i - 1]
    } else {
      maxArr[i] = Math.max(maxArr[i - 1], temp)
      temp = properties[i][1]
    }
  }
  let ans = 0
  for (let i = 1; i < n; i++) {
    if (properties[i][1] < maxArr[i]) ans++
  }
  return ans
}

const properties = [
  [4, 10],
  [2, 2],
  [8, 8],
  [10, 2],
  [5, 5],
  [9, 10],
  [2, 6],
]
console.log(numberOfWeakCharacters(properties))
