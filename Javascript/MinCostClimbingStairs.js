var minCostClimbingStairs = function(cost){
    const n = cost.length
    const dp = new Array(n).fill(0)
    dp[n-1] = cost[n-1]
    dp[n-2] = cost[n-2]

    for (let i=n-3;i>=0;i--){
        dp[i] = Math.min(dp[i+1]+cost[i],dp[i+2]+cost[i])
    }

    return Math.min(dp[0],dp[1])
}