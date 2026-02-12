/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const inDegree = new Array(n).fill(0)
  const graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Array()
  }
  // 二叉树，出度至多为1，入度也至多为1
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) {
      graph[i].push(leftChild[i])
      inDegree[leftChild[i]]++
      if (inDegree[leftChild[i]] > 1) return false
    }
    if (rightChild[i] !== -1) {
      graph[i].push(rightChild[i])
      inDegree[rightChild[i]]++
      if (inDegree[rightChild[i]] > 1) return false
    }
  }
  const q = []
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) q.push(i)
    if (q.length > 1) return false
  }
  let visNode = 0 // 已经访问过的节点数量
  while (q.length > 0) {
    // 层序访问
    const sz = q.length
    for (let i = 0; i < sz; i++) {
      const node = q.shift()
      for (let item of graph[node]) {
        inDegree[item]--
        if (inDegree[item] === 0) q.push(item)
      }
    }
    visNode += sz
  }
  if (visNode === n) return true
  else return false
}

const n = 4
const leftChild = [1, -1, 3, -1]
const rightChild = [2, -1, -1, -1]
console.log(validateBinaryTreeNodes(n, leftChild, rightChild))
