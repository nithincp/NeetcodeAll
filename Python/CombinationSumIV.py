def combinationSum(nums,target):
    dp = [0]*(target+1)
    dp[0] = 1

    for i in range(target+1):
        for num in nums:
            if i>=num:
                dp[i] += dp[i-num]

    return dp[target]