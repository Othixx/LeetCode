/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let arr = []
    const qiPan = []
    const sum = new Set()
    const sub = new Set()
    let ans = 0
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    const dfs = function () {
        if (arr.length === 0) {
            ans++
            return
        }
        for (let i = 0; i < arr.length; i++) {
            qiPan.push(arr[i])
            // 行号：qiPan.length - 1，列号：arr[i]
            let sumTemp = qiPan.length - 1 + arr[i]
            let subTemp = qiPan.length - 1 - arr[i]
            if (sum.has(sumTemp) || sub.has(subTemp)) {
                // 攻击了，啥都不做
            }
            else {
                sum.add(sumTemp)
                sub.add(subTemp)
                // let arr_i = arr[i]
                // let oldPos = i
                let oldArr = new Array(...arr)
                arr.splice(i, 1)
                dfs()
                sum.delete(sumTemp)
                sub.delete(subTemp)
                arr = oldArr
            }
            qiPan.pop()
        }
    }

    dfs()
    return ans
};

const n = 2
console.log(totalNQueens(n))