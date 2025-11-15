// 并查集
class UnionFind {
    constructor(n) {
        this.p = Array.from({ length: n }, (_, i) => i)
        this.size = new Array(n).fill(1)    // 每个集合初始时都只有一个元素
        this.connect = n    // 初始时的连通分量数量
    }

    find(x) {
        if (this.p[x] !== x) this.p[x] = this.find(this.p[x])
        return this.p[x]
    }

    union(a, b) {
        const pa = this.find(a)
        const pb = this.find(b)
        if (pa === pb) return false
        else {
            if (this.size[pb] > this.size[pa]) {    // 小的挂在大的树上
                this.p[pa] = pb
                this.size[pb] += this.size[pa]
            }
            else {
                this.p[pb] = pa
                this.size[pa] += this.size[pb]
            }
            this.connect--
            return true
        }
    }
}

/**
 * @param {number[][]} properties
 * @param {number} k
 * @return {number}
 */
var numberOfComponents = function(properties, k) {
    // 节点数为properties数组的长度
    const n = properties.length
    if (n === 1) return 1
    const intersect = (a, b) => {
        let cnt = 0
        a.sort((a, b) => a - b)
        for (let i = 0; i < a.length; i++) {
            if (b.indexOf(a[i]) === -1) cnt++
            while (i + 1 < a.length && a[i] === a[i + 1]) i++
        }
        return cnt
    }

    const uf = new UnionFind(n)
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (uf.find(i) !== uf.find(j)) {
                if (intersect(properties[i], properties[j]) >= k) {
                    uf.union(i, j)
                }
            }
        }
    }
    return uf.connect
};

const properties = [[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]]
const k = 1
console.log(numberOfComponents(properties, k))