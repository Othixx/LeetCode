#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    int tmp;
    
    bool isShow[501] = {false};
    for(int i = 0; i < n; i++){
        cin >> tmp;
        isShow[tmp - 1] = true;
    }
    for(int i = 0; i < 501; i++){
        if(isShow[i]) cout << i + 1 << endl;
    }
    return 0;
}
// 64 位输出请用 printf("%lld")