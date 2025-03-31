/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let t = '1' + s + '1';
    let first_one = 0;
    let next_first_one = 0;
    let last_one = 0;
    let pointer = 1;
    let ans = 0
    while(pointer < t.length){
        while(pointer < t.length && t[pointer] === '1'){
            pointer++;
        }
        if(pointer === t.length) break;
        while(pointer < t.length && t[pointer] === '0'){
            pointer++;
        }
        next_first_one = pointer - 1;
        while(pointer < t.length && t[pointer] === '1'){
            pointer++;
        }
        if(pointer === t.length) {
            ans = Math.max(ans, pointer - 2 - first_one);
            break;
        }
        while(pointer < t.length && t[pointer] === '0'){
            pointer++;
        }
        while(pointer < t.length && t[pointer] === '1'){
            pointer++;
        }
        if(pointer !== t.length){
            last_one = pointer - 1;
            ans = Math.max(ans, last_one - first_one);
        }
        else{
            ans = Math.max(ans, pointer - 2 - first_one);
            break;
        }
        first_one = next_first_one;
    }
    return ans;
};

let s = "01";
console.log(maxActiveSectionsAfterTrade(s));