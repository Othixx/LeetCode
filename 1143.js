/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length);
    for(let i = 0; i < text1.length; i++){
        dp[i] = new Array(text2.length).fill(-1);
    }
    dp[0][0] = text1[0] === text2[0] ? 1 : 0;

    let dfs = function(i, j){
        if(i < 0) return 0;
        if(j < 0) return 0;
        if(dp[i][j] !== -1) return dp[i][j];
        if(text1[i] === text2[j]){
            dp[i][j] = dfs(i - 1, j - 1) + 1;
            return dp[i][j];
        }
        else{
            dp[i][j] = Math.max(dfs(i - 1, j), dfs(i, j - 1));
            return dp[i][j];
        }
    };

    return dfs(text1.length - 1, text2.length - 1);
};