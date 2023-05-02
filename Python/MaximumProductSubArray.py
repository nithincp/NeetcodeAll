def maxProductSubArray(nums):
    result = max(nums)
    curMax = 1
    curMin = 1

    for n in nums:
        tempMax = n*curMax
        curMax = max(n,n*curMax,n*curMin)
        curMin = min(n,n*curMin,tempMax)
        result = max(result,curMax)

    return result