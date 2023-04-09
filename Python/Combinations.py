def combinations(n,k):

    outputArray = []
    combinationArray = []

    def dfs(i):
        if i == n+1 or len(combinationArray) == k:
            if len(combinationArray) == k:
                outputArray.append(combinationArray.copy())

            return
        
        combinationArray.append(i)
        dfs(i+1)

        combinationArray.pop()
        dfs(i+1)

    dfs(1)

    return outputArray