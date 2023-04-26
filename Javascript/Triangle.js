var minimumPathSum = function(triangle){
    const dp = new Array(triangle.length+1).fill(0)

    for (const r of triangle.slice().reverse()){
        r.forEach((n,i) => {
            dp[i] = n + Math.min(dp[i],dp[i+1])
        })
    }

    return dp[0]
}