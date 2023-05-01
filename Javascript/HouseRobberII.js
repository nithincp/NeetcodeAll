var houseRobber = function(nums){
    if (nums.length === 1){
        return nums[0]
    }

    if (nums.length === 2){
        return Math.max(nums[0],nums[1])
    }
    
    const dp1 = new Array(nums.length).fill(0)
    const dp2 = new Array(nums.length).fill(0)

    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0],nums[1])

    dp2[nums.length-1] = nums[nums.length-1]
    dp2[nums.length-2] = Math.max(nums[nums.length-2], nums[nums.length-1])

    for (let i=2;i<nums.length-1;i++){
        dp1[i] = Math.max(dp1[i-1], nums[i] + dp1[i-2])
    }

    for (let i=nums.length-3;i>0;i--){
        dp2[i] = Math.max(dp2[i+1], nums[i] + dp2[i+2])
    }

    return Math.max(dp1[nums.length-2],dp2[1])
}