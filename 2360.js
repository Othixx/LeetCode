/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const n = edges.length
    const arr = new Array(n).fill(-Infinity)
    let ans = -1
    const calCycle = (start) => {
        let k = start
        const set = new Set()
        if (arr[k] !== -Infinity) return
        while (k !== -1 && arr[k] === -Infinity && !set.has(k)) {
            set.add(k)
            k = edges[k]
        }
        if (set.has(k)) {
            // 成环了
            const setArr = [...set]
            let isFindCycleStart = false
            let cycleSize = 0
            for (let i = 0; i < setArr.length; i++) {
                if (setArr[i] === k) {
                    isFindCycleStart = true
                    cycleSize = setArr.length - i
                    ans = Math.max(ans, cycleSize)
                }
                if (isFindCycleStart) {
                    arr[i] = cycleSize
                }
                else {
                    arr[i] = -1
                }
            }
        }
        else {
            // 没有环，路径上的所有点都不会再成环了
            set.forEach((i) => {
                arr[i] = -1
            })
        }
    }
    for (let i = 0; i < n; i++) {
        calCycle(i)
    }
    return ans
};

const edges = [3,3,4,2,3]
console.log(longestCycle(edges))