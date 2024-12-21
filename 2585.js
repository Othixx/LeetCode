/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
    const MOD = 10 ** 9 + 7;
    // 排序
    types.sort((a, b) => {
        if(a[1] < b[1]) return -1;
        else return 1;
    });
    let n = types.length;
    let dp = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        dp[i] = new Array(target + 1).fill(0);
    }
    dp[0][0] = 1;

    let calculate = function(i, j){
        let k = 0;
        while(j - k * types[i][1] >= 0 && k <= types[i][0]){
            dp[i + 1][j] += dp[i][j - k * types[i][1]];
            k++;
        }
    };

    for(let i = 0; i < n; i++){
        for(let j = 0; j <= target; j++){
            calculate(i, j);
        }
    }

    return dp[n][target];

};

let target = 6;
let types = [[6,1],[3,2],[2,3]];
console.log(waysToReachTarget(target, types));