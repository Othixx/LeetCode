/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  // 用哈希表存储knowledge
  const map = new Map()
  for (const [key, value] of knowledge) {
    map.set(key, value)
  }
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      let word = ''
      i++
      while (s[i] !== ')') {
        word += s[i]
        i++
      }
      if (map.has(word)) ans += map.get(word)
      else ans += '?'
    } else ans += s[i]
  }
  return ans
}

const s = '(name)is(age)yearsold'
const knowledge = [
  ['name', 'bob'],
  ['age', 'two'],
]
console.log(evaluate(s, knowledge))
