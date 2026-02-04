/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const letter2Num = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0)
  // 建立边邻接矩阵图
  const graph = new Array(26)
  for (let i = 0; i < 26; i++) {
    graph[i] = new Array(26).fill(Infinity)
    graph[i][i] = 0
  }
  for (let i = 0; i < original.length; i++) {
    const from = letter2Num(original[i])
    const to = letter2Num(changed[i])
    graph[from][to] = Math.min(graph[from][to], cost[i])
  }

  // 使用Floyd算法求出任意两个字母的最短路径
  const memo = new Array(26)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(26)
    for (let j = 0; j < memo[i].length; j++) {
      memo[i][j] = new Array(26).fill(-1)
    }
  }
  const dfs = (k, i, j) => {
    if (k < 0) return graph[i][j]
    if (memo[k][i][j] !== -1) return memo[k][i][j]
    memo[k][i][j] = Math.min(
      dfs(k - 1, i, j),
      dfs(k - 1, i, k) + dfs(k - 1, k, j),
    )
    return memo[k][i][j]
  }
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      if (i !== j) {
        dfs(25, i, j)
      }
    }
  }

  // 调用结果求出最小成本
  let ans = 0
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      const from = letter2Num(source[i])
      const to = letter2Num(target[i])
      const pay = memo[25][from][to]
      if (pay === Infinity) return -1
      ans += pay
    }
  }
  return ans
}

const source = 'abcd'
const target = 'acbe'
const original = ['a', 'b', 'c', 'c', 'e', 'd']
const changed = ['b', 'c', 'b', 'e', 'b', 'e']
const cost = [2, 5, 5, 1, 2, 20]
console.log(minimumCost(source, target, original, changed, cost))
