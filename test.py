from collections import defaultdict
d = defaultdict()  # 这一行直接抛异常：TypeError: first argument must be callable or None
print(d['a'])
print(d[1])