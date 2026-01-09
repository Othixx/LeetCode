/**
 * @param {string} initialCurrency
 * @param {string[][]} pairs1
 * @param {number[]} rates1
 * @param {string[][]} pairs2
 * @param {number[]} rates2
 * @return {number}
 */
var maxAmount = function (initialCurrency, pairs1, rates1, pairs2, rates2) {
    const g1 = new Map()
    const g2 = new Map()
    for (let i = 0; i < pairs1.length; i++) {
        const x = pairs1[i][0]
        const y = pairs1[i][1]
        // 添加 x -> y
        if (g1.has(x)) g1.get(x).push([y, rates1[i]])
        else g1.set(x, [[y, rates1[i]]])
        // 添加 y -> x
        if (g1.has(y)) g1.get(y).push([x, 1 / rates1[i]])
        else g1.set(y, [[x, 1 / rates1[i]]])
    }
    for (let i = 0; i < pairs2.length; i++) {
        const x = pairs2[i][0]
        const y = pairs2[i][1]
        // 添加 x -> y
        if (g2.has(x)) g2.get(x).push([y, rates2[i]])
        else g2.set(x, [[y, rates2[i]]])
        // 添加 y -> x
        if (g2.has(y)) g2.get(y).push([x, 1 / rates2[i]])
        else g2.set(y, [[x, 1 / rates2[i]]])
    }

    const isVisG1 = new Map()
    const isVisG2 = new Map()
    let ans = 1
    let isFindG2 = false
    for (const [key, value] of g1) {
        isVisG1.set(key, false)
    }
    // 还需要初始化isvisg2，每次都要
    const dfsG2 = (node, price) => {
        // 目标是initialCurrency
        isVisG2.set(node, true)
        if (node === initialCurrency) {
            ans = Math.max(ans, price)
            isFindG2 = true
        }
        if (!isFindG2) {
            const list = g2.get(node)
            if (list !== undefined) {
                for (const [target, rate] of list) {
                    if (!isFindG2 && !isVisG2.get(target)) dfsG2(target, price * rate)
                }
            }
        }
    }
    const dfsG1 = (node, price) => {
        isVisG1.set(node, true)
        const list = g1.get(node)
        // 其次检查进行了变换的
        if (list !== undefined) {
            for (const [target, rate] of list) {
                for (const [key, value] of g2) {
                    isVisG2.set(key, false)
                }
                isVisG2.set(target, true)
                isFindG2 = false
                dfsG2(target, price * rate)
                if (!isVisG1.get(target)) dfsG1(target, price * rate)
            }
        }
    }
    
    dfsG1(initialCurrency, 1)
    return ans
};

const initialCurrency = "NGN"
const pairs1 = [["NGN","EUR"]]
const rates1 = [9.0]
const pairs2 = [["NGN","EUR"]]
const rates2 = [6.0]
console.log(maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2))