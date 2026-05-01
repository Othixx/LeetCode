/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  // 创建所有的范围序列
  const arrRanges = []
  for (let i = 0; i < ranges.length; i++) {
    arrRanges.push([Math.max(0, i - ranges[i]), i + ranges[i]])
  }
  arrRanges.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    else return a[1] - b[1]
  })
  // 贪心，每次寻找最远的那一个
  if (arrRanges[0][0] !== 0) return -1
  let rightSide = 0,
    newRight = 0
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (arrRanges[i][0] > rightSide) return -1
    while (i <= n && arrRanges[i][0] <= rightSide) {
      newRight = Math.max(newRight, arrRanges[i][1])
      if (newRight >= n) return ans + 1
      i++
    }
    ans++
    rightSide = newRight
    i--
  }
  return -1
}

const n = 3
const ranges = [0, 0, 0, 0]
console.log(minTaps(n, ranges))
