/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const n = patience.length;
  const minDis = new Array(n).fill(Infinity);
  minDis[0] = 0;
  const graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Array();
  }
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  // 求最短路
  const queue = [0];
  while (queue.length > 0) {
    const node = queue[0];
    for (const item of graph[node]) {
      if (minDis[item] === Infinity) {
        minDis[item] = minDis[node] + 1;
        queue.push(item);
      }
    }
    queue.shift();
  }

  let ans = 0;
  for (let i = 1; i < n; i++) {
    // 求出最后一条消息的发送时间
    const cnt = Math.floor((2 * minDis[i] - 1) / patience[i]);
    const lastTime = cnt * patience[i];
    ans = Math.max(ans, lastTime + minDis[i] * 2 + 1);
  }
  return ans;
};

const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
];
const patience = [0, 10, 10];
console.log(networkBecomesIdle(edges, patience));
