/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    const isPunishmentNumber = function (k) {
        const str = (k * k).toString()
        const m = str.length
        // 分割线：选或不选
        if (m === 1) {
            if (k === 1 || k === 9) return true
            return false
        }
        const breakPoint = [0]
        const dfs = function (i) {
            if (i === m) {
                let cnt = 0
                for (let j = 0; j < breakPoint.length; j++) {
                    if (j !== breakPoint.length - 1) {
                        cnt += +str.slice(breakPoint[j], breakPoint[j + 1])
                    }
                    else {
                        cnt += +str.slice(breakPoint[j], m)
                    }
                }
                if (cnt === k) return true
                else return false
            }
            // 选
            breakPoint.push(i)
            if (dfs(i + 1)) return true
            breakPoint.pop()

            // 不选
            if (dfs(i + 1)) return true
            return false
        }
        return dfs(1)
    }

    // console.log(isPunishmentNumber(n));
    
    let ans = 0
    for (let i = 1; i <= n; i++) {
        if (isPunishmentNumber(i)) {
            ans += i * i
            // console.log(i)
        }
    }
    return ans
};

punishmentNumber(11)