/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length
    const d = new Array(n + 1).fill(0)
    let ans = ''
    for (let i = 0; i < shifts.length; i++) {
        let plus = 1
        let starti = shifts[i][0], endi = shifts[i][1], directioni = shifts[i][2]
        if (directioni === 0) plus = -1
        d[starti] += plus
        d[endi + 1] -= plus
    }
    for (let i = 1; i < n; i++) {
        d[i] = d[i - 1] + d[i]
    }
    const change = (si, di) => {
        let a = si.charCodeAt(0)
        if (a + di > 'z'.charCodeAt(0)) a = a + di - 26
        else if (a + di < 'a'.charCodeAt(0)) a = a + di + 26
        else a = a + di
        return String.fromCharCode(a)
    }
    for (let i = 0; i < n; i++) {
        d[i] %= 26
        // 变换
        ans += change(s[i], d[i])
    }
    return ans
};

const s = "abc"
const shifts = [[0,1,0],[1,2,1],[0,2,1]]
console.log(shiftingLetters(s, shifts))