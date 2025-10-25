/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
    // 计算a和b拼接的后所得到的最短字符串（一定是ab型）
    const link = (a, b) => {
        if (a.indexOf(b) !== -1) return a
        // 如果b不在a中，那么去求a的后缀与b的前缀的最长公共值
        let s = b + '#' + a
        // 这样去拼接，就一定保证了使用kmp求出来的数组不会ab拼在中间的这一部分放进去
        // 求s的最长公共前后缀
        let j = 0
        const next = [0]
        const n = s.length
        for (let i = 1; i < n; i++) {
            while (j !== 0 && s[j] !== s[i]) {
                j = next[j - 1]
            }
            if (s[j] === s[i]) {
                j++
                next.push(j)
            }
            else next.push(0)
        }
        const maxLength = next[n - 1]
        return a + b.slice(maxLength)
    }

    // 枚举
    const str1 = link(link(a, b), c)
    const str2 = link(link(b, a), c)
    const str3 = link(link(a, c), b)
    const str4 = link(link(c, a), b)
    const str5 = link(link(c, b), a)
    const str6 = link(link(b, c), a)
    const str = [str1, str2, str3, str4, str5, str6]
    str.sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length
        for (let i = 0; i < a.length; i++) {
            if (a[i] < b[i]) return -1
            else if (b[i] < a[i]) return 1
        }
        return -1
    })

    return str[0]
};

const a = "aa", b = "ab", c = "a"
console.log(minimumString(a, b, c))