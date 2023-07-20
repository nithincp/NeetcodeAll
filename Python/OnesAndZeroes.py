## Leetcode Problem - 474
def findMaxForm(strs,m,n):

    dp = {}

    def dfs(i,m,n):
        if i==len(strs):
            return 0
        
        if (i,m,n) in dp:
            return dp[(i,m,n)]
        
        mCount,nCount = strs[i].count("0"),strs[i].count("1")
        dp[(i,m,n)] = dfs(i+1,m,n)
        
        if mCount<=m and nCount<=n:
            dp[(i,m,n)] = max(dp[(i,m,n)] , 1+dfs(i+1,m-mCount,n-nCount))

        return dp[(i,m,n)]
    
    return dfs(0,m,n)

strs = ["10","0001","111001","1","0"]
m = 5
n = 3

print(findMaxForm(strs,m,n))