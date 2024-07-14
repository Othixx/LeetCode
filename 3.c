int lengthOfLongestSubstring(char* s) {
    int x = 0;  //输出
    
    for(int i=0; i<strlen(s); i++){
        int ans = 0;    //答案
        int times[128] = {0};
        times[(s[i])]++;
        ans++;
        for(int j = i+1; j<strlen(s); j++){
            times[(s[j])]++;
            if(times[(s[j])] > 1){
                break;
            }
            ans++;
        }
        if(ans > x){
            x = ans;
        }
    }
    return x;
    
}