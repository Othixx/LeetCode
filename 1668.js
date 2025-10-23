/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let ans = 0
    let cnt = 0     // 当前已经连续出现的word次数
    if (word.length > sequence.length) return 0
    // KMP算法
    // 先计算出word的next数组
    const next = [0]
    let j = 0   // 前缀末尾位置，即当前最长公共前后缀的长度
    for (let i = 1; i < word.length; i++) {
        while (j > 0 && word[i] !== word[j]) {
            j = next[j - 1]
        }
        if (word[i] === word[j]) {
            j++
        }

        next.push(j)
    }

    // 使用KMP查询
    j = 0
    for (let i = 0; i < sequence.length; i++) {
        // 溢出的情况，后面不用遍历了
        if (sequence.length - i < word.length - j) break
        if (sequence[i] === word[j]) {
            j++
            if (j === word.length) {
                j = 0
                cnt++
            }
        }
        else {
            ans = Math.max(ans, cnt)
            cnt = 0
            j = next[j - 1]
        }
    }
    ans = Math.max(ans, cnt)
    return ans
};

const sequence = "ababc"
const word = "ba"
console.log(maxRepeating(sequence, word))