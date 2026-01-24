/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  const m = mat.length
  const n = mat[0].length
  const totalStateCnt = 2 ** (m * n)
  const g = new Array(totalStateCnt)
  for (let i = 0; i < totalStateCnt; i++) {
    g[i] = new Array()
  }
  const q = [0]
  const minDis = new Array(totalStateCnt).fill(Infinity)
  minDis[0] = 0
  const make = (i, j, binMat, dis) => {
    // 把自己以及上下左右做反转
    const newBinMat = new Array(m)
    for (let k = 0; k < m; k++) {
      newBinMat[k] = [...binMat[k]]
    }
    newBinMat[i][j] = newBinMat[i][j] === 0 ? 1 : 0
    for (const [x, y] of [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ]) {
      if (x >= 0 && x < m && y >= 0 && y < n) {
        newBinMat[x][y] = newBinMat[x][y] === 0 ? 1 : 0
      }
    }
    // 做完反转之后，按行展开成为十进制
    let temp = 0
    for (let a = 0; a < m; a++) {
      for (let b = 0; b < n; b++) {
        temp = temp * 2 + newBinMat[a][b]
      }
    }
    if (minDis[temp] === Infinity) {
      q.push(temp)
      minDis[temp] = dis + 1
    }
  }
  while (q.length > 0) {
    const node = q[0]
    // 将node转成二进制，然后遍历它的邻居
    let temp = node
    const binArr = []
    while (temp > 0) {
      binArr.unshift(temp % 2)
      temp = Math.floor(temp / 2)
    }
    const binMat = new Array(m)
    for (let i = 0; i < m; i++) {
      binMat[i] = new Array(n).fill(0)
    }
    let p = binArr.length - 1
    for (let i = m - 1; i >= 0; i--) {
      if (p < 0) break
      for (let j = n - 1; j >= 0; j--) {
        if (p < 0) break
        binMat[i][j] = binArr[p]
        p--
      }
    }

    // 遍历邻居，求最短路
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        make(i, j, binMat, minDis[node])
      }
    }
    q.shift()
  }

  let temp = 0
  for (let a = 0; a < m; a++) {
    for (let b = 0; b < n; b++) {
      temp = temp * 2 + mat[a][b]
    }
  }
  return minDis[temp] === Infinity ? -1 : minDis[temp]
}

const mat = [
  [0, 0],
  [0, 1],
]
console.log(minFlips(mat))
