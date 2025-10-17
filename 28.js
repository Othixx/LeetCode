/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // 构造最大公共前后缀数组
    const next = [0]
    for (let i = 1; i < needle.length; i++) {
        if (next[i - 1] === 0) {
            if (needle[0] === needle[i]) next.push(1)
            else next.push(0)
        }
        else {
            if (needle[next[i - 1]] === needle[i]) next.push(next[i - 1] + 1)
            else {
                if (next[next[i - 1] - 1] === 0) {
                    if (needle[0] === needle[i]) next.push(1)
                    else next.push(0)
                }
                else {
                    if (needle[next[next[i - 1] - 1]] === needle[i]) next.push(next[next[i - 1] - 1] + 1)
                    else {
                        if (needle[0] === needle[i]) next.push(1)
                        else next.push(0)
                    }
                }
            }
        }
    }

    console.log(next)

    // 寻找
    let j = 0
    for (let i = 0; i < haystack.length; i++) {
        if (needle.length - j > haystack.length - i) return -1
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) return i - needle.length + 1
            j++
        }
        else {
            if (j !== 0) {
                j = next[j - 1]
                i--
            }
        }
    }
    return -1
};

const haystack = "mississippi"
const needle = "issip"
console.log(strStr(haystack, needle))