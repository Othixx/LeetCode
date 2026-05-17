/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length
  const ranges = [[0, n - 1]]
  const newRanges = []
  let ans = 0
  const len = strs[0].length
  for (let i = 0; i < len; i++) {
    // 逐个检查，第i位是否需要删除
    let isChangeRange = false
    let isNeedVisit = false // 是否还要接着遍历第i + 1位
    for (const [left, right] of ranges) {
      let pos = left + 1
      while (pos <= right) {
        if (strs[pos][i] < strs[pos - 1][i]) {
          // 不符合条件，这一位需要删除
          ans++
          isNeedVisit = true
          break
        }
        pos++
      }
      if (pos <= right) {
        // 已经发生了删除
        newRanges.length = 0
        isChangeRange = false
        isNeedVisit = true
        break
      }
      // 生成新区间
      pos = left + 1
      // 只有两个相等时，需要重新验证
      let newLeft = left
      for (; pos <= right; pos++) {
        while (pos <= right && strs[pos][i] === strs[newLeft][i]) {
          pos++
        }
        pos--
        if (pos !== newLeft) {
          newRanges.push([newLeft, pos])
          isChangeRange = true
          isNeedVisit = true
        }
        pos++
        newLeft = pos
      }
    }
    if (!isNeedVisit) return ans
    // 更新区间
    if (isChangeRange) {
      ranges.length = 0
      for (const range of newRanges) {
        ranges.push(range)
      }
      newRanges.length = 0
    }
  }
  return ans
}

const strs = ['zyx', 'wvu', 'tsr']
console.log(minDeletionSize(strs))
