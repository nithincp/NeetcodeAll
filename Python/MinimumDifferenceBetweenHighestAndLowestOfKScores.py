##Leetcode Problem - 1984

def minimumDifference(nums,k):
    minValue = 0
    nums.sort()

    for i in range(k-1,len(nums)):
        if i == (k-1):
            minValue = nums[i] - nums[i-(k-1)]
            continue

        minValue = min(minValue, nums[i]-nums[i-(k-1)])


    return minValue