class UnionFind {
    cc  // 连通块个数
    parent
    size

    constructor(n) {
        this.cc = n
        this.parent = new Array(n)
        this.size = new Array(n)
        for (let i = 0; i < n; i++) {
            this.parent[i] = i
            this.size[i] = 1
        }
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(a, b) {
        const pa = this.find(a)
        const pb = this.find(b)
        if (pa !== pb) {
            if (this.size[pa] < this.size[pb]) {
                this.parent[pa] = pb
                this.size[pb] += this.size[pa]
            }
            else {
                this.parent[pb] = pa
                this.size[pa] += this.size[pb]
            }
            this.cc--
        }
    }
}

/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function(graph, initial) {
    const n = graph.length
    const uf = new UnionFind(n)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (graph[i][j] === 1) uf.union(i, j)
        }
    }
    for (let i = 0; i < n; i++) {
        uf.find(i)
    }
    const map = new Map()
    for (let i = 0; i < n; i++) {
        const parent = uf.find(i)
        if (map.has(parent)) map.get(parent).push(i)
        else map.set(parent, [i])
    }

    const initialSet = new Set(initial)
    let ans = 0
    let maxNode = 0
    for (let i = 0; i < initial.length; i++) {
        const parent = uf.find(initial[i])
        const arr = map.get(parent)
        let flag = false    // 该连通分量中是否还有其它点在initial中
        for (const item of arr) {
            if (item !== initial[i] && initialSet.has(item)) {
                flag = true
                break
            }
        }
        if (!flag) {
            const tempNode = uf.size[parent]
            if (tempNode > maxNode) {
                ans = i
                maxNode = tempNode
            }
            else if (tempNode === maxNode && initial[i] < initial[ans]) ans = i
        }
        else {
            if (maxNode === 0 && initial[i] < initial[ans]) ans = i
        }
    }
    return initial[ans]
};

const graph = [[1,0,0,0,1,0,0,0,0,0,1],[0,1,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,0,0],[0,1,0,1,0,1,0,0,0,0,0],[1,0,0,0,1,0,0,0,0,0,0],[0,0,0,1,0,1,0,0,1,1,0],[0,0,0,0,0,0,1,1,0,0,0],[0,0,1,0,0,0,1,1,0,0,0],[0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,1]]
const initial = [7,8,6,2,3]
console.log(minMalwareSpread(graph, initial))