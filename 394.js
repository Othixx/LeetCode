/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let i = 0;
    let n = s.length;
    let ans = "";

    let repeatStack = [];   // 重复次数
    let stringStack = [];   // 临时字符串

    let tempNum = "";
    let tempString = "";

    for (; i < n; i++) {
        if (s[i] >= "0" && s[i] <= "9") {
            tempNum += s[i];
        }
        else if (s[i] === '[') {
            repeatStack.push(parseInt(tempNum));
            tempNum = "";
            stringStack.push("");
        }
        else if (s[i] >= "a" && s[i] <= "z") {
            if (repeatStack.length === 0) {
                ans += s[i];
            }
            else {
                stringStack[stringStack.length - 1] += s[i];
            }

        }
        else if (s[i] === ']') {
            tempString = stringStack[stringStack.length - 1];
            for (let j = 0; j < repeatStack[repeatStack.length - 1] - 1; j++) {
                stringStack[stringStack.length - 1] += tempString;
            }
            repeatStack.pop();
            if (stringStack.length === 1) {
                ans += stringStack[0];
            }
            else {
                stringStack[stringStack.length - 2] += stringStack[stringStack.length - 1];
            }
            stringStack.pop();
        }
    }

    return ans;
};

let s = "3[a]2[bc]";
decodeString(s);