#include <stdio.h>
#include <malloc.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    *returnSize=2;
    int *result;
    result = malloc(sizeof(int)*(*returnSize));
    for(int i=0;i<numsSize;i++){
        for(int j=i+1;j<numsSize;j++){
            if(nums[i] + nums[j] == target){
                result[0]=i;
                result[1]=j;
                return result;
            }
        }
    }
    return result;
}


int main(){
    int nums[10];
    int numsSize, target;
    int *result;
    int returnSize[3];

    printf("输入数据大小");
    scanf("%d", &numsSize);
    for(int i=0;i<numsSize;i++){
        printf("输入第%d个数据",i+1);
        scanf("%d", &nums[i]);
    }
    printf("输入目标值");
    scanf("%d", &target);
    result=twoSum(nums, numsSize, target, returnSize);
    for(int i=0;i<2;i++){
        printf("%d\n", result[i]);
    }
    return 0;
}