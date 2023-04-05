var subsetsWithDuplicates = function(nums){
    const outputArray = []
    const subArray = []

    nums.sort((a,b) => a-b)

    function dfs(i){
        if(i===nums.length){
            outputArray.push([...subArray])
            return
        }

        subArray.push(nums[i])
        dfs(i+1)

        subArray.pop()
        while(i+1<nums.length && nums[i] === nums[i+1]){
            i+=1
        }
        dfs(i+1)
    }

    dfs(0)

    return outputArray
}