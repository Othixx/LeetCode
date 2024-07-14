#include <iostream>

using namespace std;

int main(){
    int n = 5;
    int** dp = new int*[n];
    for(int i = 0; i < n; i++){
        dp[i] = new int[n]();
    }
    return 0;
}