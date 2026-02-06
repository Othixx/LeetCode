/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const preCourses = new Array(numCourses) // 先修课程Set
  const graph = new Array(numCourses)
  for (let i = 0; i < numCourses; i++) {
    preCourses[i] = new Set()
    graph[i] = new Array()
  }
  const inDegree = new Array(numCourses).fill(0) // 入度
  for (const [a, b] of prerequisites) {
    inDegree[b]++
    graph[a].push(b)
  }
  // 将所有入度为0的节点压入队列，作为拓扑头
  const q = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i)
  }
  while (q.length > 0) {
    const node = q[0]
    for (const to of graph[node]) {
      // 将node压入
      preCourses[to].add(node)
      // 将node的pre压入
      preCourses[node].forEach((value) => {
        preCourses[to].add(value)
      })
      inDegree[to]--
      if (inDegree[to] === 0) q.push(to)
    }
    q.shift()
  }
  const answer = []
  for (const [u, v] of queries) {
    if (preCourses[v].has(u)) answer.push(true)
    else answer.push(false)
  }
  return answer
}
