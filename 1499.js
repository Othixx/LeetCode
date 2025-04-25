/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
    let q = [0];
    let n = points.length;
    let ans = -Infinity;
    for (let i = 1; i < n; i++) {
        while (q.length !== 0 && Math.abs(points[i][0] - points[q[0]][0]) > k) {
            q.shift();
        }
        if (q.length !== 0) ans = Math.max(Math.abs(points[i][0] - points[q[0]][0]) + points[i][1] + points[q[0]][1], ans);     // 一定要先算出最大值再pop，如果pop了会漏解
        while (q.length !== 0 && points[i][1] - points[i][0] >= points[q[q.length - 1]][1] - points[q[q.length - 1]][0]) {
            q.pop();
        }
        q.push(i);
    }
    return ans;
};

let points = [[-17, 5], [-10, -8], [-5, -13], [-2, 7], [8, -14]];
let k = 4;
console.log(findMaxValueOfEquation(points, k)); // 35