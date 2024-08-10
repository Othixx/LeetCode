/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0;    // 岛屿数量
    let m = grid.length;
    let n = grid[0].length;
    // let flag = new Array(m);
    // for(let i = 0; i < m; i++){
    //     flag[i] = new Array(n).fill(false);
    // }

    var dfs = function(i, j){
        if(grid[i][j] === 1){
            ans++;
            grid[i][j] === 2;
            if(i - 1 >= 0 && grid[i - 1][j] === 1) dfs(i - 1, j);    // 上
            if(i + 1 < m && grid[i + 1][j] === 1) dfs(i + 1, j);     // 下
            if(j - 1 >= 0 && grid[i][j - 1] === 1) dfs(i, j - 1);   // 左
            if(j + 1 < n && grid[i][j + 1] === 1) dfs(i, j + 1);    // 右
        }
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            dfs(i, j);
        }
    }

    return ans;
};