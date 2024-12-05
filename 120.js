/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;
    if(n === 1)   return triangle[0][0];
    // 初始化dp数组
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(i + 1).fill(Infinity);
    }
    for(let i = 0; i < n; i++){
        dp[n - 1][i] = triangle[n - 1][i];
    }

    // 反向遍历
    for(let i = n - 2; i >= 0; i--){
        for(let j = 0; j < dp[i].length; j++){
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));