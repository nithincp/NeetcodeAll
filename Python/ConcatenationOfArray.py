def concatenationOfArray(nums):
    n = len(nums)
    ans = nums + [0]*n

    for i in range(len(nums)):
        ans[i+n] = nums[i]

    return ans