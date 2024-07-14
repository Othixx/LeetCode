#include <stdio.h>

int climbStairs(int n){
    if(n<=2){
        return n;
    }
    return (climbStairs(n-1)+climbStairs(n-2));
}

int main(){
    int n;
    scanf("%d", &n);
    printf("%d\n", climbStairs(n));
    return 0;
}