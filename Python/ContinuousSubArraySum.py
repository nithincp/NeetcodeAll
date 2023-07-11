## Leetcode Problem - 523

def checkSubarraySum(nums,k):

    prefixSum = {0:-1}
    curSum = 0

    for i in range(len(nums)):
        curSum = (curSum + nums[i]) % k

        if curSum in prefixSum:
            if i - prefixSum[curSum]>1:
                return True
        else:
            prefixSum[curSum] = i

    return False



nums = [23,2,6,4,7]
k = 6

print(checkSubarraySum(nums,k))