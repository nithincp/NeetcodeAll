var combinations = function(n,k){
    const outputArray = []
    const combinationArray = []

    function dfs(i){
        if (i === n+1 || combinationArray.length === k){
            if(combinationArray.length === k){
                outputArray.push([...combinationArray])
            }

            return
        }

        combinationArray.push(i)
        dfs(i+1)

        combinationArray.pop()
        dfs(i+1)
    }

    dfs(1)
    return outputArray
}