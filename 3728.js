/**
 * @param {number[]} c
 * @return {number}
 */
var countStableSubarrays = function (c) {
    const s = [0]
    const n = c.length
    const map = new Map()
    let ans = 0
    for (let r = 0; r < n; r++) {
        s.push(s[r] + c[r])
        if (r >= 2) {
            const leftKey = `${c[r - 2]}, ${c[r - 2] + s[r - 1]}`
            if (map.has(leftKey)) {
                let temp = map.get(leftKey)
                map.set(leftKey, temp + 1)
            }
            else map.set(leftKey, 1)
            const rightKey = `${c[r]}, ${s[r]}`
            ans += map.get(rightKey) || 0
        }
    }
    return ans

};