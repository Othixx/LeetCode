/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  // 选或不选，暴力枚举
  const letterNum = new Array(26).fill(0)
  for (const letter of letters) {
    const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    letterNum[idx]++
  }
  let ans = 0,
    ansTemp = 0
  const dfs = (i) => {
    if (i === words.length) {
      ans = Math.max(ans, ansTemp)
      return
    }
    // 选
    let j = 0
    let thisScore = 0
    for (; j < words[i].length; j++) {
      const letter = words[i][j]
      const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0)
      if (letterNum[idx] > 0) {
        letterNum[idx]--
        thisScore += score[idx]
      } else break
    }
    if (j !== words[i].length) {
      // 剩余字母不够了，没法选，恢复现场
      j--
      for (; j >= 0; j--) {
        const letter = words[i][j]
        const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0)
        letterNum[idx]++
      }
      ans = Math.max(ans, ansTemp)
      thisScore = 0
    } else {
      // 进入下一个
      ansTemp += thisScore
      dfs(i + 1)
      ansTemp -= thisScore
      j--
      for (; j >= 0; j--) {
        const letter = words[i][j]
        const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0)
        letterNum[idx]++
      }
      thisScore = 0
    }

    // 不选
    dfs(i + 1)
  }

  dfs(0)
  return ans
}

const words = ['xxxz', 'ax', 'bx', 'cx']
const letters = ['z', 'a', 'b', 'c', 'x', 'x', 'x']
const score = [
  4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10,
]
console.log(maxScoreWords(words, letters, score))
