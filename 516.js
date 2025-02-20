/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(n).fill(0);
        dp[i][i] = 1;
    }

    for(let i = 0; i < n; i++){
        for(let j = i - 1; j >= 0; j--){
            if(j + 1 === i){
                if(s[i] === s[j]) dp[j][i] = 2;
                else dp[j][i] = 1;
            }
            else{
                if(s[i] === s[j]) dp[j][i] = dp[j + 1][i - 1] + 2;
                else dp[j][i] = Math.max(dp[j + 1][i], dp[j][i - 1]);
            }
        }
    }

    return dp[0][n - 1];
};

let s = "bbbab";
console.log(longestPalindromeSubseq(s));