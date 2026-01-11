/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function(words) {
    const map = new Map()
    const n = words.length
    const changeWord = (word) => {
        let newWord = ''
        let i = 0
        if (word[0] === 'a') return word
        else {
            // 计算到a的差距
            i = 123 - word.charCodeAt(0)
        }
        for (let k = 0; k < word.length; k++) {
            let letterAsc = word.charCodeAt(k)
            letterAsc += i
            if (letterAsc > 122) letterAsc -= 26
            newWord = newWord + String.fromCharCode(letterAsc)
        }
        return newWord
    }

    let ans = 0
    words[0] = changeWord(words[0])
    for (let j = 1; j < n; j++) {
        // 首先将words[j - 1]与其二十五个变形入map
        if (map.has(words[j - 1])) map.set(words[j - 1], map.get(words[j - 1]) + 1 )
        else map.set(words[j - 1], 1)
        words[j] = changeWord(words[j])
        if (map.has(words[j])) ans += map.get(words[j])
    }
    return ans
}

const words = ["fusion", "layout"]
console.log(countPairs(words))