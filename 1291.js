/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const getLen = (num) => {
    let cnt = 0
    while (num > 0) {
      cnt++
      num = Math.floor(num / 10)
    }
    return cnt
  }
  const lowLength = getLen(low)
  const highLength = getLen(high)
  const ans = []
  const createAns = (firstNum, k) => {
    while (firstNum + k - 1 <= 9) {
      let temp = firstNum
      let cnt = 1
      while (cnt < k) {
        temp = temp * 10 + firstNum + cnt
        cnt++
      }
      if (temp >= low && temp <= high) ans.push(temp)
      else if (temp > high) break
      firstNum++
    }
  }
  for (let k = lowLength; k <= highLength; k++) {
    if (k === lowLength) {
      // 需要从指定位置开始遍历
      let firstNum = Math.floor(low / 10 ** (k - 1))
      createAns(firstNum, k)
    } else createAns(1, k)
  }
  return ans
}

const low = 100
const high = 300
console.log(sequentialDigits(low, high))
