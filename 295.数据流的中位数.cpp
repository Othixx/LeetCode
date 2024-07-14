// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem295.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=295 lang=cpp
 *
 * [295] 数据流的中位数
 */

// @lc code=start
class MedianFinder {
public:
    vector<int> arr;
    MedianFinder() {
        arr.clear();
    }
    
    void addNum(int num) {
        arr.push_back(num);
        int n = arr.size();
        for(int i = n - 1; i > 0; i++){
            if(arr[i] > arr[i-1]) swap(arr[i], arr[i-1]);
        }
    }
    
    double findMedian() {
        int n = arr.size();
        if(n % 2 == 0){
            return (arr[n/2] + arr[n/2-1]) / 2;
        }
        else{
            return arr[n/2];
        }
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
// @lc code=end

