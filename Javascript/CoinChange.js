var coinChange = function(coins,amount){
    const dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0

    for (let a=0;a<amount+1;a++){
        for(const c of coins){
            if (a-c>=0){
                dp[a] = Math.min(dp[a],1+dp[a-c])
            } 
        }
    }

    if (dp[amount] !== amount+1){
        return dp[amount]
    }
    else{
        return -1
    }
}