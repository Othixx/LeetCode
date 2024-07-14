int majorityElement(int* nums, int numsSize) {
    int x;  //众数
    int vote = 0;  //票数
    for(int i=0;i<numsSize;i++){
        if(vote == 0){
            x = nums[i];
        }
        if(nums[i] == x){
            vote++;
        }
        else{
            vote--;
        }
    }
    printf("%d", x);
    return 0;
}