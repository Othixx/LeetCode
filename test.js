// 测试函数：测量执行时间
function measureTime(label, fn) {
  const start = performance.now()
  fn()
  const end = performance.now()
  console.log(`${label}: ${end - start}ms`)
}

// 测试数据规模
const SIZE = 100000 // 数组大小
const OPERATIONS = 100000 // 执行操作次数

// 生成测试数组
function generateArray(size) {
  return Array.from({ length: size }, (_, i) => i)
}

// 测试 1：使用 shift() 方法
function testShift() {
  const arr = generateArray(SIZE)
  for (let i = 0; i < OPERATIONS; i++) {
    arr.shift() // 每次移除第一个元素
  }
}

// 测试 2：使用指针模拟队列（避免实际移动元素）
function testPointer() {
  const arr = generateArray(SIZE)
  let front = 0 // 队首指针
  for (let i = 0; i < OPERATIONS; i++) {
    front++ // 仅移动指针，不实际删除元素
  }
  // 若需要获取当前队列元素，可通过 arr.slice(front) 实现
}

// 测试 3：使用 pop() 方法
function testPop() {
  const arr = generateArray(SIZE)
  for (let i = 0; i < OPERATIONS; i++) {
    arr.pop() // 每次移除最后一个元素
  }
}

// 测试 4：使用 unshift() 方法（向开头添加元素）
function testUnshift() {
  const arr = []
  for (let i = 0; i < OPERATIONS; i++) {
    arr.unshift(i) // 每次向开头添加元素
  }
}

// 测试 5：使用 push() 方法（向末尾添加元素）
function testPush() {
  const arr = []
  for (let i = 0; i < OPERATIONS; i++) {
    arr.push(i) // 每次向末尾添加元素
  }
}

// 运行测试
console.log(`测试数组大小: ${SIZE}, 操作次数: ${OPERATIONS}`)
measureTime('使用 shift()', testShift)
measureTime('使用指针模拟', testPointer)
measureTime('使用 pop()', testPop)
measureTime('使用 unshift()', testUnshift)
measureTime('使用 push()', testPush)
