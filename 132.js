/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(Infinity);  // dp[i] 表示从位置1到位置i，使它成为回文串的最小分割次数
    dp[0] = 0;
    let huiwen = new Array(n);  // huiwen[i][j] 表示从位置i到位置j，它是不是回文串
    for(let i = 0; i < n; i++){
        huiwen[i] = new Array(n).fill(false);
        huiwen[i][i] = true;
    }

    // 初始化回文：右端点r一直往右移动（从小到大），在r固定情况下，左端点l在r的左边开始，一直往左移动（从大到小）。
    for(let r = 0; r < n; r++){
        for(let l = r - 1; l >= 0; l--){
            if(l + 1 === r) huiwen[l][r] = (s[l] === s[r]);
            else huiwen[l][r] = huiwen[l + 1][r - 1] && (s[l] === s[r]);
        }
    }

    for(let r = 1; r < n; r++){
        if(huiwen[0][r]) dp[r] = 0;
        else{
            for(let l = 0; l < r; l++){
                if(huiwen[l + 1][r]) {
                    let temp = dp[l] + 1;
                    if(temp < dp[r]) dp[r] = temp;
                }
            }
        }
    }

    return dp[n - 1];
};