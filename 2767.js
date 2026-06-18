/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  if (s[0] === '0') return -1
  // 回溯，选或不选
  const n = s.length
  let tempStr = ''
  let temp = 0
  let tempAns = 0
  let ans = Infinity
  const pow5 = new Set()
  temp = 1
  pow5.add(temp)
  for (let i = 1; i <= 7; i++) {
    temp *= 5
    pow5.add(temp)
  }
  temp = 0
  const check = (num) => {
    // 检查是不是5的幂
    if (pow5.has(num)) return true
    else return false
  }
  const dfs = (i) => {
    if (i === n) return
    const oldTemp = temp
    const oldTempAns = tempAns
    if (temp === 0 && s[i] === '0') return // 违反了前导非0原则，不成立
    temp = (temp << 1) + Number(s[i])
    // 不断
    dfs(i + 1)
    // 断
    if (check(temp)) {
      tempAns++
      temp = 0
      if (i === n - 1) ans = Math.min(ans, tempAns)
      else dfs(i + 1)
    }
    // 恢复
    temp = oldTemp
    tempAns = oldTempAns
  }
  dfs(0)
  return ans === Infinity ? -1 : ans
}

const s = '1011'
console.log(minimumBeautifulSubstrings(s))
