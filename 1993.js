/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
  this.parent = parent
  this.n = parent.length
  this.lockArr = new Array(this.n).fill(-1) // -1表示都未上锁
  this.children = new Array(this.n)
  for (let i = 0; i < this.n; i++) {
    this.children[i] = new Array()
  }
  for (let i = 1; i < this.n; i++) {
    this.children[parent[i]].push(i)
  }
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
  if (this.lockArr[num] === -1) {
    this.lockArr[num] = user
    return true
  } else return false
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
  if (this.lockArr[num] === user) {
    this.lockArr[num] = -1
    return true
  } else return false
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
  if (this.lockArr[num] === -1) {
    // 当前节点必须未上锁
    // 检查是否存在上锁的祖先节点
    let node = this.parent[num]
    while (node !== -1) {
      if (this.lockArr[node] !== -1) return false
      node = this.parent[node]
    }
    // 将上锁的子孙节点解锁
    let flag = false // 是否存在上锁的子孙节点
    const dfs = (node) => {
      for (const son of this.children[node]) {
        if (this.lockArr[son] !== -1) {
          flag = true
          this.lockArr[son] = -1
        }
        dfs(son)
      }
    }
    dfs(num)
    if (flag) {
      this.lockArr[num] = user
      return true
    } else return false
  } else return false
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */

const obj = new LockingTree([-1, 0, 0, 1, 1, 2, 2])
obj.lock(2, 2)
