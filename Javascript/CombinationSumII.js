var combinationSumII = function(candidates,target){
    const outputArray = []
    const subArray = []
    candidates.sort((a,b) => (a-b))
    let sum = 0

    function dfs(i,sum){
        if (i===candidates.length || sum>target){
            return
        }

        sum+=candidates[i]
        subArray.push(candidates[i])
        
        if (sum === target){
            outputArray.push([...subArray])
        }
        else{
            dfs(i+1,sum)
        }

        const value = subArray.pop()
        while(i+1<candidates.length && candidates[i] === candidates[i+1]){
            i+=1
        }
        dfs(i+1,sum-value)
    }

    dfs(0,sum)

    return outputArray
}