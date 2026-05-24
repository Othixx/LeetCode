/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (n, lamps, queries) {
  // 去重
  const lampsMap = new Map() // Map -> Set
  for (const [row, col] of lamps) {
    if (lampsMap.has(row)) lampsMap.get(row).add(col)
    else lampsMap.set(row, new Set([col]))
  }
  const rowMap = new Map()
  const colMap = new Map()
  const leftMap = new Map() // 左倾对角线，row与col的和是一样的
  const rightMap = new Map() // 右倾对角线，col与row的差是一样的

  // 打开电灯，更新四个计数哈希表
  lampsMap.forEach((cols, row) => {
    for (const col of cols) {
      if (rowMap.has(row)) {
        let temp = rowMap.get(row)
        rowMap.set(row, temp++)
      } else rowMap.set(row, 1)
      if (colMap.has(col)) {
        let temp = colMap.get(col)
        colMap.set(col, temp++)
      } else colMap.set(col, 1)
      if (leftMap.has(row + col)) {
        let temp = leftMap.get(row + col)
        leftMap.set(row + col, temp++)
      } else leftMap.set(row + col, 1)
      if (rightMap.has(col - row)) {
        let temp = rightMap.get(col - row)
        rightMap.set(col - row, temp++)
      } else rightMap.set(col - row, 1)
    }
  })

  const ans = []
  // 遍历queries，同时更新哈希表
  const close = (row, col) => {
    // 关闭(row, col)的电灯
    if (lampsMap.has(row)) {
      const colSet = lampsMap.get(row)
      if (colSet.has(col)) {
        colSet.delete(col)
        // 更新四个哈希表
        let temp = rowMap.get(row)
        if (temp === 1) rowMap.delete(row)
        else rowMap.set(row, temp--)
        temp = colMap.get(col)
        if (temp === 1) colMap.delete(col)
        else colMap.set(col, temp--)
        temp = leftMap.get(row + col)
        if (temp === 1) leftMap.delete(row + col)
        else leftMap.set(row + col, temp--)
        temp = rightMap.get(col - row)
        if (temp === 1) rightMap.delete(col - row)
        else rightMap.set(col - row, temp--)
      }
    }
  }

  for (const [row, col] of queries) {
    if (
      rowMap.has(row) ||
      colMap.has(col) ||
      leftMap.has(row + col) ||
      rightMap.has(col - row)
    )
      ans.push(1)
    else ans.push(0)
    // 关闭自己及其八个方向单元格上的电灯
    const changeArr = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 0],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]
    for (const [changeRow, changeCol] of changeArr) {
      close(row + changeRow, col + changeCol)
    }
  }
  return ans
}

const n = 5
const lamps = [
  [0, 0],
  [4, 4],
]
const queries = [
  [1, 1],
  [1, 1],
]
console.log(gridIllumination(n, lamps, queries))
