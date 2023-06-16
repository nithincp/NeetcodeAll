## Leetcode Problem - 560

def subarraySum(nums,k):
    totalCount = 0
    sum = 0
    cumulativeSum = {0:1}

    for element in nums:
        sum+=element

        if sum-k in cumulativeSum:
            totalCount+=cumulativeSum[sum-k]

        cumulativeSum[sum] = cumulativeSum.get(sum,0) + 1

    return totalCount 
