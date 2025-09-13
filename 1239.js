/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    // 首先删除arr中含有重复英文字母的字符串
    const clearArr = []
    for (let i = 0; i < arr.length; i++) {
        const set = new Set()
        const s = arr[i]
        for (let j = 0; j < s.length; j++) {
            if (set.has(s[j])) break
            set.add(s[j])
        }
        if (set.size === s.length) {
            clearArr.push(s)
        }
    }


    let ans = 0
    const ansSet = new Set()
    const dfs = function (i) {
        if (i === clearArr.length) {
            ans = Math.max(ans, ansSet.size)
            return
        }
        // 选或不选
        // 选
        const s = clearArr[i]
        let j = 0
        for (; j < s.length; j++) {
            if (ansSet.has(s[j])) break
        }
        if (j === s.length) {
            for (j = 0; j < s.length; j++) {
                ansSet.add(s[j])
                // console.log('add', ansSet)
            }
            dfs(i + 1)

            for (j = 0; j < s.length; j++) {
                ansSet.delete(s[j])
                // console.log('del', ansSet)
            }
        }

        // 不选
        dfs(i + 1)
    }

    dfs(0)
    return ans
};

const arr = ["un","iq","ue"]
console.log(maxLength(arr))