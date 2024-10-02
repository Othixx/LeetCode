/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;

    if(n * m === 0) {   // 有一个字符串是空串
        return n + m;
    }

    let dp = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        dp[i] = new Array(m + 1);
    }

    // 边界状态初始化
    for(let i = 0; i < n + 1; i++){
        dp[i][0] = i;
    }
    for(let j = 0; j < m + 1; j++){
        dp[0][j] = j;
    }

    for(let i = 1; i < n + 1; i++){
        for(let j = 1; j < m + 1; j++){
            let left = dp[i - 1][j] + 1;
            let down = dp[i][j - 1] + 1;
            let left_down = dp[i - 1][j - 1];
            if(word1[i - 1] !== word2[j - 1]){
                left_down++;
            }
        }
        dp[i][j] = Math.min(left, down, left_down);
    }

    return dp[n][m];
};