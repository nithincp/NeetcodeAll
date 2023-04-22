def longestPalindromicSubstring(s):

    n = len(s)
    dp = [[False for i in range(n)] for j in range(n)]

    for i in range(n):
        dp[i][i] = True

    maxLen = 1
    result = s[0]

    for i in range(n-1):
        if s[i] == s[i+1]:
            dp[i][i+1] = True
            maxLen = 2
            result = s[i:i+2]

    for k in range(3,n+1):
        for i in range(n-k+1):
            j = i+k-1
            if dp[i+1][j-1] and s[i] == s[j]:
                dp[i][j] = True
                if k>maxLen:
                    maxLen = k
                    result = s[i:i+k] 

    return result