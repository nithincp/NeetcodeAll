## Leetcode Problem - 1049

import math

def lastStoneWeightII(stones):

    dp = {}
    
    stoneSum = sum(stones)
    target = math.ceil(stoneSum/2)     

    def dfs(i,total):
        if total>=target or i == len(stones):
            return abs(total-(stoneSum-total))
        
        if (i,total) in dp:
            return dp[(i,total)]
        
        dp[(i,total)] = min(dfs(i+1,total),dfs(i+1,total+stones[i]))

        return dp[(i,total)]
    
    return dfs(0,0)



stones = [2,7,4,1,8,1]
print(lastStoneWeightII(stones))