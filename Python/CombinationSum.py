def combinationSum(candidates,target):
    output = []
    combinations = []
    sum = 0

    def dfs(i,sum):
        if sum == target:
            output.append(combinations.copy())
            return
        
        if i>=len(candidates) or sum>target:
            return
        
        combinations.append(candidates[i])
        dfs(i,sum+candidates[i])

        combinations.pop()
        dfs(i+1,sum)


    dfs(0,sum)
    return output