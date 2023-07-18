// Leetcode Problem - 494

var findTargetSumWays = function(nums,target){
    const memo = new Map(); // Memoization cache

    function backtracking(i, currSum) {
        if (i === nums.length) {
        if (currSum === target) {
            return 1;
        } else {
            return 0;
        }
        }

        if (memo.has(`${i},${currSum}`)) {
        return memo.get(`${i},${currSum}`);
        }

        const positiveCount = backtracking(i + 1, currSum + nums[i]);
        const negativeCount = backtracking(i + 1, currSum - nums[i]);

        const totalCount = positiveCount + negativeCount;
        memo.set(`${i},${currSum}`, totalCount);

        return totalCount;
    }

    return backtracking(0, 0);
}