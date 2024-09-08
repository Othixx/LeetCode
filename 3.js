/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let p = 0;
    let q = 0;
    if (s.length === 0) return 0;
    let letter = new Array(26).fill(0);
    let max = q - p + 1;
    letter[s.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    q = q + 1;
    while (q < s.length) {
        if (letter[s.charCodeAt(q) - 'a'.charCodeAt(0)] === 1) {
            for (let i = p; i < q; i++) {
                letter[s.charCodeAt(i) - 'a'.charCodeAt(0)] = 0;
                if (s[i] === s[q]) {
                    p = i + 1;
                    break;
                }
            }
        }
        letter[s.charCodeAt(q) - 'a'.charCodeAt(0)] = 1;
        if (q - p + 1 > max) max = q - p + 1;
        q++;
    }
    return max;
};

let s = "abcabcbb";
lengthOfLongestSubstring(s);