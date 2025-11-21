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
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length
    const a = new Array(n)
    for (let i = 0; i < n; i++) {
        let s = 0
        for (let x = nums[i]; x > 0; x /= 10) {
            s += x % 10
        }
        a[i] = [s, nums[i], i]
    }
    a.sort((p, q) => p[0] !== q[0] ? p[0] - q[0] : p[1] - q[1])

    const uf = new UnionFind(n)
    for (let i = 0; i < n; i++) {
        uf.union(i, a[i][2])
    }
    return n - uf.cc
};

const nums = [875031872,661889073,850559628]
console.log(minSwaps(nums))