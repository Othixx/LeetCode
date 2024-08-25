/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let createHeapByK = function (ans, k) {
        // ans.push(value);
        let i = Math.floor(k / 2);
        while (2 * i + 1 >= k) {
            i--;
        }
        while (i >= 0) {
            let flag = false;
            let max = frequency_map.get(ans[2 * i + 1]) > frequency_map.get(ans[i]) ? 2 * i + 1 : i;
            if (ans[2 * i + 2] && frequency_map.get(ans[2 * i + 2]) > frequency_map.get(ans[max])) {
                flag = true;
                max = 2 * i + 2;
            }
            if (flag) {
                let swap_temp = ans[2 * i + 2];
                ans[2 * i + 2] = ans[i];
                ans[i] = swap_temp;
            }
            else if (max === 2 * i + 1) {
                let swap_temp = ans[2 * i + 1];
                ans[2 * i + 1] = ans[i];
                ans[i] = swap_temp;
            }
            i--;
        }
    };

    // 计算频率
    let frequency_map = new Map();  // Key为值，Value为当前值出现的频率
    for (let i = 0; i < nums.length; i++) {
        if (frequency_map.has(nums[i])) {
            let temp = frequency_map.get(nums[i]);
            frequency_map.set(nums[i], temp + 1);
        }
        else {
            frequency_map.set(nums[i], 1);
        }
    }


    // 线性建堆，维护一个大小为K的小顶堆
    let ans = [];
    let flag = false;
    frequency_map.forEach((value, key) => {
        // if (ans.length < k) {     // 直接添加
            ans.push(key);
            createHeapByK(ans, ans.length);
        // }
        // else {
        //     if (value > frequency_map.get(ans[k - 1])) {      // 线性建堆
        //         if (!flag) {
        //             ans.push(key);
        //             flag = true;
        //         }
        //         else ans[k] = key;
        //         createHeapByK(ans, ans.length);
        //     }
        // }
    });

    let final_ans = [];
    if(ans.length > k){
        while(final_ans.length < k){
            final_ans.push(ans.shift());
            createHeapByK(ans, ans.length);
        }

        return final_ans;
    }
    return ans;

};

let nums = [5,3,1,1,1,3,73,1];
let k = 2;
console.log(topKFrequent(nums, k));
