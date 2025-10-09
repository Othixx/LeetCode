/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length
    if (s[n - 1] !== '0') return false
    // const memo = new Array(n).fill(false)
    const canReach = []
    canReach.push(n - 1)

    const check = (a, b, arr) => {
        let left = 0, right = arr.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (arr[mid] >= a) left = mid + 1
            else right = mid - 1
        }
        return right <= arr.length - 1 && arr[right] <= b ? true : false
    }

    for (let i = n - 2; i >= 0; i--) {
        if (s[i] === '0') {
            if (check(i + minJump, Math.min(i + maxJump, n - 1), canReach)) canReach.push(i)
        }
    }
    return canReach[canReach.length - 1] === 0 ? true : false
};

const s = "011010"
const minJump = 2, maxJump = 3
console.log(canReach(s, minJump, maxJump))