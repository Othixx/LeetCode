/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length,
    n = grid[0].length
  let x1 = 0,
    y1 = 0,
    x2 = m - 1,
    y2 = n - 1 // 该层的左上角和右下角
  const layerArr = []
  const ans = new Array(m)
  for (let i = 0; i < m; i++) {
    ans[i] = new Array(n)
  }

  for (let layer = 0; layer < Math.min(m, n) / 2; layer++) {
    x1 = 0 + layer
    y1 = 0 + layer
    x2 = m - 1 - layer
    y2 = n - 1 - layer
    // 逆时针添加元素进layer数组中
    layerArr.length = 0
    // 左上->左下
    for (let i = x1; i <= x2; i++) {
      layerArr.push(grid[i][y1])
    }
    // 左下->右下
    for (let j = y1 + 1; j <= y2; j++) {
      layerArr.push(grid[x2][j])
    }
    // 右下->右上
    for (let i = x2 - 1; i >= x1; i--) {
      layerArr.push(grid[i][y2])
    }
    // 右上->左上
    for (let j = y2 - 1; j > y1; j--) {
      layerArr.push(grid[x1][j])
    }
    const size = layerArr.length
    const equalK = k % size
    const last = size - equalK
    const newLayerArr = []
    for (let i = last; i < size; i++) {
      newLayerArr.push(layerArr[i])
    }
    for (let i = 0; i < last; i++) {
      newLayerArr.push(layerArr[i])
    }
    // 复原
    let cnt = 0
    // 左上->左下
    for (let i = x1; i <= x2; i++) {
      ans[i][y1] = newLayerArr[cnt]
      cnt++
    }
    // 左下->右下
    for (let j = y1 + 1; j <= y2; j++) {
      ans[x2][j] = newLayerArr[cnt]
      cnt++
    }
    // 右下->右上
    for (let i = x2 - 1; i >= x1; i--) {
      ans[i][y2] = newLayerArr[cnt]
      cnt++
    }
    // 右上->左上
    for (let j = y2 - 1; j > y1; j--) {
      ans[x1][j] = newLayerArr[cnt]
      cnt++
    }
  }
  return ans
}
