/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deadendsSet = new Set(deadends)
  if (deadendsSet.has("0000")) return -1
  const q = ["0000"]
  const minDis = new Map()
  minDis.set("0000", 0)
  while (q.length > 0) {
    const node = q[0]
    const dis = minDis.get(node)
    // 遍历旋转情况
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        // j = 0 后移，j = 1 前移
        const newStrArr = []
        for (let k = 0; k < 4; k++) {
          newStrArr.push(node[k])
        }
        if (j === 0) newStrArr[i] = String((parseInt(newStrArr[i]) + 1) % 10)
        else newStrArr[i] = String((parseInt(newStrArr[i]) + 9) % 10)
        let newStr = newStrArr.join("")
        if (!deadendsSet.has(newStr) && !minDis.has(newStr)) {
          q.push(newStr)
          minDis.set(newStr, dis + 1)
        }
      }
    }
    q.shift()
  }
  if (minDis.has(target)) return minDis.get(target)
  else return -1
}

const deadends = ["0201", "0101", "0102", "1212", "2002"]
const target = "0202"
console.log(openLock(deadends, target))
