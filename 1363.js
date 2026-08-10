/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function (digits) {
  digits.sort((a, b) => b - a)
  const n = digits.length
  let noZeroCnt = 0 // 统计digits中不含0个数
  while (noZeroCnt < n) {
    if (digits[noZeroCnt] === 0) break
    noZeroCnt++
  }
  if (noZeroCnt === 0) return '0'

  const memo = new Array(noZeroCnt) // memo[i][c]代表不含0的前i个字符中，每个位数字和除以3余c的最大数的字符串形式
  for (let i = 0; i < noZeroCnt; i++) {
    memo[i] = new Array(3).fill(-1)
  }
  memo[0][digits[0] % 3] = `${digits[0]}`
  for (let j = 0; j < 3; j++) {
    if (memo[0][j] === -1) {
      if (j === 0) memo[0][j] = ''
      else memo[0][j] = null
    }
  }

  const compareStr = (str1, str2) => {
    // 返回字典序更大的那个str
    if (str1.length > str2.length) return str1
    else if (str1.length < str2.length) return str2
    else {
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] > str2[i]) return str1
        else if (str1[i] < str2[i]) return str2
      }
    }
    return str1
  }

  const dfs = (i, c) => {
    if (memo[i][c] !== -1) return memo[i][c]
    const str1 = dfs(i - 1, c)
    const k = (c - (digits[i] % 3) + 3) % 3
    let str2 = dfs(i - 1, k)
    if (str2 !== null) str2 += `${digits[i]}`
    // 检查是否为Null
    if (str1 === null && str2 === null) memo[i][c] = null
    else if (str1 === null) memo[i][c] = str2
    else if (str2 === null) memo[i][c] = str1
    else memo[i][c] = compareStr(str1, str2)
    return memo[i][c]
  }

  let maxStr = dfs(noZeroCnt - 1, 0)
  // 检查后面还有没有0
  if (noZeroCnt === n) return maxStr
  // 如果还有0，检查是否为空
  if (maxStr === '') return '0'
  // 补0
  for (let i = noZeroCnt; i < n; i++) {
    maxStr += '0'
  }
  return maxStr
}

const digits = [5, 8]
console.log(largestMultipleOfThree(digits))
