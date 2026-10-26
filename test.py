import heapq

heap = []
# 1. 往堆里加元素，自动维持堆性质 O(logn)
heapq.heappush(heap, 5)

# 2. 弹出堆顶（最小的那个），O(logn)
min_val = heapq.heappop(heap)

# 3. 原地把列表变成堆！【heapify 重点！】 O(n)，不是O(nlogn)
arr = [3,1,4,2]
heapq.heapify(arr)   # 直接把arr改成堆，原地修改，不返回新数组

# 4. 看堆顶最小值，不弹出
arr[0]

# 5. heappushpop：先push，再pop最小，O(logn)
res = heapq.heappushpop(heap, 6)

# 6. heapreplace：先pop最小，再push x
res = heapq.heapreplace(heap, 7)