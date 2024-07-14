#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> country;
    int temp;
    for (int i = 0; i < n; i++)
    {
        cin >> temp;
        country.push_back(temp);
    }
    int i = 0, j = 0;
    int max = j - i + 1;

    while (j < country.size() - 1)
    {
        j++;
        for (int p = i; p < j; p++)
        {
            if (country[p] == country[j])
            {
                i = p + 1;
                break;
            }
        }
        int temp = j - i + 1;
        if (temp > max)
            max = temp;
    }

    cout << max;
    return 0;
}