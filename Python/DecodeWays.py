def decodeWays(s):
    dp = {len(s) : 1}

    def dfs(i):
        if i in dp:
            return dp[i]

        if s[i] == '0':
            return 0

        dp[i] = dfs(i+1)

        if i+1<len(s) and (s[i] == '1' or (s[i] == '2' and s[i+1] in "0123456")):
            dp[i]+=dfs(i+2)

        return dp[i]

    return dfs(0)