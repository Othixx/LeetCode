/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length;
    let st = [];
    for(let i = 0; i < n; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            st.push(s[i]);
        }
        else{
            if(st.length !== 0 && st[st.length - 1] === s[i]){
                st.pop();
            }
            else{
                return false;
            }
        }
    }
    if(st.length === 0) return true;
    return false;
};

let s = "()";
console.log(isValid(s)); // true