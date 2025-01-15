/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    // 求最长公共子序列
    let m = str1.length;
    let n = str2.length;
    let dp = new Array(m + 1);
    for(let i = 0; i <= m; i++){
        dp[i] = new Array(n + 1).fill("");
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let length_1 = dp[i][j + 1].length;
            let length_2 = dp[i + 1][j].length;
            let temp = dp[i][j];
          
            if(str1[i] === str2[j]) temp = temp + str1[i];
        
            let length_3 = temp.length;
            let maxLength = Math.max(length_1, length_2, length_3);
            if(maxLength === length_1) dp[i + 1][j + 1] = dp[i][j + 1];
            else if(maxLength === length_2) dp[i + 1][j + 1] = dp[i + 1][j];
            else dp[i + 1][j + 1] = temp;
            
        }
    }
    
    let common = dp[m][n];
    let arr1 = [];
    let arr2 = [];

    let p = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1[i] === common[p]){
            arr1.push(i);
            p++;
        }
    }
    p = 0;
    for(let i = 0; i < str2.length; i++){
        if(str2[i] === common[p]){
            arr2.push(i);
            p++;
        }
    }

    let i = 0;
    let j = 0;
    let p1 = 0;
    let p2 = 0;
    let ans = "";
    while(i < str1.length && j < str2.length){
        if(i === arr1[p1]){
            if(j === arr2[p2]){
                // 添加公共部分
                ans += str2[j];
                i++;
                j++;
                p1++;
                p2++;
            }
            else{
                ans += str2[j];
                j++;
            }
        }
        else{
            ans += str1[i];
            i++;
        }
    }

    // 填充未加满的字符串
    if(i !== str1.length){
        ans += str1.slice(i);
    }
    if(j !== str2.length){
        ans += str2.slice(j);
    }

    return ans;
};

let str1 = "bcacaaab";
let str2 = "bbabaccc";

console.log(shortestCommonSupersequence(str1, str2));