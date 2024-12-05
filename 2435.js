/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function (grid, k) {
    const MOD = 10 ^ 9 + 7;
    // 技巧：把路径和模 k 的结果当成一个扩展维度。
    // 初始化三维数组
    let m = grid.length;
    let n = grid[0].length;
    let arr = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        arr[i] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
            arr[i][j] = new Array(k).fill(0);
        }
    }
    arr[1][1][grid[0][0] % k] = 1;  // 初始化
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let v = 0; v < k; v++) {
                arr[i + 1][j + 1][(v + grid[i][j]) % k] = (arr[i + 1][j + 1][(v + grid[i][j]) % k] + arr[i][j + 1][v] + arr[i + 1][j][v]) % MOD;
            }
        }
    }
    console.log(MOD);
    return arr[m][n][0];
};
console.log(numberOfPaths([[0,3,5,10,0],[3,5,5,9,5],[1,7,8,8,0],[7,10,9,5,0],[9,2,3,4,7]], 2));