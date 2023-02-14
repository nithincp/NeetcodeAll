def findPivotIndex(nums):
    lsum = 0
    rsum = 0

    for i in range(len(nums)):
        rsum += nums[i]

    for i in range(len(nums)):
        rsum -= nums[i]
        if lsum == rsum:
            return i
        lsum += nums[i]

    return -1