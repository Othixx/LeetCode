class UnionFind {
    constructor(n) {
        // 创建一个大小为n的并查集
        this.p = Array.from({ length: n }, (_, i) => i) // 初始化情况下，每个元素的父元素都是自己，p指parent
        this.size = new Array(n).fill(1)    // 初始时每个集合都只有一个元素
        this.cc = n     // 连通块个数
    }

    find(x) {
        if (this.p[x] !== x) {
            this.p[x] = this.find(this.p[x])    // 递归查找，查找时同时进行路径压缩
        }
        return this.p[x]
    }

    union(a, b) {
        const pa = this.find(a)
        const pb = this.find(b)
        if (pa === pb) return false // 当前的两个节点具有相同的祖先，挂在同一个集合里面，无需合并
        if (this.size[pa] > this.size[pb]) {    // 把小的集合挂在大的集合下面
            this.p[pb] = pa
            this.size[pa] += this.size[pb]
        }
        else {
            this.p[pa] = pb
            this.size[pb] += this.size[pa]
        }
        this.cc--
        return true
    }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const n = s.length
    const uf = new UnionFind(n)
    for (const pair of pairs) {
        uf.union(pair[0], pair[1])
    }

    // 提取同属于一个连通块的点，然后排序
    const vec = new Array(n)
    for (let i = 0; i < n; i++) {
        vec[i] = [[], []]
    }
    for (let i = 0; i < n; i++) {
        const temp = uf.find(i)
        vec[temp][0].push(i)
        vec[temp][1].push(s[i])
    }
    const ansArr = new Array(n).fill('1')
    for (let i = 0; i < n; i++) {
        if (vec[i][0].length > 0) {
            vec[i][1].sort((a, b) => a.CharCodeAt() - b.CharCodeAt())
            for (let j = 0; j < vec[i][0].length; j++) {
                let idx = vec[i][0][j]
                ansArr[idx] = vec[i][1][j]
            }
        }
    }
    return ansArr.join('')
};

const s = "dcab"
const pairs = [[0,3],[1,2]]
console.log(smallestStringWithSwaps(s, pairs))