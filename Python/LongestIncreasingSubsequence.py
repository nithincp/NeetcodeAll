def longestSubsequence(nums):
    dp = [1] * len(nums)
    dp[0] = 1

    for i in range(1,len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], 1+dp[j])


    return max(dp)