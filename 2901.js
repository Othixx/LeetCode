/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (words, groups) {
    const n = words.length
    const memo = new Array(n)
    for (let i = 0; i < n; i++) {
        memo[i] = new Array()
    }

    const disOne = (a, b) => {
        if (a.length !== b.length) return false
        const n = a.length
        let cnt = 0
        for (let i = 0; i < n; i++) {
            if (a[i] !== b[i]) {
                cnt++
                if (cnt !== 1) return false
            }
        }
        return cnt === 1 ? true : false
    }

    let max = 0, maxPos = -1
    for (let i = n - 1; i >= 0; i--) {
        // 倒着遍历统计长度
        for (let j = i + 1; j < n; j++) {
            // 检查汉明距离是否为1，同时两个group要不同
            if (groups[i] !== groups[j] && disOne(words[i], words[j])) {
                if (memo[j].length + 1 > memo[i].length) {
                    memo[i] = Array.from(memo[j])
                    memo[i].unshift(i)
                }
            }
        }
        if (memo[i].length === 0) {
            memo[i] = [i]
        }
        if (memo[i].length > max) {
            max = memo[i].length
            maxPos = i
        }
    }

    const ans = []
    for (let i = 0; i < memo[maxPos].length; i++) {
        ans.push(words[memo[maxPos][i]])
    }
    return ans
};

const words = ["bab","dab","cab"]
const groups = [1,2,2]
console.log(getWordsInLongestSubsequence(words, groups))