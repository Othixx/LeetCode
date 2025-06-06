/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
    // 初始化二维前缀和
    // 定义memo[i + 1][j + 1]为以(i,j)为右下角的矩阵元素总和
    let m = mat.length;
    let n = mat[0].length;
    let memo = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        memo[i] = new Array(n + 1).fill(0);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            memo[i + 1][j + 1] = memo[i + 1][j] + memo[i][j + 1] - memo[i][j] + mat[i][j];
        }
    }

    // 得到矩阵的和
    let getSum = function (x1, y1, x2, y2) {
        // 返回矩阵左上角为(x1, y1)，右下角为(x2, y2)的矩阵总和
        return memo[x2 + 1][y2 + 1] - memo[x1][y2 + 1] - memo[x2 + 1][y1] + memo[x1][y1];
    };

    // 枚举
    // 固定左上角
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let c = ans + 1; c <= Math.min(m - i, n - j); c++) {
                if (getSum(i, j, i + c - 1, j + c - 1) <= threshold) ans = Math.max(ans, c);
                else break;
            }
        }
    }
    return ans;

};