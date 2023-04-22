var longestPalindromicSubstring = function(s){
    const n = s.length
    const dp = []

    for (let i=0;i<n;i++){
        dp[i] = new Array(n).fill(false)
    }

    for (let i=0;i<n;i++){
        dp[i][i] = true
    }

    let result = s[0]
    let maxLen = 1

    for (let i=0;i<n-1;i++){
        if (s[i] === s[i+1]){
            dp[i][i+1] = true
            maxLen = 2
            result = s.slice(i,i+2)
        }
    }

    for (let k=3;k<n+1;k++){
        for(let i=0;i<n-k+1;i++){
            let j = i+k-1
            if (dp[i+1][j-1] && (s[i] === s[j])){
                dp[i][j] = true
                if (k>maxLen){
                    maxLen = k
                    result = s.slice(i,i+k)
                }
            }
        }
    }

    return result
}