import math

n, m = map(int, input().split())

arr = []
if (m % n == 0):
    # 直接构造长度为n的数组，每个元素为m / n
    for _ in range(n):
        arr.append(m / n)
else:
    # 构造长度为n - 1的数组
    if (n - 1 != 0):
        for _ in range(n - 1):
            arr.append(math.floor(m / n))
        arr.append(m - arr[0] * (n - 1))
    else:
        arr.append(m)
print(*arr)