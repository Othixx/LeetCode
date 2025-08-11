/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
var minTime = function (s, order, k) {
    let n = s.length;
    // console.log(order.slice(0, 1));
    // if (((n - 1) * n) / 2 < k) return -1;
    let left = 0,
        right = n - 1;
    // let p = [],
    //     q = [];
    // p.push(order[0]);
    // q.push(order[0]);
    // for (let i = 1; i < n; i++) {
    //     p.push(Math.min(p[i - 1], order[i]));
    //     q.push(Math.max(q[i - 1], order[i]));
    // }
    let binarySearch = function (arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return left;
    }
    let check = function (mid) {
        let cnt = 0;
        let i = 0;
        let arr = order.slice(0, mid + 1);
        arr.sort((a, b) => a - b);
        let m = arr.length;
        while (i <= arr[m - 1]) {
            // 在arr中寻找第一个>=i的值
            let first = binarySearch(arr, i);
            cnt += n - first;
            if (cnt >= k) return true;
            i++;
        }
        // while (i <= q[mid]) {
        //     cnt += n - Math.max(p[mid], i);
        //     if (cnt >= k) return true;
        //     i++;
        // }
        return false;
    };
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left === n ? -1 : left;
};

let s = "cat";
let order = [0,2,1];
let k = 6;
console.log(minTime(s, order, k)); // 输出: -1