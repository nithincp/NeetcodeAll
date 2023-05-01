def houseRobber(nums):
    if len(nums) == 1:
            return nums[0]

    if len(nums) == 2:
        return max(nums[0],nums[1])
        
    dp1 = [0]*len(nums)
    dp2 = [0]*len(nums)

    dp1[0] = nums[0]
    dp1[1] = max(nums[0],nums[1])

    dp2[len(nums)-1] = nums[len(nums)-1]
    dp2[len(nums)-2] = max(nums[len(nums)-2],nums[len(nums)-1])

    for i in range(2,len(nums)-1):
        dp1[i] = max(dp1[i-1],nums[i]+dp1[i-2])

    for i in range(len(nums)-3,0,-1):
        dp2[i] = max(dp2[i+1],nums[i]+dp2[i+2])

    return max(dp1[len(nums)-2],dp2[1])