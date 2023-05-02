var maxProductSubArray = function(nums){
    let result = Math.max(...nums)
    let curMax = 1
    let curMin = 1
    
    for (const n of nums){
        let tempMax = n*curMax
        curMax = Math.max(n,n*curMax,n*curMin)
        curMin = Math.min(n,n*curMin,tempMax)
        result = Math.max(result,curMax)
    }

    return result
}