/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const minDis = new Map()
  minDis.set("123450", 0)
  const q = ["123450"]
  while (q.length > 0) {
    const node = q[0]
    // 转化成mat
    const mat = new Array(2)
    mat[0] = new Array(3)
    mat[1] = new Array(3)
    let zeroX = 0,
      zeroY = 0
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        mat[i][j] = node[i * 3 + j]
        if (mat[i][j] === "0") {
          zeroX = i
          zeroY = j
        }
      }
    }
    // 遍历自己的邻居
    const dis = minDis.get(node)
    for (const [x, y] of [
      [zeroX - 1, zeroY],
      [zeroX + 1, zeroY],
      [zeroX, zeroY - 1],
      [zeroX, zeroY + 1],
    ]) {
      if (x >= 0 && x < 2 && y >= 0 && y < 3) {
        // 将board转成str
        const newMat = new Array(2)
        newMat[0] = [...mat[0]]
        newMat[1] = [...mat[1]]
        // 交换
        ;[newMat[x][y], newMat[zeroX][zeroY]] = [
          newMat[zeroX][zeroY],
          newMat[x][y],
        ]
        let str = ""
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 3; j++) {
            str = str + newMat[i][j]
          }
        }
        if (!minDis.has(str)) {
          minDis.set(str, dis + 1)
          q.push(str)
        }
      }
    }
    q.shift()
  }
  // 将谜板转成字符串
  let str = ""
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      str = str + String(board[i][j])
    }
  }
  if (!minDis.has(str)) return -1
  return minDis.get(str)
}

const board = [
  [1, 2, 3],
  [4, 0, 5],
]
console.log(slidingPuzzle(board))
