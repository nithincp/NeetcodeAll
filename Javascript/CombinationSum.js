var combinationSum = function(candidates,target){
    const output = []
    const combinations = []
    let sum = 0

    function dfs(i,sum){
        if(sum === target){
            output.push([...combinations])
            return
        }

        if(i>=candidates.length || sum>target){
            return
        }

        combinations.push(candidates[i])
        dfs(i,sum+candidates[i])
        
        combinations.pop()
        dfs(i+1,sum)
    }

    dfs(0,sum)
    return output
}