def combinationSumII(candidates,target):
    outputArray = []
    subArray = []
    sum = 0
    candidates.sort()

    def dfs(i,sum):
        if i == len(candidates) or sum>target:
            return
        
        sum+=candidates[i]
        subArray.append(candidates[i])
        
        if sum == target:
            outputArray.append(subArray.copy())
        else:
            dfs(i+1,sum)

        value = subArray.pop()
        while i+1<len(candidates) and candidates[i] == candidates[i+1]:
            i+=1

        dfs(i+1,sum-value)

    dfs(0,sum)
    return outputArray