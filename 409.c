int longestPalindrome(char * s){
    int letters[128] = {0};    //存储字符数量
    int ans = 0,flag = 1;
    for(int i = 0; i < strlen(s); i++){
        letters[(s[i])]++;
    }
    for(int i = 0; i < 128; i++){
        // 偶数个
        if(letters[i] % 2 == 0){
            ans = ans + letters[i];
        }
        else{   //奇数个
            if(flag){   //第一次访问
                ans++;
                flag = 0;
            }

            if(letters[i] / 2 > 0){
                ans = ans + (letters[i] / 2) * 2;
            }
        }
    }

    return ans;
}