#include <stdio.h>
#include <malloc.h>

void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    // 新开一个大小为m+n的数组nums3，临时存储合并后的数组
    int* nums3 = (int*)malloc(sizeof(int) * (m + n));

    // 设置两个指针p和q分别遍历nums1和nums2
    int p = 0, q = 0;
    for(int i = 0; i < m + n; i++) {
        // 如果nums1遍历完了，直接将nums2的元素拷贝到nums3中
        if(p == m) {
            nums3[i] = nums2[q++];
        }
        // 如果nums2遍历完了，直接将nums1的元素拷贝到nums3中
        else if(q == n) {
            nums3[i] = nums1[p++];
        }
        // 如果nums1和nums2都没有遍历完，比较两者的大小，将较小的元素拷贝到nums3中
        else if(nums1[p] < nums2[q]) {
            nums3[i] = nums1[p++];
        }
        else {
            nums3[i] = nums2[q++];
        }
    }

    // 将nums3的m+n个元素拷贝到nums1中
    for(int i = 0; i < m + n; i++) {
        nums1[i] = nums3[i];
    }
}


