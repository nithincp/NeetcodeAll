// Leetcode Problem - 560

var subarraySum = function(nums,k){
    let totalCount = 0
    let sum = 0
    let cumulativeSum = {0:1}

    for (const element of nums){
        sum+=element

        if (sum-k in cumulativeSum){
            totalCount+=cumulativeSum[sum-k]
        }

        cumulativeSum[sum] = (cumulativeSum[sum] || 0 ) + 1
    }


    return totalCount
}

let nums = [1,-1,0,-1,1,-1,1,-1,1]
let k = 0

console.log(subarraySum(nums,k))