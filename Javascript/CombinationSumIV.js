var combinationSum = function(nums,target){
    const dp = new Array(target+1).fill(0)
    dp[0] = 1

    for (let i =1;i<target+1;i++){
        for(const num of nums){
            if (i>=num){
                dp[i] += dp[i-num]
            }
        }
    }

    return dp[target]
}