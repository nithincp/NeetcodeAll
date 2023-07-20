//Leetcode Problem - 1049

var lastStoneWeightII = function(stones){
    const stoneSum = stones.reduce((acc, stone) => acc + stone, 0);
    const target = Math.ceil(stoneSum / 2);
    const n = stones.length;

    const dp = new Array(n + 1).fill(null).map(() => new Array(target + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= target; j++) {
        if (stones[i - 1] <= j) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i - 1]] + stones[i - 1]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
        }
    }

    const subsetSum = dp[n][target];
    return Math.abs(stoneSum - 2 * subsetSum);
}


stones = [2,7,4,1,8,1]
console.log(lastStoneWeightII(stones))