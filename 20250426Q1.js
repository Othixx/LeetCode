/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    // 去重
    for(let i = 0; i < responses.length; i++){
        responses[i] = [...new Set(responses[i])];
    }
    // 统计
    let map = new Map();
    for(let i = 0; i < responses.length; i++){
        for(let j = 0; j < responses[i].length; j++){
            if(map.has(responses[i][j])){
                map.set(responses[i][j], map.get(responses[i][j]) + 1);
            }
            else{
                map.set(responses[i][j], 1);
            }
        }
    }
    let ans = "";
    let ansFreq = 0;
    map.forEach((value, key) =>{
        if(value > ansFreq){
            ans = key;
            ansFreq = value;
        }
        else if(value === ansFreq){
            // 判断小于
            let minLength = Math.min(ans.length, key.length);
            let i = 0;
            for(; i < minLength; i++){
                if(key[i] < ans[i]){
                    ans = key;
                    break;
                }
                else if(key[i] > ans[i]){
                    break;
                }
            }
            if(i === minLength){
                if(minLength === key.length) ans = key;
            }
        }
    })
    return ans;
};
let responses = [["gzdk","l","l","opo","ny"]];
console.log(findCommonResponse(responses)); // "good"