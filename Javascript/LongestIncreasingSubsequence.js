var longestSubsequence = function(nums){
    const dp = new Array(nums.length).fill(0)
    dp[0] = 1

    for(let i=1;i<nums.length;i++){
        for (let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i],1+dp[j])
            }
        }
    }

    return Math.max(...dp)
}